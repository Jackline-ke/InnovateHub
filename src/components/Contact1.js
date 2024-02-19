import React from 'react'

const Contact1 = () => {
  return (
    <div className='w-full h-screen border font-serif '>
        <div className='flex px-32 absolute mt-[-50px]'>
            <div className='flex-1 relative'>
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708334914/innovateHub/studio-republic-fotKKqWNMQ4-unsplash_smmeji.jpg'
                    className='w-full h-full object-cover'
                    alt='contact'
                />
                <div className='absolute w-full h-full top-0 left-0 bg-[#41cffc]/50'></div>
            </div>
            <div className='flex-1 border border-[#41cffc]/20 bg-white'>
                <form className='px-8 py-8 flex flex-col gap-2'>
                    <div className='flex gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label>First Name</label>
                            <input placeholder='First name' type='text' className='border px-4'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label>Second Name</label>
                            <input placeholder='Second name' type='text' className='border px-4'/>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label>Email</label>
                            <input placeholder='Email' type='text' className='border px-4'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label>Phone Number</label>
                            <input placeholder='Phone number' type='text' className='border px-4'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>Select</label>
                        <select >
                            <option value="it">IT</option>
                            <option value="cs">Computer Science</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>Additional Message</label>
                        <input placeholder='Message...' type='text' className='border py-12 px-4'/>
                    </div>
                    <div className='mt-2'>
                        <button className='px-3 py-1 bg-[#41cffc] text-white text-sm'>GET STARTED</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact1