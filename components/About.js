import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen flex items-center py:16S'>
    <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 flex flex-col items-center justify-center'>
      <div className='col-span-2'>
      <p className='text-gray-500 m-auto flex justify-center items-center font-bold tracking-widest'> Details </p>
        <h1 className='py-2 uppercase text-3xl font-bold flex tracking-widest text-[#2f6690] justify-center items-center'> 
            About Me
        </h1>
        </div>
        <div className='col-span-2'>
        
        <p className='mb-4'> Hi, I am bibisha guragain. I am an aspiring front-end developer based in kathmandu, Nepal. I am currently working at Veda Studios, Bhaktapur. This is my portfolio. This website brielfy includes my introduction, skills, projects and a way to contact me.  I did my bachelors in Bsc Hons. Computing from Islington College, Kamalpokhari.</p>
        <p className='mb-4'> Established in 1996, Islington College has evolved as leading brand in the field of IT and Business Education. The exceptional degree programmes are offered in direct partnership with London Metropolitan University, UK. Islington College offers Bachelors and Masters programme in Information Technology and Business Administration. They have been providing all the necessary skills that an individual requires to achieve success through an updated course that students will benefit on developing those ideas and implement in real life. Islington College endeavours their journey focusing on maximizing their potential and meeting their ambition with an assurance to enhance technical competencies among students. Thank you. bye bye.</p>
        </div>
        <div className='w-auto h-auto m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
            <img src='/about.png' alt='person working' ></img>
        </div>
        
    </div>
  </div>


  



  
  )
}

export default About