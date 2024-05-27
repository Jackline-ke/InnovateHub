import React from 'react';
import { BiSupport, BiLock, BiCart } from 'react-icons/bi';

const Features = () => {
  return (
    <div id='featur30' className='w-full h-full px-8 lg:px-32 mt-[-45px] relative font-serif'>
      <div className='flex flex-col md:flex-row justify-center gap-4 lg:gap-8'>
        <div className='flex flex-col justify-center items-center bg-white border border-[#777777]/30 py-4 px-3 rounded-sm'>
          <BiSupport className='text-2xl mb-1 text-[#3678fc]' />
          <div className='flex flex-col justify-center items-center gap-1'>
            <h1 className='font-semibold text-[#020e26]'>Custom IT Solutions</h1>
            <p className='text-[12px] text-center text-[#020e26]/50'>
              We tailor our IT services to meet the unique needs of your business.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center bg-white border border-[#777777]/30 py-4 px-3 rounded-sm'>
          <BiLock className='text-2xl mb-1 text-[#3678fc]' />
          <div className='flex flex-col justify-center items-center gap-1'>
            <h1 className='font-semibold text-[#020e26]'>Advanced Cybersecurity</h1>
            <p className='text-[12px] text-center text-[#020e26]/50'>
              Protect your business from cyber threats with our state-of-the-art cybersecurity services. 
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center bg-white border border-[#777777]/30 py-4 px-3 rounded-sm'>
          <BiCart className='text-2xl mb-1 text-[#3678fc]' />
          <div className='flex flex-col justify-center items-center gap-1'>
            <h1 className='font-semibold text-[#020e26]'>Cloud Integration</h1>
            <p className='text-[12px] text-center text-[#020e26]/50'>
              Embrace the power of the cloud with our seamless integration services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
