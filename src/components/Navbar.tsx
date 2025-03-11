
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="font-display text-2xl font-bold text-pizza-red">
              Karma<span className="text-pizza-dark">Pizza</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#home" className="nav-link font-medium text-pizza-dark hover:text-pizza-red transition-colors">
              Home
            </a>
            <a href="#about" className="nav-link font-medium text-pizza-dark hover:text-pizza-red transition-colors">
              About Us
            </a>
            <a href="#menu" className="nav-link font-medium text-pizza-dark hover:text-pizza-red transition-colors">
              Our Menu
            </a>
            <a href="#location" className="nav-link font-medium text-pizza-dark hover:text-pizza-red transition-colors">
              Location
            </a>
            <a href="#contact" className="nav-link font-medium text-pizza-dark hover:text-pizza-red transition-colors">
              Contact
            </a>
          </nav>

          {/* Cart Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-pizza-olive hover:bg-pizza-olive/90 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-all duration-300 transform hover:scale-105">
              <ShoppingCart size={18} />
              <span>Order Now</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-pizza-dark hover:text-pizza-red"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden h-screen bg-white/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
            <a
              href="#home"
              className="block py-4 text-center text-pizza-dark hover:text-pizza-red text-lg border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-4 text-center text-pizza-dark hover:text-pizza-red text-lg border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#menu"
              className="block py-4 text-center text-pizza-dark hover:text-pizza-red text-lg border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Menu
            </a>
            <a
              href="#location"
              className="block py-4 text-center text-pizza-dark hover:text-pizza-red text-lg border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Location
            </a>
            <a
              href="#contact"
              className="block py-4 text-center text-pizza-dark hover:text-pizza-red text-lg border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4">
              <button className="w-full bg-pizza-olive hover:bg-pizza-olive/90 text-white px-4 py-3 rounded-md flex items-center justify-center space-x-2">
                <ShoppingCart size={18} />
                <span>Order Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
