import Link from 'next/link';

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold">Portfio</h3>
          <p className="text-gray-400">
            Simplifying portfolio creation for everyone.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-semibold">Product</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#features" className="text-gray-400 hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-gray-400 hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Integrations
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-semibold">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-semibold">Connect</h4>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Portfio. All rights reserved.</p>
      </div>
    </footer>
  );
};
