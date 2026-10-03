# Fusión de Sabor Natural — app web

App de ventas (catálogo, vender, clientes, reconsumo, estadísticas) con login por correo (enlace mágico) y datos en **Supabase**. Es una web estática: sin build, solo HTML + JS.

```
index.html · config.js · css/ · js/        ← la app (lo que se publica)
assets/logo.png                            ← logo
assets/products/ + data/products.json      ← catálogo original (85 productos con foto), solo para migrar
supabase/migrations/0001_init.sql          ← tablas, seguridad (RLS), trigger de perfiles, bucket de fotos
supabase/seed_roles.sql                    ← deja a Juank como admin y a Tatiana con permiso de precio
scripts/migrate-catalog.mjs                ← sube fotos + productos a Supabase
.github/workflows/pages.yml                ← publica en GitHub Pages
```

## Puesta en marcha (una sola vez)

1. **Supabase**: crea o elige el proyecto y, en *SQL Editor*, ejecuta [`supabase/migrations/0001_init.sql`](supabase/migrations/0001_init.sql).
2. **Config**: en `config.js` pon la *Project URL* y la *anon/publishable key* (Project Settings → API). La anon key es pública por diseño; la seguridad la dan las políticas RLS. **Nunca** pongas ahí la `service_role`.
3. **Auth**: en Authentication → URL Configuration, pon como *Site URL* la dirección donde se publica la app (ej. `https://USUARIO.github.io/REPO/`) y añádela a *Redirect URLs*. Sin esto, el enlace del correo no vuelve a la app.
4. **Catálogo**: copia `.env.example` a `.env`, llena `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY`, y ejecuta:
   ```bash
   npm install
   npm run migrate:catalog
   ```
   Sube las 85 fotos a Storage y crea los productos. Se puede repetir sin duplicar.
5. **Publicar**: sube la carpeta a GitHub y activa Settings → Pages → *Source: GitHub Actions*. Cada push a `main` publica la app.
6. **Primer ingreso**: cada persona entra con su correo y recibe el enlace. Las cuentas nuevas quedan **pendientes de aprobación** (no ven nada hasta que un admin las active). Ejecuta [`supabase/seed_roles.sql`](supabase/seed_roles.sql) (con los correos reales) para fijar admin y permisos. Desde ahí, **Administración** permite cambiar rol, permiso de precio y activar/desactivar personas sin tocar SQL.
7. **Datos viejos**: cada vendedora entra a *Mi cuenta → Importar respaldo* y elige el `.json` que descargó de la versión anterior. Los productos que ella agregó localmente y no están en el catálogo se importan también.

## Probar en local
```bash
npm run serve    # http://localhost:5173
```
Para que el enlace del correo funcione en local, agrega `http://localhost:5173/` a *Redirect URLs* en Supabase.

## Quién puede qué
| | Vendedora | Admin |
|---|---|---|
| Ver catálogo / agregar producto | ✓ | ✓ |
| Editar / dar de baja producto | — | ✓ |
| Ver y editar **solo sus** clientes, ventas, avisos | ✓ | ✓ (además lee todo) |
| Cambiar precio al vender | solo si `can_edit_price` | idem |
| Estadísticas | las suyas | las suyas + combinadas |
| Pantalla Administración | — | ✓ |

## Pendientes conocidos
- El permiso de precio hoy se aplica en pantalla. Una regla en el servidor (trigger que rechace precios distintos al catálogo) queda para una v2.
- No hay costo por producto: "producto que más deja" se calcula por ingreso (precio × cantidad).
- Requiere internet para usarse (ya no funciona offline).
