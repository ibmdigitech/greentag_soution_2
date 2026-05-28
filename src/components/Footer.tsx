import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary-400 mb-3">Green Tag Solutions</h3>
            <p className="text-gray-400 text-xs">Professional cleaning services across Kerala, India.</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-xs">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition">Products</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-3">Services</h4>
            <ul className="space-y-1 text-xs">
              <li className="text-gray-400">Home Cleaning</li>
              <li className="text-gray-400">Office Cleaning</li>
              <li className="text-gray-400">Deep Cleaning</li>
              <li className="text-gray-400">Pest Control</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-3">Contact</h4>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>+91 98765 43210</li>
              <li>info@greentagsolutions.com</li>
              <li>Kochi, Kerala</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Green Tag Solutions</p>
        </div>
      </div>
    </footer>
  );
}