import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-full font-serif'>
        <div className='relative'>
            <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708321890/innovateHub/ux-indonesia-w00FkE6e8zE-unsplash_v3u1wm.jpg'
                className='w-full h-64 object-cover'
                alt='contact'
            />
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/50'></div>
            <div className='absolute top-0 w-full h-full text-white flex flex-col justify-center items-center text-center'>
               <div className='w-[650px]'>
                    <h1 className='font-semibold text-2xl'>Don't Hesitate To Contact Us For Better Information And Services</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
               </div>
            </div>
        </div>
        <div className='w-full px-32 flex absolute mt-[-50px]'>
            <div className='flex-1 bg-blue-400 py-8'></div>
            <div className='flex-1 border bg-white'>
                <form className='px-8 py-8 flex flex-col gap-2'>
                    <div className='flex flex-col gap-1'>
                        <label>First Name</label>
                        <input placeholder='first name' type='text' className='border'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>Second Name</label>
                        <input placeholder='first name' type='text' className='border'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>Email</label>
                        <input placeholder='first name' type='text' className='border'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>Phone Number</label>
                        <input placeholder='phone number' type='text' className='border'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>Select</label>
                        <select >
                            <option value="it">IT</option>
                            <option value="cs">Computer Science</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact