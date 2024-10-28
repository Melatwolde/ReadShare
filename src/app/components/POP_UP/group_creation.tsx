'use client';
import React, { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import profile from '../../../../public/profile.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Group_Creation = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className='w-[501px] h-auto bg-white mt-4 pl-8 pt-11 pb-14 pr-14 ml-3'>
            <div>
                <div className='flex justify-end text-[#545454] w-[20px] h-[20px] cursor-pointer ml-96' onClick={handleClose}>
                    <ClearIcon />
                </div>
                <div className='flex flex-col gap-5 ml-2'>
                    <div className='w-[438px] h-[33px] font-normal text-[27px] text-[#343434] ml-4'>Tell Us More About Your Group</div>
                    <div className='w-[438px] h-auto font-normal text-[16px] text-[#343434]'>
                        <div className='text-left'>
                            In order to help you with your setup, is your new group for
                        </div>
                        <div className='text-center'>
                            just a few friends or a larger community?
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-9 gap-3'>
                    <div className='flex flex-row gap-4 rounded-[20px] w-[432px] h-[73px] border border-solid border-[#343434] p-6'>
                        <img src={profile.src} alt="logo" className='w-[50px] h-[50px] rounded-full -mt-4' />
                        <div className=''>For me and my friends</div>
                        <div className='ml-16 -mt-1'><NavigateNextIcon /></div>
                    </div>
                    <div className='flex flex-row gap-4 rounded-[20px] w-[432px] h-[73px] border border-solid border-[#343434] p-6'>
                        <img src={profile.src} alt="logo" className='w-[50px] h-[50px] rounded-full -mt-4' />
                        <div className=''>For me and my friends</div>
                        <div className='ml-16 -mt-1'><NavigateNextIcon /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Group_Creation;