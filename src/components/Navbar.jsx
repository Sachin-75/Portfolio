import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  // FaFacebook,
  // FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

import resume from "../assets/Sachin_Resume.pdf"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full  flex justify-between items-center px-5 bg-[#0a192f] text-gray-300 z-50'>
      <div>
        <img src={Logo} alt='Logo ' style={{ width: '100%', height: '60px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex '>
        <li className=' font-light text-white'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='font-light text-white'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='font-light text-white'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='font-light text-white'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='font-light text-white'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-2 px-4 my-2 text-4xl border-2 rounded-lg border-indigo-500 bg-[#250957cc]'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-2 px-4 my-2 text-4xl border-2 rounded-lg border-indigo-500 bg-[#250957cc]'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-2 px-6 my-2 text-4xl border-2 rounded-lg border-indigo-500 bg-[#250957cc]'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-2 px-6 my-1 text-4xl border-2 rounded-lg border-indigo-500 bg-[#250957cc]'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-3 px-1 my-2 text-4xl border-2 rounded-lg border-indigo-500 bg-[#250957cc]'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300' rel="noreferrer" target="_blank"
              href='https://www.linkedin.com/in/sachin-kumavat-50b83225b/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300' rel="noreferrer" target="_blank"
              href='https://github.com/Sachin-75/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300' rel="noreferrer"
              href={resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
