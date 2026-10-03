// Migra el catálogo (data/products.json + assets/products/*) a Supabase:
//   1) sube cada foto al bucket de Storage
//   2) inserta/actualiza el producto en la tabla `products` con su image_url
// Es idempotente: se puede ejecutar varias veces.
//
// Uso:  cp .env.example .env   (llenar SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY)
//       npm install && npm run migrate:catalog
import { createClient } from '@supabase/supabase-js';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
const BUCKET = process.env.PRODUCT_BUCKET || 'product-images';
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Faltan SUPABASE_URL y/o SUPABASE_SERVICE_ROLE_KEY (ver .env.example).');
  process.exit(1);
}
const sb = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const products = JSON.parse(await readFile(path.join(root, 'data/products.json'), 'utf8'));
const rows = [];
for (const [i, p] of products.entries()) {
  let image_url = null;
  if (p.image_file) {
    const file = await readFile(path.join(root, 'assets/products', p.image_file));
    const ext = p.image_file.split('.').pop().toLowerCase();
    const objectPath = `${p.ref}.${ext}`;
    const { error } = await sb.storage.from(BUCKET).upload(objectPath, file, {
      contentType: ext === 'png' ? 'image/png' : 'image/jpeg',
      upsert: true,
    });
    if (error) { console.error(`Foto de ${p.ref}:`, error.message); process.exit(1); }
    image_url = sb.storage.from(BUCKET).getPublicUrl(objectPath).data.publicUrl;
  }
  rows.push({
    ref: p.ref, name: p.name, category: p.category, price: p.price,
    presentation: p.presentation ?? null, days: p.days ?? 30,
    description: p.description ?? null, invima: p.invima ?? null,
    active: p.active !== false, image_url,
  });
  process.stdout.write(`\r${i + 1}/${products.length} fotos subidas`);
}
console.log();
const { error } = await sb.from('products').upsert(rows, { onConflict: 'ref' });
if (error) { console.error('Error al guardar productos:', error.message); process.exit(1); }
console.log(`Listo: ${rows.length} productos en el catálogo.`);
