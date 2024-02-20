import React from 'react'
import { BiPhone, BiEnvelope, BiLocationPlus} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='w-full h-full bg-[#020e26] font-serif px-16 py-8 text-white'>
        <div className='grid grid-cols-4'>
            <div className='flex flex-col gap-2'>
                <h1>InnovateHub</h1>
                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
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
            <div className='flex flex-col gap-2'>
                <h3>Other Pages</h3>
                <div className='py-4'>
                    <ul className='flex flex-col gap-2'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>Blogs</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h3>Quick Links</h3>
                <div className='py-4'>
                    <ul className='flex flex-col gap-2'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>Blogs</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h3>Newsletter</h3>
                <div className='flex items-center justify-center py-2 mt-4 px-4 bg-white'>
                    <form>
                        <input placeholder='Email' className='py-1 '/>
                    </form>
                    <div className=''>
                        <button className='px-1 py-1 bg-[#41cffc] text-white text-[12px] font-semibold'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer