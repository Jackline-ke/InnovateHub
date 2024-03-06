import React from 'react'
import { BiSupport } from 'react-icons/bi';
import { FaAngleRight } from 'react-icons/fa'
import { motion } from 'framer-motion'


const Services = () => {
  return (
    <div id='services' className='w-full h-full flex justify-center items-center px-8 lg:px-32 font-serif lg:py-16 text-[#020e26]'>
        <motion.div 
        
            className='grid grid-cols-1 lg:grid-cols-3 gap-4'
        >
            <motion.div 
            
                className='flex flex-col py-2 lg:py-4 '
            >
                <h3 className='text-[#41cffc]'>Our Services</h3>
                <h2 className='font-semibold text-lg lg:text-xl text-[#020e26]'>Solutions & Focus <br/>Area</h2>
                <p className='text-[12px] lg:text-sm text-[#020e26]/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua.</p>
                <div>
                    <button className='px-3 py-1 bg-[#41cffc] text-white text-sm mt-2'>GET STARTED</button>
                </div>
            </motion.div>
            <motion.div 
                
                className='flex flex-col justify-center items-center bg-white border border-[#41cffc]/20 shadow-sm py-2 lg:py-4 px-2 lg:px-4 rounded-sm'
            >
                <BiSupport className='text-2xl mb-1 text-[#41cffc]' />
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h1 className='font-semibold text-[#020e26]'>IT Expert</h1>
                    <p className='text-[12px] lg:text-sm text-center text-[#020e26]/70'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='text-[#41cffc] flex px-2 justify-center items-center'>
                        <h3 className='text-sm lg:text-lg font-light'>Read more</h3>
                        <FaAngleRight className='ml-2 text-sm'/>
                    </div>
                </div>
            </motion.div>
            <motion.div 
               
                className='flex flex-col justify-center items-center bg-white border border-[#41cffc]/20 shadow-sm py-2 lg:py-4 px-2 lg:px-4 rounded-sm'
            >
                <BiSupport className='text-2xl mb-1 text-[#41cffc]' />
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h1 className='font-semibold text-[#020e26]'>IT Expert</h1>
                    <p className='text-[12px] lg:text-sm text-center text-[#020e26]/70'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='text-[#41cffc] flex px-2 justify-center items-center'>
                        <h3 className='text-sm lg:text-lg font-light'>Read more</h3>
                        <FaAngleRight className='ml-2 text-sm'/>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                
                className='flex flex-col justify-center items-center bg-white border border-[#41cffc]/20 shadow-sm py-2 lg:py-4 px-2 lg:px-4 rounded-sm'
            >
                <BiSupport className='text-2xl mb-1 text-[#41cffc]' />
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h1 className='font-semibold text-[#020e26]'>IT Expert</h1>
                    <p className='text-[12px] lg:text-sm text-center text-[#020e26]/70'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='text-[#41cffc] flex px-2 justify-center items-center'>
                        <h3 className='text-sm lg:text-lg font-light'>Read more</h3>
                        <FaAngleRight className='ml-2 text-sm'/>
                    </div>
                </div>
            </motion.div>
            <motion.div 
              
                className='flex flex-col justify-center items-center bg-white border border-[#41cffc]/20 shadow-sm py-2 lg:py-4 px-2 lg:px-4 rounded-sm'
            >
                <BiSupport className='text-2xl mb-1 text-[#41cffc]' />
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h1 className='font-semibold text-[#020e26]'>IT Expert</h1>
                    <p className='text-[12px] lg:text-sm text-center text-[#020e26]/70'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='text-[#41cffc] flex px-2 justify-center items-center'>
                        <h3 className='text-sm lg:text-lg font-light'>Read more</h3>
                        <FaAngleRight className='ml-2 text-sm'/>
                    </div>
                </div>
            </motion.div>
            <motion.div 
               
                className='flex flex-col justify-center items-center bg-white border border-[#41cffc]/20 shadow-sm py-2 lg:py-4 px-2 lg:px-4 rounded-sm'
            >
                <BiSupport className='text-2xl mb-1 text-[#41cffc]' />
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h1 className='font-semibold text-[#020e26]'>IT Expert</h1>
                    <p className='text-[12px] lg:text-sm text-center text-[#020e26]/70'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='text-[#41cffc] flex px-2 justify-center items-center'>
                        <h3 className='text-sm lg:text-lg font-light'>Read more</h3>
                        <FaAngleRight className='ml-2 text-sm'/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Services