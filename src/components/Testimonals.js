import React from 'react'
//import { motion } from 'framer-motion'

const Testimonals = () => {
  return (
    <div className='w-full h-full font-serif text-white py-8 lg:py-0'>
        <div 
            // initial={{y:-100, opacity:0 }}
            // whileInView={{y:0, opacity:1}}
            // transition={{delay:0.2, y: { type: "spring", stiffness: 60}, opacity:{ duration: 1}, ease: 'easeIn', duration: 1}} 
            className='flex flex-col md:flex-row'
        >
            <div className='md:flex-1'>
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062442/innovateHub/desola-lanre-ologun-IgUR1iX0mqM-unsplash_m3g4av.jpg'
                    className='w-full h-full object-cover'
                    alt='testiomals'
                /> 
            </div>
            <div className='w-full bg-[#3678fc] md:flex-1 flex items-center'>
                <div 
                    // initial={{x:100, opacity:0 }}
                    // whileInView={{x:0, opacity:1}}
                    // transition={{delay:0.2, x: { type: "spring", stiffness: 60}, opacity:{ duration: 0.4}, ease: 'easeOut', duration: 1}} 
                    className='flex flex-col gap-2 justify-center items-center px-8 lg:px-32 py-8'
                >
                    <h2 className='font-semibold text-xl'>What Client Say About Us</h2>
                    <div className='rounded-full p-2 w-12 h-12 bg-white flex justify-center items-center'>
                        <p className='text-[#020e26]'>"</p>
                    </div>
                    <p className='text-center text-sm'>"We have been partnering with InnovateHub for several years, and their 
                        commitment to excellence is truly commendable.The level of expertise their team brings to the table has been 
                        instrumental in the success of our projects."</p>
                    <div className='flex flex-col justify-center items-center'>
                        <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww'
                            className='rounded-full w-12 h-12 object-cover'
                            alt='testimonals'
                        />
                        <div className='flex flex-col text-center'>
                            <p className='font-semibold'>Jane Doe</p>
                            <p className='text-sm font-extralight'>Co-Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonals