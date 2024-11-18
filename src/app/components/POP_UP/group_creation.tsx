'use client';
import React, { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import profile from '../../../../public/profile.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CostomizeGroup from './group_customize';

  
const Group_Creation = () => {
    const [showCustomizeGroup, setShowCustomizeGroup] = useState(false);

    const handleCustomizeClick = () => {
        setShowCustomizeGroup(true); // Show the Customize Group pop-up
    };

    const handleCloseCustomizeGroup = () => {
        setShowCustomizeGroup(false); // Hide the Customize Group pop-up
    };

    if (showCustomizeGroup) {
        return <CostomizeGroup onClose={handleCloseCustomizeGroup} />;
    }

    return (
        <div className=''>
            <div className='ml-14'>
                <div className='flex flex-col gap-5 '>
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
                        <div className='ml-16 -mt-1 cursor-pointer' onClick={handleCustomizeClick}>
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 rounded-[20px] w-[432px] h-[73px] border border-solid border-[#343434] p-6'>
                        <img src={profile.src} alt="logo" className='w-[50px] h-[50px] rounded-full -mt-4' />
                        <div className=''>For me and my friends</div>
                        <div className='ml-16 -mt-1 cursor-pointer' onClick={handleCustomizeClick}>
                            <NavigateNextIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Group_Creation;