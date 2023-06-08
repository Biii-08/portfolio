import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
         
        
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-sm tracking-widest text-gray-600 justify-center items-center flex font-bold' > What I can do</p>
           <h1 className='py-4 pb-10 uppercase text-3xl font-bold flex tracking-widest text-[#2f6690] justify-center items-center'>
                My Skills
            </h1> 

            <div className='flex gap-6 flex-wrap py-6 pb-10 justify-center items-center md:justify-center lg:grid-cols-3 md:grid-cols-2 '>
                       
                       <div className='p-6 shadow-xl rounded-xlk '> HTML</div>
                       <div className='p-6 shadow-xl rounded-xlk'> CSS</div>
                       <div className='p-6 shadow-xl rounded-xlk'> Sass</div>
                        <div className='p-6 shadow-xl rounded-xlk'> Javascript</div>
                        <div className='p-6 shadow-xl rounded-xlk'> React.js</div>
                       <div className='p-6 shadow-xl rounded-xlk'> Next.js </div>
                        <div className='p-6 shadow-xl rounded-xlk'> Bootstrap</div>
                        <div className='p-6 shadow-xl rounded-xlk'> Tailwind CSS</div>
                       <div className='p-6 shadow-xl rounded-xlk'> Typescript </div>
                        <div className='p-6 shadow-xl rounded-xlk'> Python</div>
                        <div className='p-6 shadow-xl rounded-xlk'> MySQl</div>



            </div>
                



        </div>
    </div>

    
  )
}

export default Skills