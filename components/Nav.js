
import { motion } from "framer-motion"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu, AiOutlineInstagram} from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './nav.css'

// import { useRouter } from 'next/router';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState('#1f2937');

  const handleNav = () => {
    setNav(!nav);
  };
  const animation = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 0.4,
      },
    },
  };
  

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <motion.div 
    variants={animation}
    initial="hidden"
    animate="show"
    style={{ backgroundColor: 'white' }}
    className= {shadow? ' fixed w-full h-20 shadow-xl z-[100]' : ' fixed w-full h-20 z-[100]'}>
      <div className="absolute w-[50%] inset-0 gradient " />
      <div className='flex justify-between items-center w-full px-2 2xl:px-16  pl-9'>
          <p className='uppercase tracking-widest z-[200] font-bold'> Bibisha Guragain</p>
                
           <div>
               <ul className='hidden md:flex '>
                   <Link href='/'>
                       <li className='ml-10 text-sm   hover:text-[#62b6cb] uppercase py-6'>Home </li>
                   </Link>
                        
                   <Link href='/#about'>
                       <li className='ml-10 text-sm  hover:text-[#62b6cb] uppercase py-6'>About </li>
                             
                   </Link>
    
                   <Link href='/#skills'>
                       <li className='ml-10 text-sm  hover:text-[#62b6cb] uppercase py-6'>Skills </li>
                             
                   </Link>
    
                   <Link href='/#projects'>
                       <li className='ml-10 text-sm  hover:text-[#62b6cb] uppercase py-6 '>Projects </li>
                   </Link>
    
                   <Link href='/#contact'>
                       <li className='ml-10 text-sm  hover:text-[#62b6cb] uppercase py-6 pr-8 '>Contact Me </li>
                             
                   </Link>
    
               </ul>
                   <div onClick={handleNav} className='md:hidden p-5 cursor-pointer hover:scale-110 ease-in duration-300 '>
                       <AiOutlineMenu size={25}/>
                   </div>
           </div>
       </div>
            
    
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/' className='smooth=(true) duration-500'>
               
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Website using next.js
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/Biii-08'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='https://www.instagram.com/bibisha.guragain/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineInstagram/>
                        </div>
                </Link>

                
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
