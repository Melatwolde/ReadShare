'use client';
import React, { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import profile from '../../../../public/profile.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Define the props type
interface GroupGetStartedProps {
  onClose?: () => void;
}

const Group_Get_Started: React.FC<GroupGetStartedProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose(); // Call the onClose prop if it exists
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className='w-[501px] h-auto bg-white mt-4 pl-8 pt-11 pb-14 pr-14 ml-3 shadow-lg rounded-lg'>
      <div>
        
        <div className='flex flex-col gap-5 ml-2'>
          <div className='w-[438px] h-[33px] font-normal text-[27px] text-[#343434] ml-4'>
            Welcome to joe’s Group
          </div>
          <div className='w-[438px] h-auto font-normal text-[16px] text-[#343434]'>
            <div className='text-left'>
              This is your brand new group. Here are some steps to
            </div>
            <div className='text-center'>help you get started.</div>
          </div>
        </div>

        {/* Options List */}
        <div className='flex flex-col mt-9 gap-3'>
          {/* Option 1: Get Invitation Link */}
          <div className='flex flex-row items-center gap-4 rounded-[20px] w-[432px] h-[73px] border border-solid border-[#343434] p-4 cursor-pointer hover:bg-gray-100'>
            <img
              src={profile.src}
              alt='logo'
              className='w-[50px] h-[50px] rounded-full'
            />
            <div className='flex-1'>Get invitation link</div>
            <NavigateNextIcon />
          </div>

          {/* Option 2: Add Group Bio */}
          <div className='flex flex-row items-center gap-4 rounded-[20px] w-[432px] h-[73px] border border-solid border-[#343434] p-4 cursor-pointer hover:bg-gray-100'>
            <img
              src={profile.src}
              alt='logo'
              className='w-[50px] h-[50px] rounded-full'
            />
            <div className='flex-1'>Add your group’s Bio</div>
            <NavigateNextIcon />
          </div>

          {/* Option 3: Send First Message */}
          <div className='flex flex-row items-center gap-4 rounded-[20px] w-[432px] h-[73px] border border-solid border-[#343434] p-4 cursor-pointer hover:bg-gray-100'>
            <img
              src={profile.src}
              alt='logo'
              className='w-[50px] h-[50px] rounded-full'
            />
            <div className='flex-1'>Send your first message</div>
            <NavigateNextIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group_Get_Started;
