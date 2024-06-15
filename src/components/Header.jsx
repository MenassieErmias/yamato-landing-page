import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.jpg';


const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='max-w-[1000px] fixed w-full h-[80px] flex justify-between items-center px-4  cursor-pointer'>
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: '50px' }} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex font-bold uppercase'>
        <li>Home</li>
        <li>Services</li>
        <li>Products</li>
        <li>Blog</li>
        <li>Testimonials</li>
      </ul>

      {/* Hamburger */}
      <div className='flex md:hidden z-10' onClick={handleClick}>
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/* Mobile Menu */}
      <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#141C4B] flex flex-col justify-center items-center uppercase' : 'hidden'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>Services</li>
        <li className='py-6 text-4xl'>Products</li>
        <li className='py-6 text-4xl'>Blog</li>
        <li className='py-6 text-4xl'>Testimonials</li>
      </ul>
      {/* Social Icons */}
      <div className='hidden'></div>
    </div>
  )
}

export default Header