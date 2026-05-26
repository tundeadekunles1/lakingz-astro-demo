import { readdir, unlink } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const publicDir = fileURLToPath(new URL('../public', import.meta.url));
const convertExtensions = new Set(['.png', '.jpg', '.jpeg']);

const entries = await readdir(publicDir, { withFileTypes: true });
const files = entries
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter((name) => convertExtensions.has(extname(name).toLowerCase()));

for (const file of files) {
  const inputPath = join(publicDir, file);
  const stem = basename(file, extname(file));
  const outputPath = join(publicDir, `${stem}.webp`);

  await sharp(inputPath)
    .webp({ quality: 82, effort: 4 })
    .toFile(outputPath);

  await unlink(inputPath);
  console.log(`Converted ${file} -> ${stem}.webp`);
}
