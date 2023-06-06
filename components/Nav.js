'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineclose,AiOutlineMenu} from 'react-icons/ai';

const Nav = () => {
  return (
    <div className='fixed-w-full h-20 shadow-xl x-[100]'>
       <div className='flex justify-between items-center w-full px-2 2xl:px-16'>
           <image src="/images.png" alt="/" width='125' height='50'/>
            
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home </li>
                    </Link>
                    
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About </li>
                         
                    </Link>

                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact </li>
                         
                    </Link>

                </ul>
                <div className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            </div>


            <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
                <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-{45%] h-screen bg-white p-10 ease-in duration-500'>
                 <div>
                 <div className='rounded-full shadow-large shadow-gray-400 p-3 cursor-pointer'>
                    <AiOutlineclose/>
                    
                 </div> 
                 </div> 
                </div>
            </div>
           </div>
    

  )
}

export default Nav