import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-full relative font-serif'>
        <video src='https://res.cloudinary.com/dmpr1moai/video/upload/v1708062611/innovateHub/WhatsApp_Video_2024-02-16_at_08.45.30_i7iytp.mp4' autoPlay loop muted className='w-full h-screen object-cover'/>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/50'></div>
        <div className='px-16 absolute w-full h-full top-0 flex flex-col justify-center text-center lg:text-left text-white'>
            <div className='w-full lg:w-2/3'>
                <h1 className='text-3xl lg:text-4xl font-bold'>Modern IT and Tech <br/> Service Solution</h1>
                <p className='mt-4 text-sm lg:text-[16px]'>At Modern IT and Tech, we are dedicated to providing cutting-edge solutions
                 tailored to meet the ever-evolving needs of businesses in the digital age. With a focus on innovation and efficiency, 
                 our team of experts collaborates seamlessly to deliver top-notch IT and tech services that drive success for our clients.</p>
                <button className='px-3 py-1 rounded-md mt-4 bg-[#41cffc] font-semibold text-sm'>CONTACT US</button>
            </div>
        </div>
    </div>
  )
}

export default Hero