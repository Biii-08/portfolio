'use client'
import Image from 'next/image'
import styles from './globals.css'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import {AiOutlineMail,AiOutlineInstagram} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import Link from 'next/link'
import { motion } from 'framer-motion'

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export default function Home() {
  return (
  <div className='bg-white text-black'>
    <Nav/>

    <div id='home' className='w-full h-screen text-center '>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center  '>
            <div>
              <motion.div 
                variants={fadeIn('down', 'tween', 0.2,1)}
                initial='hidden'
                whileInView='show'
                className='w-[70%] h-auto m-auto flex items-center justify-center p-8  '>
                <img src='/woman.png' alt='person working' ></img>
              </motion.div>

              <motion.div
                  variants={fadeIn('up', 'tween', 0.2,1)}
                  initial='hidden'
                  whileInView='show'
                  >
                <p className='uppercase text-sm tracking-widest font-bold text-gray-600'> my portfolio</p>
                <h1 className='py-4 text-gray-700'>
                   Hi, I'm <span className='text-[#2f6690] '> Bibisha </span>
                </h1>
                <h1 className='py-4 text-gray-700 text-2xl'>
                  A Front-End Developer
                </h1>
                <p className='py6-4 text-gray-600 max-w[70%] m-auto'> 
                 Currently working at  <span className='text-[#2f6690] font-bold'>Veda Studios  </span>
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 '>
                  <Link href='https://www.linkedin.com'>
                  <div className='rounded-full shadow-lg shadow-gray-300 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn/>
                  </div>
                  </Link>

                  <Link href='/https://github.com/Biii-08'>
                  <div className='rounded-full shadow-lg shadow-gray-300 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub/>
                  </div>
                  </Link>

                  <Link href='mailto:bibishaguragai656@gamil.com' >    
                  <div className='rounded-full shadow-lg shadow-gray-300 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail/>
                  </div>
                  </Link>  

                  <Link href='https://www.instagram.com/bibisha.guragain/'>
                  <div className='rounded-full shadow-lg shadow-gray-300 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                   <AiOutlineInstagram/>
                  </div>
                  </Link>
                  
                </div>
              
          </motion.div>
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
