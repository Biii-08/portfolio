'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import {AiOutlineClose,AiOutlineMail,AiOutlineMenu,AiOutlineInstagram} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';


export default function Home() {
  return (
  <div>
    <Nav/>

    <div className='w-full h-screen text-center '>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center  '>
            <div>
              <div className='w-[70%] h-auto m-auto flex items-center justify-center p-8 hover:scale-110  ease-in duration-300 '>
                <img src='/woman.png' alt='person working' ></img>
              </div>
                <p className='uppercase text-sm tracking-widest text-gray-600'> portfolio</p>
                <h1 className='py-4 text-gray-700'>
                   Hi, I'm <span className='text-[#2f6690] '> Bibisha </span>
                </h1>
                <h1 className='py-4 text-gray-700 text-2xl'>
                  A Front-End Developer
                </h1>
                <p className='py6-4 text-gray-600 max-w[70%] m-auto'> 
                 lorem301 is Lorem ipsum dolor sit amet, consectet      
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 '>
                  <div className='rounded-full shadow-lg shadow-gray-300 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn/>
                  </div>
            
                  <div className='rounded-full shadow-lg shadow-gray-300 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub/>
                  </div>
                            
                  <div className='rounded-full shadow-lg shadow-gray-300 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail/>
                  </div>

                  <div className='rounded-full shadow-lg shadow-gray-300 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                   <AiOutlineInstagram/>
                  </div>

                  
                </div>
              

            </div>

        </div>
    </div> 
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    

  </div>
 
  )
}
