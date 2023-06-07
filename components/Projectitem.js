import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projectitem = ({title, backgroundImg, projecturl, info}) => {
  return (
   
    <div id='projectitem' className='relative flex items-centered justify-center cursor-pointer h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-3 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} />
    
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
       <h2 className='text-2xl text-white tracking-wide text-center'> {title}</h2> 
       <p className='pb-4 pt-2 text-white text-center'>{info}</p>
       <Link href={projecturl}>
        <p className='text-center py-2  font-bold text-md  rounded-lg cursor-pointer bg-white text-gray-500'> More Info </p>
       </Link>
    </div>

</div>
  )
}

export default Projectitem