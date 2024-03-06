import React from 'react'
import { BiPhone, BiEnvelope, BiLocationPlus, BiArrowFromLeft} from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaAngleRight} from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='footer' className='w-full h-full bg-[#020e26] font-serif px-8 lg:px-16 py-8 text-white'>
        <div className='flex flex-col lg:flex-row gap-8 justify-between'>
            <div className='flex-1 flex flex-col gap-2'>
                <h1 className='font-semibold text-lg'>InnovateHub</h1>
                <p className='text-sm text-gray-500 md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</p>
                <div className='flex gap-2 items-center'>
                    <BiLocationPlus/>
                    <h3 className='text-sm'>Nairobi, Kenya</h3>
                </div>
                <div className='flex gap-2 items-center'>
                    <BiEnvelope/>
                    <h3 className='text-sm'>Nairobi, Kenya</h3>
                </div>
                <div className='flex gap-2 items-center'>
                    <BiPhone/>
                    <h3 className='text-sm'>Nairobi, Kenya</h3>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-2'>
                <h3 className='font-semibold text-lg'>Quick Links</h3>
                <div className='lg:py-1'>
                    <ul className='flex flex-col gap-1'>
                        <div className='cursor-pointer flex items-center'>
                            <FaAngleRight/>
                            <li> Home</li>
                        </div>
                        <div className='cursor-pointer flex items-center'>
                            <FaAngleRight/>
                            <li> About Us</li>
                        </div>
                        <div className='cursor-pointer flex items-center'>
                            <FaAngleRight/>
                            <li> Services</li>
                        </div>
                        <div className='cursor-pointer flex items-center'>
                            <FaAngleRight/>
                            <li> Contact</li>
                        </div>
                        <div className='cursor-pointer flex items-center'>
                            <FaAngleRight/>
                            <li> Blogs</li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-2'>
                <h3 className='font-semibold text-lg'>Newsletter</h3>
                <div className='flex items-center px-4 py-4 bg-white'>
                    <div className=''>
                        <form className='flex flex-col gap-4'>
                            <input placeholder='Email' className='py-1 border px-8'/>
                            <div className=''>
                                <button className='px-1 py-1 bg-[#41cffc] text-white text-[12px] font-semibold'>SUBSCRIBE</button>
                            </div>
                        </form>
                    </div>
                </div>
                <p  className='text-sm text-gray-500'>Get the latest news & updates.</p>
                <div className='flex justify-center gap-8 mt-2'>
                    <div className='cursor-pointer'>
                        <FaFacebook className=''/>
                    </div>
                    <div className='cursor-pointer'>
                        <FaInstagram className=''/>
                    </div>
                    <div className='cursor-pointer'>
                        <FaTwitter className=''/>
                    </div>
                    <div className='cursor-pointer'>
                        <FaLinkedin className=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer