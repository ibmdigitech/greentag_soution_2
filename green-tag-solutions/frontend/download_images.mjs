import fs from 'fs';
import https from 'https';
import path from 'path';

const products = [
  { id: 1, name: "Floor Cleaner Pro 5L", image: "https://images.unsplash.com/photo-1584820927508-cadefc43a3d3?w=800&q=80" },
  { id: 2, name: "Toilet Cleaner Max 1L", image: "https://images.unsplash.com/photo-1585834882196-1c888d3d9eeb?w=800&q=80" },
  { id: 3, name: "Glass Cleaner Spray 500ml", image: "https://images.unsplash.com/photo-1528310263463-5487771cb7bd?w=800&q=80" },
  { id: 4, name: "Kitchen Degreaser 1L", image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=800&q=80" },
  { id: 5, name: "Disinfectant Liquid 5L", image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=800&q=80" },

  { id: 6, name: "Heavy Duty Mop Set", image: "https://images.unsplash.com/photo-1585933646706-7b620ea3f309?w=800&q=80" },
  { id: 7, name: "Microfiber Cloth Pack", image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=800&q=80" },
  { id: 8, name: "Floor Scrub Brush", image: "https://images.unsplash.com/photo-1584820926521-72b156ba2ab1?w=800&q=80" },
  { id: 9, name: "Window Cleaning Kit", image: "https://images.unsplash.com/photo-1528310344449-6f1604a11ccf?w=800&q=80" },
  { id: 10, name: "Dust Pan Set", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },

  { id: 11, name: "Rubber Cleaning Gloves", image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&q=80" },
  { id: 12, name: "Face Mask Pack", image: "https://images.unsplash.com/photo-1583944984065-22442d22f183?w=800&q=80" },
  { id: 13, name: "Safety Goggles", image: "https://images.unsplash.com/photo-1588636730591-e0c1566373b5?w=800&q=80" },
  { id: 14, name: "Cleaning Apron", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80" },
  { id: 15, name: "Safety Shoes", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614c3a?w=800&q=80" },

  { id: 16, name: "Vacuum Cleaner Industrial", image: "https://images.unsplash.com/photo-1558384110-31846b450702?w=800&q=80" },
  { id: 17, name: "Pressure Washer Machine", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
  { id: 18, name: "Floor Scrubber Machine", image: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?w=800&q=80" },
  { id: 19, name: "Steam Cleaning Machine", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80" },
  { id: 20, name: "Carpet Cleaning Machine", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80" },

  { id: 21, name: "Home Deep Cleaning", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" },
  { id: 22, name: "Office Cleaning Package", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
  { id: 23, name: "School Cleaning Service", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80" },
  { id: 24, name: "Hospital Sanitization", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
  { id: 25, name: "Petrol Pump Cleaning", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80" },
];

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close(resolve);
          });
        }).on('error', (err) => {
          fs.unlink(dest, () => reject(err));
        });
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function main() {
  const dir = path.join(process.cwd(), 'public', 'images', 'products');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const product of products) {
    const filename = `product-${product.id}.jpg`;
    const dest = path.join(dir, filename);
    console.log(`Downloading ${filename}...`);
    try {
      await downloadFile(product.image, dest);
      console.log(`Successfully downloaded ${filename}`);
    } catch (e) {
      console.error(`Failed to download ${filename}:`, e);
    }
  }
}

main();
