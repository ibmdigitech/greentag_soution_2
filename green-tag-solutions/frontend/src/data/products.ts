export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  description: string;
  badge?: string;
  stock: number;
}

export const productCategories = [
  "All",
  "Cleaning Chemicals",
  "Cleaning Tools",
  "Safety Equipment",
  "Machines",
  "Cleaning Service",
];

export const productsData: Product[] = [
  { id: 1, name: "Floor Cleaner Pro 5L", category: "Cleaning Chemicals", price: 450, originalPrice: 540, rating: 4.8, image: "https://loremflickr.com/800/600/cleaner,bottle?lock=1", description: "Multi-purpose floor cleaner for homes and offices", stock: 50 },
  { id: 2, name: "Toilet Cleaner Max 1L", category: "Cleaning Chemicals", price: 120, originalPrice: 150, rating: 4.5, image: "https://loremflickr.com/800/600/cleaner,spray?lock=2", description: "Strong toilet stain remover with fresh fragrance", stock: 100 },
  { id: 3, name: "Glass Cleaner Spray 500ml", category: "Cleaning Chemicals", price: 180, originalPrice: 220, rating: 4.6, image: "https://loremflickr.com/800/600/glass,cleaner?lock=3", description: "Streak-free glass and mirror cleaning solution", stock: 75 },
  { id: 4, name: "Kitchen Degreaser 1L", category: "Cleaning Chemicals", price: 250, originalPrice: 300, rating: 4.7, image: "https://loremflickr.com/800/600/kitchen,cleaner?lock=4", description: "Removes oil and grease from kitchen surfaces", stock: 40 },
  { id: 5, name: "Disinfectant Liquid 5L", category: "Cleaning Chemicals", price: 550, originalPrice: 650, rating: 4.9, image: "https://loremflickr.com/800/600/disinfectant?lock=5", description: "Hospital-grade disinfectant for all surfaces", badge: "Best Seller", stock: 60 },

  { id: 6, name: "Heavy Duty Mop Set", category: "Cleaning Tools", price: 650, originalPrice: 800, rating: 4.7, image: "https://loremflickr.com/800/600/mop?lock=6", description: "Stainless steel mop with microfiber bucket system", stock: 30 },
  { id: 7, name: "Microfiber Cloth Pack", category: "Cleaning Tools", price: 220, originalPrice: 280, rating: 4.8, image: "https://loremflickr.com/800/600/microfiber?lock=7", description: "Reusable dust and cleaning cloth set", badge: "Popular", stock: 80 },
  { id: 8, name: "Floor Scrub Brush", category: "Cleaning Tools", price: 180, originalPrice: 220, rating: 4.4, image: "https://loremflickr.com/800/600/scrub,brush?lock=8", description: "Hard bristle floor scrubbing brush", stock: 45 },
  { id: 9, name: "Window Cleaning Kit", category: "Cleaning Tools", price: 850, originalPrice: 1000, rating: 4.6, image: "https://loremflickr.com/800/600/window,wiper?lock=9", description: "Complete window cleaning kit with spray and wiper", stock: 20 },
  { id: 10, name: "Dust Pan Set", category: "Cleaning Tools", price: 150, originalPrice: 190, rating: 4.5, image: "https://loremflickr.com/800/600/dustpan?lock=10", description: "Durable dust pan with brush set", stock: 70 },

  { id: 11, name: "Rubber Cleaning Gloves", category: "Safety Equipment", price: 120, originalPrice: 150, rating: 4.6, image: "https://loremflickr.com/800/600/rubber,gloves?lock=11", description: "Chemical-resistant hand gloves", stock: 100 },
  { id: 12, name: "Face Mask Pack", category: "Safety Equipment", price: 80, originalPrice: 100, rating: 4.7, image: "https://loremflickr.com/800/600/medical,mask?lock=12", description: "Disposable safety face masks", stock: 150 },
  { id: 13, name: "Safety Goggles", category: "Safety Equipment", price: 250, originalPrice: 300, rating: 4.5, image: "https://loremflickr.com/800/600/safety,goggles?lock=13", description: "Eye protection for cleaning staff", stock: 40 },
  { id: 14, name: "Cleaning Apron", category: "Safety Equipment", price: 350, originalPrice: 420, rating: 4.4, image: "https://loremflickr.com/800/600/apron?lock=14", description: "Waterproof apron for industrial cleaning", stock: 25 },
  { id: 15, name: "Safety Shoes", category: "Safety Equipment", price: 1200, originalPrice: 1500, rating: 4.8, image: "https://loremflickr.com/800/600/safety,boots?lock=15", description: "Anti-slip safety shoes for workers", stock: 15 },

  { id: 16, name: "Vacuum Cleaner Industrial", category: "Machines", price: 8500, originalPrice: 10000, rating: 4.9, image: "https://loremflickr.com/800/600/vacuum,cleaner?lock=16", description: "Heavy-duty vacuum cleaner for office cleaning", stock: 10 },
  { id: 17, name: "Pressure Washer Machine", category: "Machines", price: 12500, originalPrice: 15000, rating: 4.7, image: "https://loremflickr.com/800/600/pressure,washer?lock=17", description: "High-pressure water cleaning machine", stock: 5 },
  { id: 18, name: "Floor Scrubber Machine", category: "Machines", price: 28500, originalPrice: 32000, rating: 4.8, image: "https://loremflickr.com/800/600/industrial,machine?lock=18", description: "Automatic floor scrubbing equipment", stock: 3 },
  { id: 19, name: "Steam Cleaning Machine", category: "Machines", price: 9500, originalPrice: 11000, rating: 4.6, image: "https://loremflickr.com/800/600/steam,cleaner?lock=19", description: "High-temperature steam cleaning equipment", stock: 7 },
  { id: 20, name: "Carpet Cleaning Machine", category: "Machines", price: 18500, originalPrice: 22000, rating: 4.9, image: "https://loremflickr.com/800/600/carpet,cleaner?lock=20", description: "Professional carpet shampoo cleaning machine", badge: "Premium", stock: 4 },

  { id: 21, name: "Home Deep Cleaning", category: "Cleaning Service", price: 2999, originalPrice: 3500, rating: 4.9, image: "https://loremflickr.com/800/600/living,room?lock=21", description: "Complete home cleaning service", stock: 999 },
  { id: 22, name: "Office Cleaning Package", category: "Cleaning Service", price: 4999, originalPrice: 6000, rating: 4.8, image: "https://loremflickr.com/800/600/office,desk?lock=22", description: "Office cleaning and sanitization", stock: 999 },
  { id: 23, name: "School Cleaning Service", category: "Cleaning Service", price: 7999, originalPrice: 9500, rating: 4.7, image: "https://loremflickr.com/800/600/classroom?lock=23", description: "Classroom and campus cleaning service", stock: 999 },
  { id: 24, name: "Hospital Sanitization", category: "Cleaning Service", price: 9999, originalPrice: 12000, rating: 4.9, image: "https://loremflickr.com/800/600/hospital,room?lock=24", description: "Medical-grade sanitization service", stock: 999 },
  { id: 25, name: "Petrol Pump Cleaning", category: "Cleaning Service", price: 6999, originalPrice: 8500, rating: 4.6, image: "https://loremflickr.com/800/600/gas,station?lock=25", description: "Fuel station deep cleaning package", stock: 999 },
];
