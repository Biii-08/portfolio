import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full md:h-screen flex items-center py:16S'>
    <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 flex flex-col items-center justify-center'>
      <div className='col-span-2'>
      <p className='text-gray-500 m-auto flex justify-center items-center font-bold tracking-widest'> Details </p>
        <h1 className='py-2 uppercase text-3xl font-bold flex tracking-widest text-[#2f6690] justify-center items-center'> 
            About Me
        </h1>
        </div>
        <div className='col-span-2'>
        
        <p> i am bibisha guragain</p>
        <p> this is about paragraph-2</p>
        <p> this is about paragraph 3</p>
        </div>
        <div className='w-auto h-auto m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
            <img src='/about.png' alt='person working' ></img>
        </div>
        
    </div>
  </div>
  )
}

export default About