import Link from 'next/link';

import { Activity } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <header className="bg-white px-6 py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Activity className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-gray-900">Portfio</span>
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link href="#features" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-gray-900">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  );
};
