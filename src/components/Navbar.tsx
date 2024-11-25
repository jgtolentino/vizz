import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-bold">
                <span className="text-blue-600">DATA</span>
                <span className="text-black">INTELLIGENCE</span>
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-blue-600">HOME</a>
            <a href="#" className="text-gray-900 hover:text-blue-600">ABOUT US</a>
            <a href="#" className="text-gray-900 hover:text-blue-600">DATA SOLUTIONS</a>
            <a href="#" className="text-gray-900 hover:text-blue-600">OUR COMPANIES</a>
            <a href="#" className="text-gray-900 hover:text-blue-600">NEWS</a>
            <a href="#" className="text-gray-900 hover:text-blue-600">CONTACT</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-900 hover:text-blue-600">HOME</a>
            <a href="#" className="block px-3 py-2 text-gray-900 hover:text-blue-600">ABOUT US</a>
            <a href="#" className="block px-3 py-2 text-gray-900 hover:text-blue-600">DATA SOLUTIONS</a>
            <a href="#" className="block px-3 py-2 text-gray-900 hover:text-blue-600">OUR COMPANIES</a>
            <a href="#" className="block px-3 py-2 text-gray-900 hover:text-blue-600">NEWS</a>
            <a href="#" className="block px-3 py-2 text-gray-900 hover:text-blue-600">CONTACT</a>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;