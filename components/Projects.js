import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Projectitem from './Projectitem'
import todo from '../public/todo.png'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-sm tracking-widest text-gray-600 justify-center items-center flex font-bold' > What I've built</p>
            <h1 className='py-4 pb-[10%] uppercase text-3xl font-bold flex tracking-wide text-[#2f6690] justify-center items-center'>
                My Projects 
                </h1>

            <div className='grid md:grid-cols-2 gap-8 '>
           
            <Projectitem 
                title='To-do list' 
                backgroundImg={todo} 
                projecturl='https://github.com/Biii-08/ToDo'
            />
            {/* <Projectitem 
                title='Hospital Booking' 
                backgroundImg={hospitalbooking}  
                projecturl='/hospitalbooking'
            />
            <Projectitem 
                title='hospital2' 
                backgroundImg={hospital2} 
                projecturl='/hospital2'
            /> */}

            </div>

        </div>
        

    </div>
  )
}

export default Projects