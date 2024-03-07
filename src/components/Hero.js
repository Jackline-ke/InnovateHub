import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id='home' className='w-full h-full relative font-serif'>
        <video src='https://res.cloudinary.com/dmpr1moai/video/upload/v1708062611/innovateHub/WhatsApp_Video_2024-02-16_at_08.45.30_i7iytp.mp4' autoPlay loop muted className='w-full h-screen object-cover'/>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/50'></div>
        <motion.div 
          initial={{y:-100, opacity:0 }}
          whileInView={{y:0, opacity:1}}
          transition={{delay:0.2, y: { type: "spring", stiffness: 60}, opacity:{ duration: 1}, ease: 'easeIn', duration: 1}}
          className='px-16 absolute w-full h-full top-0 flex flex-col justify-center text-center lg:text-left text-white'
        >
            <div className='w-full lg:w-2/3'>
                <h1 className='text-3xl lg:text-4xl font-bold'>Modern IT and Tech <br/> Service Solution</h1>
                <p className='mt-4 text-[12px] lg:text-[16px] font-light'>Our commitment is to deliver state-of-the-art solutions 
                specifically crafted to address the dynamic requirements of businesses in today's digital landscape. Prioritizing 
                innovation and operational excellence, our cohesive team of professionals works collaboratively to provide 
                exceptional IT and technology services, empowering our clients to achieve unparalleled success.</p>
                <Link to='contact' smooth={true} duration={2000}>
                  <button className='px-8 py-2 rounded-md mt-4 bg-[#3678fc] font-semibold text-sm'>CONTACT US </button>
                </Link>
            </div>
        </motion.div>
    </div>
  )
}

export default Hero