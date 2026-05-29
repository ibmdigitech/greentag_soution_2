import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { Readable } from 'stream';

const products = [
  { id: 1, name: "Floor Cleaner Pro 5L", image: "https://images.unsplash.com/photo-1584820927508-cadefc43a3d3?w=800&q=80" },
  { id: 2, name: "Toilet Cleaner Max 1L", image: "https://images.unsplash.com/photo-1585834882196-1c888d3d9eeb?w=800&q=80" },
  { id: 3, name: "Glass Cleaner Spray 500ml", image: "https://images.unsplash.com/photo-1528310263463-5487771cb7bd?w=800&q=80" },
  { id: 6, name: "Heavy Duty Mop Set", image: "https://images.unsplash.com/photo-1585933646706-7b620ea3f309?w=800&q=80" },
  { id: 8, name: "Floor Scrub Brush", image: "https://images.unsplash.com/photo-1584820926521-72b156ba2ab1?w=800&q=80" },
  { id: 9, name: "Window Cleaning Kit", image: "https://images.unsplash.com/photo-1528310344449-6f1604a11ccf?w=800&q=80" },
  { id: 11, name: "Rubber Cleaning Gloves", image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&q=80" },
  { id: 12, name: "Face Mask Pack", image: "https://images.unsplash.com/photo-1583944984065-22442d22f183?w=800&q=80" },
  { id: 13, name: "Safety Goggles", image: "https://images.unsplash.com/photo-1588636730591-e0c1566373b5?w=800&q=80" },
  { id: 15, name: "Safety Shoes", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614c3a?w=800&q=80" },
  { id: 16, name: "Vacuum Cleaner Industrial", image: "https://images.unsplash.com/photo-1558384110-31846b450702?w=800&q=80" },
];

async function downloadImage(url, dest) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  const fileStream = fs.createWriteStream(dest);
  await pipeline(Readable.fromWeb(res.body), fileStream);
}

async function main() {
  const dir = path.join(process.cwd(), 'public', 'images', 'products');
  for (const product of products) {
    const dest = path.join(dir, `product-${product.id}.jpg`);
    console.log(`Downloading ${dest}...`);
    try {
      await downloadImage(product.image, dest);
      console.log(`Success: ${product.id}`);
    } catch (e) {
      console.error(`Error ${product.id}:`, e.message);
    }
  }
}

main();
