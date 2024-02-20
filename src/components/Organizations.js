import React from 'react'

const Organizations = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center font-serif mt-[630px] md:mt-[450px] px-8 lg:px-0'>
        <div className='flex flex-col gap-6 justify-center items-center'>
            <h1 className='text-[#020e26] font-semibold text-2xl text-center'>Trusted With The World's Best Organizations</h1>
            <div className='grid grid-cols-2 md:flex justify-center items-center gap-4 md:gap-32'>
              <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708341594/innovateHub/microsoft_tzu32e.png'
                alt=''
                className='w-24 object-cover'
              />
               <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708341594/innovateHub/google-logo-removebg-preview_1_dbc1ge.png'
                alt=''
                className='w-20 object-cover'
              />
               <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708341594/innovateHub/amazon-removebg-preview_oftmrt.png'
                alt=''
                className='w-20 object-cover'
              />
               <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708341593/innovateHub/fin-removebg-preview_dejwgr.png'
                alt=''
                className='w-32 object-cover'
              />
            </div>
        </div>
    </div>
  )
}

export default Organizations