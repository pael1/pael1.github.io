import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  // FaLinkedin,
  // FaFacebook,
  // FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsDownload } from 'react-icons/bs';
// import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import CVFile from '../assets/RAFAEL_FERNANDEZ.pdf';
import GIF from '../assets/down.gif';
import NoScroll from '../assets/no-scroll1.gif';
import Scroll from '../assets/scroll.gif';
import { useScrollDirection } from 'react-use-scroll-direction';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const { 
    isScrolling,
    // isScrollingX,
    // isScrollingY,
    isScrollingUp, 
    // isScrollingDown,
    // isScrollingLeft,
    // isScrollingRight,
    // scrollDirection,
  } = useScrollDirection()


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <h1 className='text-2xl font-normal leading-normal mt-0 mb-2 text-pink-700 font-serif border-2 border-pink-700 px-3'>RF</h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='transition duration-150 border-b-4 border-transparent hover:border-pink-600'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='transition duration-150 border-b-4 border-transparent hover:border-pink-600'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='transition duration-150 border-b-4 border-transparent hover:border-pink-600'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='transition duration-150 border-b-4 border-transparent hover:border-pink-600'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='transition duration-150 border-b-4 border-transparent hover:border-pink-600'>
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
        <li className='py-6 text-4xl transition duration-150 border-b-4 border-transparent hover:border-pink-600'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl transition duration-150 border-b-4 border-transparent hover:border-pink-600'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl transition duration-150 border-b-4 border-transparent hover:border-pink-600'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl transition duration-150 border-b-4 border-transparent hover:border-pink-600'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl transition duration-150 border-b-4 border-transparent hover:border-pink-600'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* side bar */}
      <ul className={
        !nav
          ? 'hidden'
          : 'mx-auto fixed inset-x-4 bottom-0 flex justify-between mb-10'
      }>
        <li className='flex justify-between items-center bg-[#333333]'>
          <a
            className='flex justify-between items-center w-full text-gray-300 gap-2'
            href='https://github.com/pael1'
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className='flex justify-between items-center bg-[#517e6c]'>
          <a
            className='flex justify-between items-center w-full text-gray-300 gap-2'
            href='mailto:rafaelfernandez677@gmail.com'
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className='flex justify-between items-center bg-[#565f69]'>
          <a
            className='flex justify-between items-center w-full text-gray-300 gap-2'
            href={CVFile} download="CVFile.pdf"
          >
            Resume <BsDownload size={30} />
          </a>
        </li>
      </ul>
      <div className={
        !nav
          ? 'hidden'
          : 'flex fixed flex-col top-[5%] right-0'
      }>
        <img className='w-[180px] mx-auto' src={GIF} alt="HTML icon" />
      </div>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li> */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/pael1'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#517e6c]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:rafaelfernandez677@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={CVFile} download="CVFile.pdf"
            >
              Resume <BsDownload size={30} />
            </a>
          </li>
        </ul>
      </div>
      <div className='hidden lg:flex fixed flex-col top-[35%] right-0'>
      {/* {isScrolling ? 'Scrolling' : 'Not scrolling'} */}
      {isScrolling ? (isScrollingUp ? '' : <img className='w-[180px] mx-auto' src={Scroll} alt="HTML icon" />) : ''}
      {/* {isScrollingUp && <img className='w-[180px] mx-auto' src={NoScroll} alt="HTML icon" />}
      {isScrollingDown && <img className='w-[180px] mx-auto' src={GIF} alt="HTML icon" />} */}
        
      </div>
    </div>
  );
};

export default Navbar;