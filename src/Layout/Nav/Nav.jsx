import React, { useState } from 'react';
import Button from '../../Component/ui/Button/Button';
import { Link } from 'react-router-dom';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className="bg-[#4D869C] p-4 sticky top-0 z-50">
      <div className="container  mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href='/' className='flex items-center' >
          <div><img src="https://i.ibb.co/pndLmw9/logo.png" alt="" className='max-h-12'/></div>
          <div>
           <p className='font-bold text-white'>MindTalk</p>
           <p className='font-thin text-xs text-white'>Your Mental Health matters</p>
          </div>
        </a>
        {/* Links - Desktop */}
        <div className="hidden md:block">
          <Link to="/" className="text-white hover:border-b-2 px-3 py-2 rounded-md">Home</Link>
          <Link to="/about" className="text-white hover:border-b-2 px-3 py-2 rounded-md">About</Link>
          <Link to="/services" className="text-white hover:border-b-2 px-3 py-2 rounded-md">Services</Link>
          <Link to="/contact" className="text-white hover:border-b-2 px-3 py-2 rounded-md">Contact</Link>
        </div>
        {/* Button */}
        <div  className="hidden md:block  md:flex gap-2">
          <Link to='/login'><Button text='Login' className='className="hidden md:block "' bgColor='bg-[#7AB2B2]' hoverColor='bg-[#4D869C]' ></Button></Link>
          <Link to='/signup'><Button text='Signup' className='className="hidden md:block"' bgColor='bg-[#7AB2B2]' hoverColor='bg-[#4D869C]'></Button></Link>
        </div>
        
        {/* Dropdown for Mobile */}
        <div className="md:hidden ">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-[70px] left-0 w-full bg-[#7AB2B2] top-100 z-10">
              <div className="p-4">
                <Link to="/" className="block text-white hover:text-[#4D869C] px-3 py-2 rounded-md">Home</Link>
                <Link to="/about" className="block text-white hover:text-[#4D869C] px-3 py-2 rounded-md">About</Link>
                <Link to="/services" className="block text-white hover:text-[#4D869C] px-3 py-2 rounded-md">Services</Link>
                <Link to="contact" className="block text-white hover:text-[#4D869C] px-3 py-2 rounded-md">Contact</Link>
                <Link to="/login" className="block text-white hover:text-[#4D869C] px-3 py-2 rounded-md">LogIn</Link>
                <Link to="/signup" className="block text-white hover:text-[#4D869C] px-3 py-2 rounded-md">SignUp</Link>

                
                
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default App;
