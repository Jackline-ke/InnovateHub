import React from 'react'
import { BiPhone, BiEnvelope, BiLocationPlus} from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-full bg-[#020e26] font-serif px-16 py-8 text-white'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-0'>
            <div className='flex flex-col gap-2 items-center'>
                <h1 className='font-semibold text-lg'>InnovateHub</h1>
                <p className='text-sm text-gray-500 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
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
            <div className='flex flex-col gap-2 items-center'>
                <h3 className='font-semibold text-lg'>Other Pages</h3>
                <div className='lg:py-4'>
                    <ul className='flex flex-col gap-1 text-center'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>Blogs</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <h3 className='font-semibold text-lg'>Quick Links</h3>
                <div className='lg:py-4'>
                    <ul className='flex flex-col gap-1 text-center'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>Blogs</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-semibold text-lg'>Newsletter</h3>
                <div className='flex items-center justify-center py-4 bg-white'>
                    <div className=''>
                        <form className='flex flex-col gap-4'>
                            <input placeholder='Email' className='py-1 border px-2'/>
                            <div className=''>
                                <button className='px-1 py-1 bg-[#41cffc] text-white text-[12px] font-semibold'>SUBSCRIBE</button>
                            </div>
                        </form>
                    </div>
                </div>
                <p  className='text-sm text-gray-500'>Get the latest news & updates.</p>
                <div className='flex justify-center gap-8 mt-2'>
                    <div>
                        <FaFacebook className=''/>
                    </div>
                    <div>
                        <FaInstagram className=''/>
                    </div>
                    <div>
                        <FaTwitter className=''/>
                    </div>
                    <div>
                        <FaLinkedin className=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer