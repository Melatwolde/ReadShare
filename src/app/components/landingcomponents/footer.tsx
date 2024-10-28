'use client';
import React from 'react';
import logo from '../../../../public/logo.png'

const Footer = () => {
    return(
    <div className='mx-[69px] my-24 gap-20 mt-[650px] '>
        <div className=' felx felx-col'>
            <div>Let's Know</div>
            <div className='flex flex-row gap-[780px]'>
                <h1 className='text-[26px] font-semibold'>Want to contact us</h1>
                <form className="flex items-center space-x-1">
                    <input type="text" 
                        placeholder="Enter your text here" 
                        className="border border-gray-300   rounded py-2 px-4 " style={{ backgroundColor: 'rgba(145, 158, 171, 0.08)' }} />
                    <button type="submit" 
                        className="text-white rounded py-2 px-4 bg-[#FFC700]">
                        Submit </button>
                </form>
            </div>
            <div className="w-[1350px] h-[3px] bg-black mt-6 "></div>
        </div>
        {/* // Footer texts */}
        <div className='flex flex-row gap-30'>
            <img src={logo.src} alt="" className='w-[156px] h-[119px]' />
            <div className='absolute flex flex-row mt-3  justify-center gap-[300px] ml-48'>
                <div className='felx flex-col'>
                    <h1 className='font-semibold text-[26px]  '>Our Services</h1>
                    <h2>Audio Book</h2>
                    <h2>Filter By Preference</h2>
                    <h2>Direction & Navigation</h2>
                    <h2>Special Offer & Deals</h2>
                    <h2>User Recomendations</h2>
                    <h2>Integrated Review & Rating</h2>

                </div>
                <div className='flex flex-col'>
                    <h1 className='font-semibold text-[26px]'>Our Company</h1>
                    <h2 className='text-center'>FAQs</h2>
                    <h2 className='text-center'>About Us</h2>
                    <h2 className='text-center'>Our Team</h2>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-semibold text-[26px]'>Read With Us</h1>
                    <h2 className='text-center'>Pricing</h2>
                    <h2 className='text-center'>Premimum</h2>
                    <h2 className='text-center'>Staff Member</h2>
                </div>

            </div>
        </div>
    </div>
    )
}
export default Footer;