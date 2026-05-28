const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(srcDir);
let counter = 1;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('images.unsplash.com')) {
    // Replace all Unsplash image URLs with loremflickr, adding a lock parameter to get different images
    content = content.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+(\?[a-zA-Z0-9_=\-&]*)?/g, () => {
      return `https://loremflickr.com/800/600/cleaning?lock=${counter++}`;
    });
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
