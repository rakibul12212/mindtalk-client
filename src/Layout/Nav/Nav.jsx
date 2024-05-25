import React, { useState } from 'react';
import Button from '../../Component/ui/Button/Button';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="#" className="text-white text-xl font-bold">Logo</a>
        </div>
        {/* Links - Desktop */}
        <div className="hidden md:block">
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Services</a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
        </div>
        <div>
          <Button text='submit'></Button>
        </div>
        {/* Dropdown for Mobile */}
        <div className="md:hidden ">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-100 left-0 w-full bg-gray-800 top-50">
              <div className="p-4">
                <a href="#" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
                <a href="#" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
                <a href="#" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">Services</a>
                <a href="#" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
                <Button text='submit'></Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default App;
