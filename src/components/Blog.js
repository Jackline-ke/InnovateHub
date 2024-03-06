import React from 'react'
import { BiSupport} from 'react-icons/bi';
import { FaAngleRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Blog = () => {
  return (
    <div id='blog' className='w-full h-full flex flex-col justify-center items-center font-serif py-8 lg:py-16  text-[#020e26] px-8 lg:px-32'>
       <motion.div
            initial={{y:-100, opacity:0 }}
            whileInView={{y:0, opacity:1}}
            transition={{delay:0.2, y: { type: "spring", stiffness: 60}, opacity:{ duration: 0.6}, ease: 'easeIn', duration: 1}}
            className='w-full lg:w-2/3 flex flex-col justify-center items-center'
        >
            <h3 className='text-sm text-[#41cffc] '>OUR BLOGS</h3>
            <p className='text-2xl font-semibold'>Latest News & Articles</p>
            <p className='text-center text-[#020e26]/70 text-[12px] lg:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore 
                magna aliqua.</p>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {/* item */}
            <div className='border border-[#41cffc]/20'>
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062444/innovateHub/christina-wocintechchat-com-UcZcsHSp8o4-unsplash_ollu1o.jpg'
                    alt='caseStudy'
                    className='w-full'
                />
                <div className='bg-[#41cffc] text-white px-2 py-1 flex items-center justify-center'>
                    <BiSupport className='text-xl'/>
                    <div className='ml-4'>
                        <p className='font-semibold'>Workflow Management</p>
                        <p className='text-sm'>IT Management</p>
                    </div>
                </div>
                <div className='flex flex-col py-2 px-4'>
                    <p className='text-sm text-gray-300'>July 31, 2023</p>
                    <h3 className='text-[#020e26] font-semibold text-lg'>10 Efficient And Measurable Benefits Of Software</h3>
                    <p className='text-sm text-[#020e26]/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua.</p>
                    <div className='text-[#41cffc] flex items-center cursor-pointer'>
                        <h3>Read more</h3>
                        <FaAngleRight className='ml-1'/>
                    </div>
                </div>
            </div>
            <div className='border border-[#41cffc]/20'>
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062444/innovateHub/christina-wocintechchat-com-UcZcsHSp8o4-unsplash_ollu1o.jpg'
                    alt='caseStudy'
                    className='w-full'
                />
                <div className='bg-[#41cffc] text-white px-2 py-1 flex items-center justify-center'>
                    <BiSupport className='text-xl'/>
                    <div className='ml-4'>
                        <p className='font-semibold'>Workflow Management</p>
                        <p className='text-sm'>IT Management</p>
                    </div>
                </div>
                <div className='flex flex-col py-2 px-4'>
                    <p className='text-sm text-gray-300'>July 31, 2023</p>
                    <h3 className='text-[#020e26] font-semibold text-lg'>10 Efficient And Measurable Benefits Of Software</h3>
                    <p className='text-sm text-[#020e26]/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua.</p>
                    <div className='text-[#41cffc] flex items-center cursor-pointer'>
                        <h3>Read more</h3>
                        <FaAngleRight className='ml-1'/>
                    </div>
                </div>
            </div>
            <div className='border border-[#41cffc]/20'>
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062444/innovateHub/christina-wocintechchat-com-UcZcsHSp8o4-unsplash_ollu1o.jpg'
                    alt='caseStudy'
                    className='w-full'
                />
                <div className='bg-[#41cffc] text-white px-2 py-1 flex items-center justify-center'>
                    <BiSupport className='text-xl'/>
                    <div className='ml-4'>
                        <p className='font-semibold'>Workflow Management</p>
                        <p className='text-sm'>IT Management</p>
                    </div>
                </div>
                <div className='flex flex-col py-2 px-4'>
                    <p className='text-sm text-gray-300'>July 31, 2023</p>
                    <h3 className='text-[#020e26] font-semibold text-lg'>10 Efficient And Measurable Benefits Of Software</h3>
                    <p className='text-sm text-[#020e26]/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua.</p>
                    <div className='text-[#41cffc] flex items-center cursor-pointer'>
                        <h3>Read more</h3>
                        <FaAngleRight className='ml-1'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog