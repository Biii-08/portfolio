'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineClose,AiOutlineMail,AiOutlineMenu,AiOutlineInstagram} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';



const Nav = () => {
    const[nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-20 shadow-xl x--300 '>
       <div className='flex justify-between items-center w-full px-2 2xl:px-16 font-bold'>
           <p className='uppercase tracking-widest'> Bibisha Guragain</p>
            
            <div>
                <ul className='hidden md:flex '>
                    <Link href='/'>
                        <li className='ml-10 text-sm  text-black hover:text-[#62b6cb] uppercase py-5 '>Home </li>
                    </Link>
                    
                    <Link href='/About'>
                        <li className='ml-10 text-sm text-black hover:text-[#62b6cb] uppercase py-5'>About </li>
                         
                    </Link>

                    <Link href='/'>
                        <li className='ml-10 text-sm  text-black hover:text-[#62b6cb] uppercase py-5'>Contact </li>
                         
                    </Link>

                    <Link href='/'>
                        <li className='ml-10 text-sm  text-black hover:text-[#62b6cb] uppercase py-5'>Skills </li>
                         
                    </Link>

                    <Link href='/'>
                        <li className='ml-10 text-sm  text-black hover:text-[#62b6cb] uppercase py-5 '>Projects </li>
                    </Link>

                </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={20}/>
                    </div>
            </div>
        </div>
        

        {/* if nav is true(?) then.. else(:).. */}
        <div className={nav? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}> 

            <div className={nav
                                ?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-{45%] h-screen bg-white p-10 ease-in duration-500'
                                :'fixed left-[-300%] top-0 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110'>
                            <AiOutlineClose/>
                        </div> 
                    </div>
                </div>

                <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'> Building a website using next  </p>
                     
                </div>

                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                            <li className='py-4 text-sm  text-black hover:text-[#62b6cb]' > Home </li>
                        </Link>

                        <Link href='/'>
                            <li className='py-4 text-sm  text-black hover:text-[#62b6cb]'  > About </li>
                        </Link> 

                        <Link href='/'>
                            <li className='py-4 text-sm  text-black hover:text-[#62b6cb]' > Contact </li>
                        </Link>

                        <Link href='/'>
                            <li className='py-4 text-sm  text-black hover:text-[#62b6cb]' > Skills </li>
                        </Link>

                        <Link href='/'>
                            <li className='py-4 text-sm  text-black hover:text-[#62b6cb]' > Projects </li>
                        </Link>
                    </ul>

                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5]'> Lets connect</p>

                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn/>
                            </div>

                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub/>
                            </div>
                            
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail/>
                            </div>

                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineInstagram/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    

  )
}

export default Nav