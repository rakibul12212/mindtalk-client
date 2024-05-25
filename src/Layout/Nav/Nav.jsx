import React, { useState } from 'react';
import Button from '../../Component/ui/Button/Button';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className="bg-[#4D869C] p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="#" className="text-white text-xl font-bold">MindTalk</a>
        </div>
        {/* Links - Desktop */}
        <div className="hidden md:block">
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Services</a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
        </div>
        {/* Button */}
        <div  className="hidden md:block  md:flex gap-2">
          <Button text='signin' className='className="hidden md:block "' bgColor='bg-[#7AB2B2]'></Button>
          <Button text='signup' className='className="hidden md:block"' bgColor='bg-[#7AB2B2]'></Button>
        </div>
        
        {/* Dropdown for Mobile */}
        <div className="md:hidden ">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-[60px] left-0 w-full bg-[#7AB2B2] ">
              <div className="p-4">
                <a href="#" className="block text-white hover:text-[#4D869C] px-3 py-2 rounded-md">Home</a>
                <a href="#" className="block text-white hover:text-[#4D869C] px-3 py-2 rounded-md">About</a>
                <a href="#" className="block text-white hover:text-[#4D869C] px-3 py-2 rounded-md">Services</a>
                <a href="#" className="block text-white hover:text-[#4D869C] px-3 py-2 rounded-md">Contact</a>
                <a href="#"><Button text='signin'  bgColor='bg-[#4D869C]' hoverColor='bg-[#7AB2B2]'></Button></a>
                
                
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default App;
