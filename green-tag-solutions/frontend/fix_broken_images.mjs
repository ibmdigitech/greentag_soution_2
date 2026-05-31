import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { Readable } from 'stream';

// Only the broken images (29 bytes)
const brokenProducts = [
  { id: 1,  url: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=800&q=80&auto=format&fit=crop" },
  { id: 2,  url: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80&auto=format&fit=crop" },
  { id: 3,  url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&auto=format&fit=crop" },
  { id: 6,  url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop" },
  { id: 8,  url: "https://images.unsplash.com/photo-1606206873764-fd15e242aaa0?w=800&q=80&auto=format&fit=crop" },
  { id: 9,  url: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80&auto=format&fit=crop" },
  { id: 12, url: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&q=80&auto=format&fit=crop" },
  { id: 13, url: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&q=80&auto=format&fit=crop" },
  { id: 15, url: "https://images.unsplash.com/photo-1584820927508-cadefc43a3d3?w=800&q=80&auto=format&fit=crop" },
  { id: 16, url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80&auto=format&fit=crop" },
];

// Fallback: picsum photos (reliable, always works)
const picsumFallback = {
  1:  "https://picsum.photos/seed/cleaner1/800/600",
  2:  "https://picsum.photos/seed/toilet/800/600",
  3:  "https://picsum.photos/seed/kitchen/800/600",
  6:  "https://picsum.photos/seed/glass/800/600",
  8:  "https://picsum.photos/seed/mop/800/600",
  9:  "https://picsum.photos/seed/brush/800/600",
  12: "https://picsum.photos/seed/safety/800/600",
  13: "https://picsum.photos/seed/gloves/800/600",
  15: "https://picsum.photos/seed/machine/800/600",
  16: "https://picsum.photos/seed/vacuum/800/600",
};

const outputDir = path.join('public', 'images', 'products');

async function downloadImage(url, filePath) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  
  if (buffer.length < 1000) {
    throw new Error(`Suspiciously small file: ${buffer.length} bytes`);
  }
  
  fs.writeFileSync(filePath, buffer);
  return buffer.length;
}

async function main() {
  console.log('🔧 Fixing broken product images...\n');
  
  for (const product of brokenProducts) {
    const filePath = path.join(outputDir, `product-${product.id}.jpg`);
    
    // Try Unsplash first
    let success = false;
    try {
      const size = await downloadImage(product.url, filePath);
      console.log(`✅ product-${product.id}.jpg — ${(size/1024).toFixed(1)}KB`);
      success = true;
    } catch (err) {
      console.log(`⚠️  Unsplash failed for #${product.id}: ${err.message}`);
    }
    
    // Fallback to picsum
    if (!success) {
      try {
        const fallbackUrl = picsumFallback[product.id];
        const size = await downloadImage(fallbackUrl, filePath);
        console.log(`✅ product-${product.id}.jpg (picsum) — ${(size/1024).toFixed(1)}KB`);
      } catch (err2) {
        console.log(`❌ All sources failed for #${product.id}: ${err2.message}`);
      }
    }
  }
  
  console.log('\n✅ Done fixing images!');
}

main().catch(console.error);
