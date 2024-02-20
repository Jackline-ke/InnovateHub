import React from 'react';
import { BiSupport } from 'react-icons/bi';

const Features = () => {
  return (
    <div className='w-full h-full px-8 lg:px-32 mt-[-45px] relative font-serif'>
      <div className='flex flex-col lg:flex-row justify-center gap-8'>
        <div className='flex flex-col justify-center items-center bg-white border py-2 px-3 rounded-sm'>
          <BiSupport className='text-2xl mb-1 text-[#41cffc]' />
          <div className='flex flex-col justify-center items-center gap-1'>
            <h1 className='font-semibold text-[#020e26]'>IT Expert</h1>
            <p className='text-[12px] text-center text-[#020e26]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center bg-white border py-2 px-3 rounded-sm'>
          <BiSupport className='text-2xl mb-1 text-[#41cffc]' />
          <div className='flex flex-col justify-center items-center gap-1'>
            <h1 className='font-semibold text-[#020e26]'>IT Expert</h1>
            <p className='text-[12px] text-center text-[#020e26]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center bg-white border py-2 px-3 rounded-sm'>
          <BiSupport className='text-2xl mb-1 text-[#41cffc]' />
          <div className='flex flex-col justify-center items-center gap-1'>
            <h1 className='font-semibold text-[#020e26]'>IT Expert</h1>
            <p className='text-[12px] text-center text-[#020e26]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
