import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
         
        
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-sm tracking-widest text-gray-600 justify-center items-center flex font-bold' > What I can do</p>
           <h1 className='py-4 pb-10 uppercase text-3xl font-bold flex tracking-widest text-[#2f6690] justify-center items-center'>
                My Skills
            </h1> 

            <div className='flex flex-wrap py-6 pb-10 justify-center items-center gap-2'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-110  ease-in duration-300'>HTML</div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-110  ease-in duration-300'>Tailwind CSS</div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-110  ease-in duration-300'>Bootstrap</div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-110  ease-in duration-300'>Javascript</div>
                <div className='w-full'></div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-110  ease-in duration-300'>Typescript</div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-110  ease-in duration-300'>Git and Github </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-110  ease-in duration-300'>React.js</div>     
                <div className='w-full'></div>
                <div className='w-full'></div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-110  ease-in duration-300'>Python</div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-110  ease-in duration-300'>MySQL</div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-110  ease-in duration-300'>Next.js</div>
                <div className='w-full'></div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-110  ease-in duration-300'>Sass</div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-110  ease-in duration-300'>CSS</div>

            </div>



                



        </div>
    </div>

    
  )
}

export default Skills