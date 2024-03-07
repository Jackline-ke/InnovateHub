import React from 'react'
import {BiCheckSquare} from 'react-icons/bi'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id='about' className='w-full h-full font-serif flex flex-col justify-center items-center px-8 lg:px-32 py-16'>
        <div className='flex flex-col md:flex-row items-center w-full'>
            <motion.div 
                initial={{x:-100, opacity:0 }}
                whileInView={{x:0, opacity:1}}
                transition={{delay:0.2, x: { type: "spring", stiffness: 60}, opacity:{ duration: 1}, ease: 'easeIn', duration: 1}} 
                className='w-full lg:w-1/3'
            >
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062443/innovateHub/christina-wocintechchat-com-FPQlXQtjkqU-unsplash_b9t1xw.jpg'
                    className='w-72 h-[350px] object-cover'
                    alt='about'
                />
                 <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062441/innovateHub/christina-wocintechchat-com-FBdmhGMdCso-unsplash_qvgykz.jpg'
                    className='w-52 h-[250px] mt-[-200px] object-cover ml-32'
                    alt='about'
                />
            </motion.div>
            <div className='w-full lg:w-2/3 lg:pl-12 mt-8 lg:mt-1'>
                <motion.h3 
                    initial={{x:100, opacity:0 }}
                    whileInView={{x:0, opacity:1}}
                    transition={{delay:0.2, x: { type: "spring", stiffness: 60}, opacity:{ duration: 1}, ease: 'easeIn', duration: 1}} 
                    className='text-[#3678fc] font-medium'
                >About Us</motion.h3>
                <motion.h2 
                    initial={{x:100, opacity:0 }}
                    whileInView={{x:0, opacity:1}}
                    transition={{delay:0.2, x: { type: "spring", stiffness: 60}, opacity:{ duration: 1}, ease: 'easeIn', duration: 1}} 
                    className='text-[#020e26] font-semibold text-2xl'
                 > Let Us Be Your Partners <br/> Preferred IT Partner</motion.h2>
                <motion.p  
                    initial={{x:100, opacity:0 }}
                    whileInView={{x:0, opacity:1}}
                    transition={{delay:0.2, x: { type: "spring", stiffness: 60}, opacity:{ duration: 0.6}, ease: 'easeIn', duration: 1}} 
                    className='text-[#020e26]/70'
                >
                    At InnovateHub, we understand the significance of reliable partnerships in the realm of Information Technology. 
                    Serving as your preferred IT partner, we are dedicated to providing tailored solutions that align seamlessly 
                    with your business needs. Our commitment is to foster a collaborative and supportive relationship, ensuring 
                    your technological endeavors are not only efficient but also geared towards achieving optimal outcomes.
                </motion.p>
                <motion.div 
                    initial={{x:100, opacity:0 }}
                    whileInView={{x:0, opacity:1}}
                    transition={{delay:0.2, x: { type: "spring", stiffness: 60}, opacity:{ duration: 0.4}, ease: 'easeIn', duration: 1}} 
                    className='bg-[#3678fc]/5 py-4 px-2 mt-4 flex items-center justify-center'
                >
                    <div className='w-1 h-24 bg-[#41cffc]'></div>
                    <div className='ml-4'>
                        <p className='font-semibold text-[#020e26]'>As one of the world's largest IT service Providers, our deep goal of over 130 certified engineers and IT support staff</p>
                        <p className='text-[#020e26] font-extralight text-sm mt-2'>We prioritize excellence in every facet of our
                            services, ensuring that our clients benefit from the extensive expertise and collaborative efforts of our 
                            skilled professionals. Our mission is to deliver unparalleled solutions that transcend the ordinary, 
                            leveraging the collective knowledge and experience of our certified engineers. </p>
                    </div>
                </motion.div>
                <motion.button 
                    initial={{x:100, opacity:0 }}
                    whileInView={{x:0, opacity:1}}
                    transition={{delay:0.2, x: { type: "spring", stiffness: 60}, opacity:{ duration: 0.4}, ease: 'easeIn', duration: 1}} 
                    className='px-8 py-2 bg-[#3678fc] rounded-md text-sm text-white text-md mt-4 mb-2'
                >GET STARTED</motion.button>
                <div>
                    <motion.div 
                        initial={{x:100, opacity:0 }}
                        whileInView={{x:0, opacity:1}}
                        transition={{delay:0.2, x: { type: "spring", stiffness: 60}, opacity:{ duration: 0.4}, ease: 'easeIn', duration: 1}} 
                        className='flex items-center'
                    >
                        <BiCheckSquare className='text-[#3678fc] mr-2'/>
                        <p className='text-[#020e26]/70'>We are committed to providing quality IT Services.</p>
                    </motion.div>
                    <motion.div 
                        initial={{x:100, opacity:0 }}
                        whileInView={{x:0, opacity:1}}
                        transition={{delay:0.2, x: { type: "spring", stiffness: 60}, opacity:{ duration: 0.2}, ease: 'easeIn', duration: 1}} 
                        className='flex items-center'
                    >
                        <BiCheckSquare className='text-[#3678fc] mr-2'/>
                        <p className='text-[#020e26]/70'>Provided by experts to hel challenge critical activities.</p>
                    </motion.div>
                    <motion.div 
                        initial={{x:100, opacity:0 }}
                        whileInView={{x:0, opacity:1}}
                        transition={{delay:0.2, x: { type: "spring", stiffness: 60}, opacity:{ duration: 0.1}, ease: 'easeIn', duration: 1}} 
                        className='flex items-center'
                    >
                        <BiCheckSquare className='text-[#3678fc] mr-2'/>
                        <p className='text-[#020e26]/70'>Really know the true needs and expectations of customers.</p>
                    </motion.div>
                </div>
            </div>
        </div>
        {/* <div className='w-96 h-2 bg-[#41cffc]'>mfkmvodkmvoirfod</div> */}
    </div>
  )
}

export default About