import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const input = join('src', 'assets', 'logo.png');
const output = join('public', 'logo.webp');

await sharp(input)
  .webp({ quality: 80 })
  .toFile(output);
console.log('Converted to WebP');
