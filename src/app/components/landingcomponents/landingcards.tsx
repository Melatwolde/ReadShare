'use client';
import React from 'react';
import lending from '../../../../public/lending.png'
import chat from '../../../../public/chat.png'
import selling from '../../../../public/selling.png'
const LandingCards = () => {
    return(
        <div className='absolute flex flex-row justify-center mt-[927px] gap-[38px] ml-[150px] '>
            <div className="flex flex-col w-[350px] h-[300px] bg-[#F2FBFF] rounded-2xl mt-5 ml-5 shadow-md">
                <div className="ml-32">
                    <img src={lending.src} alt="" className='w-20 h-20'/>
                </div>
                <div className="p-3">
                    <h1 className="text-center font-bold text-[30px] ">Lending Options</h1>
                    <p className='ml-4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris </p>
                </div>
            </div>
                    <div className="flex flex-col w-[350px] h-[300px] bg-[#FFFDF0] rounded-2xl mt-5 ml-5 shadow-md">
                    <div className="ml-32">
                        <img src={selling.src} alt="" className='w-20 h-20'/>
                    </div>
                    <div className="p-3">
                        <h1 className="text-center font-bold text-[30px] ">Selling Options</h1>
                        <p className='ml-4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris </p>
                    </div>
                </div>
                        <div className="flex flex-col w-[350px] h-[300px] bg-[#FEF8F8] rounded-2xl mt-5 ml-5 shadow-md">
                        <div className="ml-32">
                            <img src={chat.src} alt="" className='w-20 h-20'/>
                        </div>
                        <div className="p-3">
                            <h1 className="text-center font-bold text-[30px] ">Communication</h1>
                            <p className='ml-4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris </p>
                        </div>
                    </div>
                </div>
        
    )
};
export default LandingCards;