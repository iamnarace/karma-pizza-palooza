
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pizza-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="font-display text-2xl font-bold mb-4">
              Karma<span className="text-pizza-red">Pizza</span>
            </div>
            <p className="text-white/70 mb-6">
              Artisanal pizzas made with organic ingredients, sustainable practices, and lots of love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-pizza-red transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-pizza-red transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-2.717 0-3.056.01-4.122.06-1.065.05-1.79.217-2.428.463a4.9 4.9 0 00-1.772 1.153A4.9 4.9 0 002.525 5.45c-.247.637-.415 1.363-.465 2.428C2.01 8.944 2 9.283 2 12s.01 3.056.06 4.122c.05 1.065.218 1.79.465 2.428a4.9 4.9 0 001.153 1.772 4.9 4.9 0 001.772 1.153c.637.247 1.363.415 2.428.465 1.066.05 1.405.06 4.122.06s3.056-.01 4.122-.06c1.065-.05 1.79-.218 2.428-.465a4.9 4.9 0 001.772-1.153 4.9 4.9 0 001.153-1.772c.247-.637.415-1.363.465-2.428.05-1.066.06-1.405.06-4.122s-.01-3.056-.06-4.122c-.05-1.065-.218-1.79-.465-2.428a4.9 4.9 0 00-1.153-1.772 4.9 4.9 0 00-1.772-1.153c-.637-.247-1.363-.415-2.428-.465C15.056 2.01 14.717 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 01-.748 1.15c-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.098 3.098 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zm0 3.064a5.134 5.134 0 100 10.27 5.134 5.134 0 000-10.27zm0 8.468a3.334 3.334 0 110-6.668 3.334 3.334 0 010 6.668zm6.538-8.669a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-pizza-red transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-pizza-red transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-white/70 hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#location" className="text-white/70 hover:text-white transition-colors">Location</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Catering</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Private Events</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Delivery Partners</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Subscribe</h3>
            <p className="text-white/70 mb-4">
              Join our mailing list for special offers and news about Karma Pizza.
            </p>
            <form className="flex mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md flex-1 text-pizza-dark focus:outline-none"
              />
              <button className="bg-pizza-red text-white px-4 py-2 rounded-r-md hover:bg-pizza-red/90 transition-colors">
                Join
              </button>
            </form>
            <p className="text-white/50 text-sm">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} Karma Pizza. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
