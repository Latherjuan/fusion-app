-- Ejecutar DESPUÉS de que cada persona haya entrado una vez con su correo
-- (así existe su fila en profiles). Reemplaza los correos.

-- Administrador (Juank)
update public.profiles set role = 'admin', active = true, can_edit_price = true, full_name = coalesce(full_name, 'Juank')
 where email = 'CORREO_DE_JUANK';

-- Tatiana: puede editar el precio al vender
update public.profiles set active = true, can_edit_price = true, full_name = 'Claudia Tatiana', phone = '+57 311 5740058'
 where email = 'CORREO_DE_TATIANA';

-- Luz Marina: sin permiso de precio
update public.profiles set active = true, can_edit_price = false, full_name = 'Luz Marina', phone = '+57 319 2868881'
 where email = 'CORREO_DE_LUZ_MARINA';
