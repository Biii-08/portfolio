// 'use client'
// import React,{useState, useEffect} from 'react'
// import Image from 'next/image'
// import {AiOutlineClose,AiOutlineMail,AiOutlineMenu,AiOutlineInstagram} from 'react-icons/ai';
// import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
// import Link from 'next/link';




// const Nav = () => {
//     const[nav,setNav] = useState(false)
//         const [shadow, setShadow] = useState(false)

//     const handleNav = () => {
//         setNav(!nav)
//     }
//     useEffect( () => {
//             const handleShadow = () => {
//                 if (window.scrollY >= 90){
//                     setShadow(true)
//                 } else {
//                     setShadow(false)
//                 }

//             }
//             window.addEventListener('scroll', handleShadow);

//         }), []

//   return (
//     <div className= {shadow? ' fixed w-full h-20 shadow-xl z-[100]' : ' fixed w-full h-20 z-[100]'}>
//        <div className='flex justify-between items-center w-full px-2 2xl:px-16 font-bold pl-9'>
//            <p className='uppercase tracking-widest text-[#2f6690]'> Bibisha Guragain</p>
            
//             <div>
//                 <ul className='hidden md:flex '>
//                     <Link href='/'>
//                         <li className='ml-10 text-sm  text-black hover:text-[#62b6cb] uppercase py-6'>Home </li>
//                     </Link>
                    
//                     <Link href='/#about'>
//                         <li className='ml-10 text-sm text-black hover:text-[#62b6cb] uppercase py-6'>About </li>
                         
//                     </Link>

//                     <Link href='/#skills'>
//                         <li className='ml-10 text-sm  text-black hover:text-[#62b6cb] uppercase py-6'>Skills </li>
                         
//                     </Link>

//                     <Link href='/#projects'>
//                         <li className='ml-10 text-sm  text-black hover:text-[#62b6cb] uppercase py-6 '>Projects </li>
//                     </Link>

//                     <Link href='/#contact'>
//                         <li className='ml-10 text-sm  text-black hover:text-[#62b6cb] uppercase py-6 pr-8 '>Contact Me </li>
                         
//                     </Link>

//                 </ul>
//                     <div onClick={handleNav} className='md:hidden p-5 cursor-pointer hover:scale-110 ease-in duration-300 '>
//                         <AiOutlineMenu size={25}/>
//                     </div>
//             </div>
//         </div>
        

//         {/* if nav is true(?) then.. else(:).. */}
//         <div className={nav? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}> 

//             <div className={nav
//                                 ?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-{45%] h-screen bg-white p-10 ease-in duration-500'
//                                 :'fixed left-[-300%] top-0 ease-in duration-500'}>
//                 <div>
//                     <div className='flex w-full items-center justify-between'>
//                         <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ml-auto hover:scale-110'>
//                             <AiOutlineClose/>
//                         </div> 
//                     </div>
//                 </div>

//                 <div className='border-b border-gray-300 my-4'>
//                         <p className='w-[85%] md:w-[90%] py-4'> Building a website using next  </p>
                     
//                 </div>

//                 <div className='py-4 flex flex-col'>
//                     <ul className='uppercase'>
//                         <Link href='/'>
//                             <li onclick={()=> setNav(false)} className='py-4 text-sm  text-black hover:text-[#62b6cb]'> Home </li>
//                         </Link>

//                         <Link href='/#about'>
//                             <li onclick={()=> setNav(false)}  className='py-4 text-sm  text-black hover:text-[#62b6cb]'  > About </li>
//                         </Link> 

//                         <Link href='/#skills'>
//                             <li onclick={()=> setNav(false)}  className='py-4 text-sm  text-black hover:text-[#62b6cb]' > Skills </li>
//                         </Link>

//                         <Link href='/#projects'>
//                             <li onclick={()=> setNav(false)} className='py-4 text-sm  text-black hover:text-[#62b6cb]' > Projects </li>
//                         </Link>

//                         <Link href='#contact'>
//                             <li onclick={()=> setNav(false)} className='py-4 text-sm  text-black hover:text-[#62b6cb]' > Contact Me</li>
//                         </Link>
//                     </ul>

//                     <div className='pt-40'>
//                         <p className='uppercase tracking-widest text-[#5651e5]'> Lets connect</p>

//                         <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
//                             <Link href='https://www.linkedin.com'>
//                             <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
//                                 <FaLinkedinIn/>
//                             </div>
//                             </Link>

//                            <Link href= 'https://github.com/Biii-08'>
//                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
//                                 <FaGithub/>
//                             </div>
//                             </Link>
                            
//                             <Link href=''>
//                             <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
//                                 <AiOutlineMail/>
//                             </div>
//                             </Link>

//                             <Link href='https://www.instagram.com/bibisha.guragain/'>
//                             <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
//                                 <AiOutlineInstagram/>
//                             </div>
//                             </Link>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div> 
//     </div>
    

//   )
// }

// export default Nav


import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu, AiOutlineInstagram} from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

// import { useRouter } from 'next/router';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const handleNav = () => {
    setNav(!nav);
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
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        
      <p className='uppercase tracking-widest text-[#2f6690]'> Bibisha Guragain</p>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b pr-8'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
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
              <Link href='/'>
               
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
    </div>
  );
};

export default Navbar;