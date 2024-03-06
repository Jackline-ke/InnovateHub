import React from 'react'
import { BiSupport } from 'react-icons/bi';
import { FaAngleRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const gridContainerVariants= {
    hidden:{ opacity: 0 },
    show: { 
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
}

const gridSquareVariants={
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}



const Services = () => {
  return (
    <div className='w-full h-full flex justify-center items-center px-8 lg:px-32 pb-16 font-serif text-[#020e26]'>
        <motion.div 
            variants={gridContainerVariants}
            initial= 'hidden'
            animate ='show'
            className='grid grid-cols-2 lg:grid-cols-3 gap-4'
        >
            <motion.div 
                variants={gridSquareVariants} 
                className='flex flex-col py-2 lg:py-4 '
            >
                <h3 className='text-[#41cffc]'>Our Services</h3>
                <h2 className='font-semibold text-lg lg:text-xl'>Solutions & Focus <br/>Area</h2>
                <p className='text-[12px] lg:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua.</p>
                <div>
                    <button className='px-3 py-1 bg-[#41cffc] text-white text-sm mt-2'>GET STARTED</button>
                </div>
            </motion.div>
            <motion.div 
                variants={gridSquareVariants} 
                className='flex flex-col justify-center items-center bg-white border border-[#41cffc]/5 shadow-md py-2 lg:py-4 px-2 lg:px-4 rounded-sm'
            >
                <BiSupport className='text-2xl mb-1 text-[#41cffc]' />
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h1 className='font-semibold text-[#020e26]'>IT Expert</h1>
                    <p className='text-[12px] lg:text-sm text-center text-[#020e26]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='text-[#41cffc] flex items-center'>
                        <h3 className='text-sm lg:text-lg'>Read more</h3>
                        <FaAngleRight className='ml-1'/>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                variants={gridSquareVariants} 
                className='flex flex-col justify-center items-center bg-white border border-[#41cffc]/5 shadow-md py-2 lg:py-4 px-2 lg:px-4 rounded-sm'
            >
                <BiSupport className='text-2xl mb-1 text-[#41cffc]' />
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h1 className='font-semibold text-[#020e26]'>IT Expert</h1>
                    <p className='text-[12px] lg:text-sm text-center text-[#020e26]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='text-[#41cffc] flex items-center'>
                        <h3 className='text-sm lg:text-lg'>Read more</h3>
                        <FaAngleRight className='ml-1'/>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                variants={gridSquareVariants} 
                className='flex flex-col justify-center items-center bg-white border border-[#41cffc]/5 shadow-md py-2 lg:py-4 px-2 lg:px-4 rounded-sm'
            >
                <BiSupport className='text-2xl mb-1 text-[#41cffc]' />
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h1 className='font-semibold text-[#020e26]'>IT Expert</h1>
                    <p className='text-[12px] lg:text-sm text-center text-[#020e26]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='text-[#41cffc] flex items-center'>
                        <h3 className='text-sm lg:text-lg'>Read more</h3>
                        <FaAngleRight className='ml-1'/>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                variants={gridSquareVariants} 
                className='flex flex-col justify-center items-center bg-white border border-[#41cffc]/5 shadow-md py-2 lg:py-4 px-2 lg:px-4 rounded-sm'
            >
                <BiSupport className='text-2xl mb-1 text-[#41cffc]' />
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h1 className='font-semibold text-[#020e26]'>IT Expert</h1>
                    <p className='text-[12px] lg:text-sm text-center text-[#020e26]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='text-[#41cffc] flex items-center'>
                        <h3 className='text-sm lg:text-lg'>Read more</h3>
                        <FaAngleRight className='ml-1'/>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                variants={gridSquareVariants} 
                className='flex flex-col justify-center items-center bg-white border border-[#41cffc]/5 shadow-md py-2 lg:py-4 px-2 lg:px-4 rounded-sm'
            >
                <BiSupport className='text-2xl mb-1 text-[#41cffc]' />
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h1 className='font-semibold text-[#020e26]'>IT Expert</h1>
                    <p className='text-[12px] lg:text-sm text-center text-[#020e26]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='text-[#41cffc] flex items-center'>
                        <h3 className='text-sm lg:text-lg'>Read more</h3>
                        <FaAngleRight className='ml-1'/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Services