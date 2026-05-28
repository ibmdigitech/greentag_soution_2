import Link from "next/link";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.jpeg" alt="Green Tag Solutions" width={32} height={32} className="rounded-full w-8 h-8" />
            <span className="text-lg font-bold text-primary-600">Green Tag Solutions</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition text-sm font-medium">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 transition text-sm font-medium">Services</Link>
            <Link href="/products" className="text-gray-700 hover:text-primary-600 transition text-sm font-medium">Products</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-primary-600 transition text-sm font-medium">Gallery</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition text-sm font-medium">Contact</Link>
          </div>

          <a 
            href="https://wa.me/919876543210" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-sm"
          >
            <PhoneIcon className="w-3 h-3 mr-1" />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}