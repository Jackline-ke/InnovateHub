import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Blog = () => {
  return (
    <div id='blog' className='w-full h-full flex flex-col justify-center items-center font-serif py-4 lg:py-16  text-[#020e26] px-8 lg:px-32'>
       <motion.div
            initial={{y:-100, opacity:0 }}
            whileInView={{y:0, opacity:1}}
            transition={{delay:0.2, y: { type: "spring", stiffness: 60}, opacity:{ duration: 0.6}, ease: 'easeIn', duration: 1}}
            className='w-full lg:w-2/3 flex flex-col justify-center items-center'
        >
            <h3 className='text-sm text-[#3678fc] '>OUR BLOGS</h3>
            <p className='text-2xl font-semibold'>Latest News & Articles</p>
            <p className='text-center text-[#020e26]/70 text-[12px] lg:text-sm'>Stay informed with the latest insights and trends in technology and innovation. Dive into our expertly crafted articles and news updates, designed to keep you ahead in the fast-paced world of IT and tech services. </p>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {/* item */}
            <div className='border border-[#41cffc]/20'>
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062444/innovateHub/christina-wocintechchat-com-UcZcsHSp8o4-unsplash_ollu1o.jpg'
                    alt='caseStudy'
                    className='w-full'
                />
                <div className='flex flex-col py-2 px-4'>
                    <h3 className='text-[#020e26] font-semibold text-lg'>Embracing Artificial Intelligence: Transforming Business Operations</h3>
                    <p className='text-sm text-gray-300'>July 31, 2023</p>
                    <p className='text-sm text-[#020e26]/70'>Artificial Intelligence (AI) is no longer a futuristic concept but a present-day reality transforming business operations across various industries. From automating routine tasks to providing advanced data analytics, AI is driving efficiency and innovation.</p>
                    <div className='text-[#3678fc] flex items-center cursor-pointer'>
                        <h3 lassName='text-sm'>Read more</h3>
                        <FaAngleRight className='ml-1'/>
                    </div>
                </div>
            </div>
            <div className='border border-[#41cffc]/20'>
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062444/innovateHub/christina-wocintechchat-com-UcZcsHSp8o4-unsplash_ollu1o.jpg'
                    alt='caseStudy'
                    className='w-full'
                />
                <div className='flex flex-col py-2 px-4'>
                    <h3 className='text-[#020e26] font-semibold text-lg'>The Rise of Remote Work: How Technology is Shaping the Future of Work</h3>
                    <p className='text-sm text-gray-300'>July 31, 2023</p>
                    <p className='text-sm text-[#020e26]/70'>The shift to remote work has been accelerated by recent global events, and technology has played a crucial role in making this transition smooth and effective. </p>
                    <div className='text-[#3678fc] flex items-center cursor-pointer'>
                        <h3 lassName='text-sm'>Read more</h3>
                        <FaAngleRight className='ml-1'/>
                    </div>
                </div>
            </div>
            <div className='border border-[#41cffc]/20'>
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062444/innovateHub/christina-wocintechchat-com-UcZcsHSp8o4-unsplash_ollu1o.jpg'
                    alt='caseStudy'
                    className='w-full'
                />
                <div className='flex flex-col py-2 px-4'>
                    <h3 className='text-[#020e26] font-semibold text-lg'> Cloud Computing: The Backbone of Modern IT Solutions</h3>
                    <p className='text-sm text-gray-300'>July 31, 2023</p>
                    <p className='text-sm text-[#020e26]/70'>Cloud computing has revolutionized the IT landscape, offering scalable, cost-effective, and flexible solutions for businesses of all sizes. It has become the backbone of modern IT infrastructure, enabling innovation and growth.</p>
                    <div className='text-[#3678fc] flex items-center cursor-pointer'>
                        <h3 lassName='text-sm'>Read more</h3>
                        <FaAngleRight className='ml-1'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog