import React from 'react'
import {BiCheckSquare} from 'react-icons/bi'

const About = () => {
  return (
    <div className='w-full h-screen font-serif flex flex-col justify-center items-center px-32 py-16'>
        <div className='flex items-center w-full'>
            <div className='w-1/3'>
                <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062443/innovateHub/christina-wocintechchat-com-FPQlXQtjkqU-unsplash_b9t1xw.jpg'
                    className='w-72 h-[350px] object-cover'
                />
                 <img src='https://res.cloudinary.com/dmpr1moai/image/upload/v1708062441/innovateHub/christina-wocintechchat-com-FBdmhGMdCso-unsplash_qvgykz.jpg'
                    className='w-52 h-[250px] mt-[-200px] object-cover ml-32'
                />
            </div>
            <div className='w-2/3 pl-12'>
                <h3 className='text-[#41cffc] font-medium'>About Us</h3>
                <h2 className='text-[#020e26] font-semibold text-3xl'>Let Us Be Your Partners <br/> Preferred IT Partner</h2>
                <p className='text-[#020e26]/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. </p>
                <div className='bg-[#41cffc]/5 py-4 px-2 mt-4 flex items-center justify-center'>
                    <div className='w-1 h-24 bg-[#41cffc]'></div>
                    <div className='ml-4'>
                        <p className='font-semibold text-[#020e26]'>As one of the world's largest IT service Providers, our deep goal of over 130 certified engineers and IT support staff</p>
                        <p className='text-[#020e26] font-extralight text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <button className='px-3 py-1 bg-[#41cffc] rounded-md text-white text-md mt-2 mb-2'>GET STARTED</button>
                <div>
                    <div className='flex items-center'>
                        <BiCheckSquare className='text-[#41cffc] mr-2'/>
                        <p className='text-[#020e26]/70'>We are committed to providing quality IT Services.</p>
                    </div>
                    <div className='flex items-center'>
                        <BiCheckSquare className='text-[#41cffc] mr-2'/>
                        <p className='text-[#020e26]/70'>Provided by experts to hel challenge critical activities.</p>
                    </div>
                    <div className='flex items-center'>
                        <BiCheckSquare className='text-[#41cffc] mr-2'/>
                        <p className='text-[#020e26]/70'>Really know the true needs and expectations of customers.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='w-96 h-2 bg-[#41cffc]'>mfkmvodkmvoirfod</div> */}
    </div>
  )
}

export default About