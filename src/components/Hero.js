import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-full relative font-serif'>
        <video src='https://res.cloudinary.com/dmpr1moai/video/upload/v1708062611/innovateHub/WhatsApp_Video_2024-02-16_at_08.45.30_i7iytp.mp4' autoPlay loop muted className='w-full h-screen object-cover'/>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/50'></div>
        <div className='px-16 absolute w-full h-full top-0 flex flex-col justify-center text-white'>
            <div className='w-2/3'>
                <h1 className='text-4xl font-bold'>Modern IT and Tech <br/> Service Solution</h1>
                <p className='mt-4 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className='px-3 py-1 rounded-md mt-4 bg-[#41cffc] font-semibold'>CONTACT US</button>
            </div>
        </div>
    </div>
  )
}

export default Hero