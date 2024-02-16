import React from 'react'
import {} from 'react-icons/fa'

const Testimonals = () => {
  return (
    <div className='w-full h-full border font-serif text-white'>
        <div className='flex'>
            <div className='flex-1'>
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062442/innovateHub/desola-lanre-ologun-IgUR1iX0mqM-unsplash_m3g4av.jpg'
                    className='w-full h-full object-cover'
                    alt='testiomals'
                /> 
                <div className='absolute bg-[#020e26] w-52 mt-[-140px] px-4 py-2'>
                    <p className='text-xl font-semibold'>Since 2004</p>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua.</p>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-2 justify-center items-center bg-[#41cffc] px-32 py-8'>
                <h2 className='font-semibold text-xl'>What Client Say About Us</h2>
                <div className='rounded-full p-2 w-12 h-12 bg-white flex justify-center items-center'>
                    <p className='text-[#020e26]'>"</p>
                </div>
                <p className='text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. </p>
                <div className='flex flex-col justify-center items-center'>
                    <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww'
                        className='rounded-full w-12 h-12 object-cover'
                    />
                    <div className='flex flex-col text-center'>
                        <p className='font-semibold'>Jane Doe</p>
                        <p className='text-sm font-extralight'>Co-Founder</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonals