import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full h-full font-serif'>
        <div className='relative'>
            <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708321890/innovateHub/ux-indonesia-w00FkE6e8zE-unsplash_v3u1wm.jpg'
                className='w-full h-64 object-cover'
                alt='contact'
            />
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/50'></div>
            <div className='absolute top-0 w-full h-full text-white flex flex-col justify-center items-center text-center '>
               <div className='lg:w-[650px] px-8 lg:px-1 '>
                    <h1 className='font-semibold text-2xl'>Don't Hesitate To Contact Us For Better Information And Services</h1>
                    <p className='text-sm lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
               </div>
            </div>
        </div>
        <div className='w-full h-full flex justify-center font-serif '>
        <div className='flex flex-col md:flex-row px-1 md:px-16 lg:px-32 absolute mt-[-50px]'>
            <div className='flex-1 relative'>
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708334914/innovateHub/studio-republic-fotKKqWNMQ4-unsplash_smmeji.jpg'
                    className='w-full h-32 md:h-full object-cover'
                    alt='contact'
                />
                <div className='absolute w-full h-full top-0 left-0 bg-[#41cffc]/50'></div>
            </div>
            <div className='flex-1 border border-[#41cffc]/20 bg-white'>
                <form className='px-8 py-2 lg:py-8 flex flex-col gap-2'>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label>First Name <span className='text-red-400'>*</span></label>
                            <input placeholder='First name' type='text' className='border px-4 py-1'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label>Second Name <span className='text-red-400'>*</span></label>
                            <input placeholder='Second name' type='text' className='border px-4 py-1'/>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label>Email <span className='text-red-400'>*</span></label>
                            <input placeholder='Email' type='text' className='border px-4 py-1'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label>Phone Number <span className='text-red-400'>*</span></label>
                            <input placeholder='Phone number' type='text' className='border px-4 py-1'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>Select</label>
                        <select className='py-1 px-2'>
                            <option value="it">IT</option>
                            <option value="cs">Computer Science</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>Additional Message</label>
                        <input placeholder='Message...' type='text' className='border py-8 lg:py-12 px-4'/>
                    </div>
                    <div className='mt-2 mb-2 lg:mb-1'>
                        <button className='px-3 py-1 bg-[#41cffc] text-white text-sm'>GET STARTED</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        
    </div>
  )
}

export default Contact