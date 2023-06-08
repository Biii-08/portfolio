import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Projectitem from './Projectitem'
import todo from '../public/todo.png'
import hospital from '../public/hospital.png'
import portfolio from '../public/portfolio.png'

const Projects = () => {
  return (
    <div id='projects' className='w-ful p-20'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-sm tracking-widest text-gray-600 justify-center items-center flex font-bold' > What I've built</p>
            <h1 className='py-4 pb-[10%] uppercase text-3xl font-bold flex tracking-wide text-[#2f6690] justify-center items-center'>
                My Projects 
                </h1>

            <div className='grid md:grid-cols-3 gap-[8%]  w-auto h-auto justify-center items-center'>
           
            <Projectitem 
                title='To-do list' 
                backgroundImg={todo} 
                info='Javascript'
                projecturl='https://github.com/Biii-08/ToDo'
            />
            <Projectitem 
                title='Personal portfolio' 
                backgroundImg={portfolio} 
                info='Next.js, Tailwind CSS, Javascript'
                projecturl='https://github.com/Biii-08/line1/tree/master'
            /> 
            <Projectitem 
                title='Hospital website' 
                backgroundImg={hospital} 
                info='HTML, CSS, javascript'
                projecturl='https://github.com/Biii-08/portfolio'
            /> 

            </div>

        </div>
        

    </div>
  )
}

export default Projects