-- Fusión de Sabor Natural — esquema inicial
-- Ejecutar en Supabase (SQL editor o `supabase db push`).

-- ───────────── Tablas ─────────────
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  phone text,
  role text not null default 'vendedora' check (role in ('admin','vendedora')),
  can_edit_price boolean not null default false,
  active boolean not null default false,   -- las cuentas nuevas esperan aprobación del admin
  created_at timestamptz not null default now()
);

create table public.products (
  ref text primary key,
  name text not null,
  category text not null,
  price integer not null,
  presentation text,
  days integer not null default 30,
  description text,
  invima text,
  image_url text,
  active boolean not null default true,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.clients (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  phone text, email text, address text, notes text,
  created_at timestamptz not null default now()
);

create table public.sales (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  client_id uuid references public.clients(id) on delete set null,
  client_name text, vendor_name text,
  sale_date date not null,
  items jsonb not null,             -- [{ref,name,price,qty,presentation}]
  total integer not null,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.reminders (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  client_id uuid references public.clients(id) on delete cascade,
  client_name text,
  product_ref text references public.products(ref) on delete set null,
  product_name text,
  sale_id uuid references public.sales(id) on delete cascade,
  sale_date date, due_date date not null, days integer,
  status text not null default 'pending' check (status in ('pending','contacted','renewed','dismissed')),
  contacted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index on public.clients (owner_id);
create index on public.sales (owner_id, sale_date desc);
create index on public.reminders (owner_id, status, due_date);
create index on public.reminders (sale_id);

-- ───────────── Helpers de rol ─────────────
create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin' and active);
$$;

create or replace function public.is_active() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and active);
$$;

-- ───────────── Perfil automático al crearse un usuario ─────────────
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, nullif(new.raw_user_meta_data->>'full_name',''));
  return new;
end $$;

create trigger on_auth_user_created
  after insert on auth.users for each row execute function public.handle_new_user();

-- Una vendedora no puede cambiarse role / can_edit_price / active / email.
create or replace function public.protect_profile_columns() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  -- auth.uid() es null en el SQL editor / service role: ahí sí se permite todo.
  if auth.uid() is not null and not public.is_admin() then
    new.role := old.role;
    new.can_edit_price := old.can_edit_price;
    new.active := old.active;
    new.email := old.email;
  end if;
  return new;
end $$;

create trigger profiles_protect before update on public.profiles
  for each row execute function public.protect_profile_columns();

-- ───────────── Row Level Security ─────────────
alter table public.profiles  enable row level security;
alter table public.products  enable row level security;
alter table public.clients   enable row level security;
alter table public.sales     enable row level security;
alter table public.reminders enable row level security;

-- profiles
create policy profiles_select on public.profiles for select to authenticated
  using (id = auth.uid() or public.is_admin());
create policy profiles_update_own on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());
create policy profiles_update_admin on public.profiles for update to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- products: leer todos, agregar cualquiera, editar/dar de baja solo admin
create policy products_select on public.products for select to authenticated using (public.is_active());
create policy products_insert on public.products for insert to authenticated
  with check (public.is_active() and created_by = auth.uid());
create policy products_update on public.products for update to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy products_delete on public.products for delete to authenticated using (public.is_admin());

-- clients / sales / reminders: cada quien lo suyo; admin puede leer todo
create policy clients_rw on public.clients for all to authenticated
  using (owner_id = auth.uid() and public.is_active()) with check (owner_id = auth.uid() and public.is_active());
create policy clients_admin_read on public.clients for select to authenticated using (public.is_admin());

create policy sales_rw on public.sales for all to authenticated
  using (owner_id = auth.uid() and public.is_active()) with check (owner_id = auth.uid() and public.is_active());
create policy sales_admin_read on public.sales for select to authenticated using (public.is_admin());

create policy reminders_rw on public.reminders for all to authenticated
  using (owner_id = auth.uid() and public.is_active()) with check (owner_id = auth.uid() and public.is_active());
create policy reminders_admin_read on public.reminders for select to authenticated using (public.is_admin());

-- ───────────── Storage: fotos de producto ─────────────
insert into storage.buckets (id, name, public) values ('product-images', 'product-images', true)
on conflict (id) do nothing;

-- (bucket público: las fotos se sirven por URL sin necesidad de policy de lectura; así nadie puede listar el bucket)
create policy "product images: subir autenticadas" on storage.objects for insert to authenticated
  with check (bucket_id = 'product-images' and public.is_active());
create policy "product images: reemplazar admin" on storage.objects for update to authenticated
  using (bucket_id = 'product-images' and public.is_admin());
create policy "product images: borrar admin" on storage.objects for delete to authenticated
  using (bucket_id = 'product-images' and public.is_admin());

-- ───────────── Endurecimiento: funciones no invocables por la API pública ─────────────
revoke execute on function public.is_admin() from public, anon;
revoke execute on function public.is_active() from public, anon;
grant  execute on function public.is_admin() to authenticated;
grant  execute on function public.is_active() to authenticated;
revoke execute on function public.handle_new_user() from public, anon, authenticated;
revoke execute on function public.protect_profile_columns() from public, anon, authenticated;
