import React from 'react'
import { BiSupport } from 'react-icons/bi';
import { FaAngleRight } from 'react-icons/fa'
import { motion } from 'framer-motion'


const Case = () => {
  return (
    <div id='case' className='w-full h-full flex flex-col justify-center items-center font-serif py-4 lg:py-24 text-[#020e26] px-8 lg:px-32'>
        <motion.div
            initial={{y:-100, opacity:0 }}
            whileInView={{y:0, opacity:1}}
            transition={{delay:0.2, y: { type: "spring", stiffness: 60}, opacity:{ duration: 0.6}, ease: 'easeIn', duration: 1}}
            className='w-full lg:w-[500px] flex flex-col justify-center items-center'
        >
            <h3 className='text-sm text-[#3678fc] '>CASE STUDY</h3>
            <p className='text-2xl font-semibold'>IT Solutions & Projects</p>
            <p className='text-center text-[#020e26]/70 text-[12px] lg:text-sm'>Embark on a journey of technological innovation 
            and efficiency with our comprehensive IT solutions and projects.</p>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {/* item */}
            <div className='border border-[#41cffc]/20'>
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062444/innovateHub/christina-wocintechchat-com-UcZcsHSp8o4-unsplash_ollu1o.jpg'
                    alt='caseStudy'
                    className='w-full'
                />
                <div className='bg-[#3678fc] text-white px-2 py-1 flex items-center justify-center'>
                    <BiSupport className='text-xl'/>
                    <div className='ml-4'>
                        <p className='font-semibold'>Cloud Migration</p>
                        <p className='text-sm'>Global Retail Corporation</p>
                    </div>
                </div>
                <div className='flex flex-col py-2 px-4'>
                    <p className='text-sm text-[#020e26]/70'>We implemented a comprehensive cloud migration strategy, moving their critical applications and databases to Amazon Web Services (AWS). This included a detailed assessment, planning, and execution phase, ensuring minimal disruption to their operations.</p>
                    <div className='text-[#3678fc] flex items-center'>
                        <h3 className='text-sm cursor-pointer'>Read more</h3>
                         <FaAngleRight className='ml-1'/>
                    </div>
                </div>
            </div>
            <div className='border border-[#41cffc]/20'>
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062444/innovateHub/christina-wocintechchat-com-UcZcsHSp8o4-unsplash_ollu1o.jpg'
                    alt='caseStudy'
                    className='w-full'
                />
                <div className='bg-[#3678fc] text-white px-2 py-1 flex items-center justify-center'>
                    <BiSupport className='text-xl'/>
                    <div className='ml-4'>
                        <p className='font-semibold'> Cybersecurity Enhancement</p>
                        <p className='text-sm'>Financial Institution</p>
                    </div>
                </div>
                <div className='flex flex-col py-2 px-4'>
                    <p className='text-sm text-[#020e26]/70'>Our team conducted a thorough security audit and implemented advanced cybersecurity measures, including multi-factor authentication, encryption, and continuous monitoring solutions.</p>
                    <div className='text-[#3678fc] flex items-center'>
                        <h3 className='text-sm cursor-pointer'>Read more</h3>
                         <FaAngleRight className='ml-1'/>
                    </div>
                </div>
            </div>
            <div className='border border-[#41cffc]/20'>
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062444/innovateHub/christina-wocintechchat-com-UcZcsHSp8o4-unsplash_ollu1o.jpg'
                    alt='caseStudy'
                    className='w-full'
                />
                <div className='bg-[#3678fc] text-white px-2 py-1 flex items-center justify-center'>
                    <BiSupport className='text-xl'/>
                    <div className='ml-4'>
                        <p className='font-semibold'>Digital Transformation</p>
                        <p className='text-sm'>Manufacturing Company</p>
                    </div>
                </div>
                <div className='flex flex-col py-2 px-4'>
                    <p className='text-sm text-[#020e26]/70'>We developed a digital transformation roadmap that included the implementation of IoT devices, automation of key processes, and integration of ERP systems. Our team provided end-to-end support from planning to execution and ongoing maintenance.</p>
                    <div className='text-[#3678fc] flex items-center'>
                        <h3 className='text-sm cursor-pointer'>Read more</h3>
                         <FaAngleRight className='ml-1'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-sm mt-4 flex'>
            <p>Get more information</p>
            <div className='text-[#3678fc] flex items-center ml-2'>
                <h3 className='cursor-pointer'>Get Started</h3>
                 <FaAngleRight className='ml-1'/>
            </div>
        </div>
    </div>
  )
}

export default Case