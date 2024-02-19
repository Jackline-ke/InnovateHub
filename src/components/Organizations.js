import React from 'react'

const Organizations = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center font-serif'>
        <div className='flex flex-col gap-8 justify-center items-center'>
            <h1 className='text-[#020e26] font-semibold text-3xl'>Trusted With The World's Best Organizations</h1>
            <div className='flex justify-center items-center gap-32 border'>
              <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708341594/innovateHub/microsoft_tzu32e.png'
                alt=''
                className='w-32 object-cover'
              />
               <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708341594/innovateHub/google-logo-removebg-preview_1_dbc1ge.png'
                alt=''
                className='w-32 object-cover'
              />
               <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708341594/innovateHub/amazon-removebg-preview_oftmrt.png'
                alt=''
                className='w-32 object-cover'
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