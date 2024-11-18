'use client';
import ClearIcon from '@mui/icons-material/Clear';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import React, { useState } from 'react';
import ADD1 from '../../../../public/icons/ADD1.svg'
import Group_Get_Started from './group_get_started';

const CostomizeGroup = (props: any) => {
    const [isVisible, setIsVisible] = useState(true); const [showCustomizeGroup, setShowCustomizeGroup] = useState(false);

    const handleCustomizeClick = () => {
        setShowCustomizeGroup(true); // Show the Customize Group pop-up
    };

    const handleCloseCustomizeGroup = () => {
        setShowCustomizeGroup(false); // Hide the Customize Group pop-up
    };

    if (showCustomizeGroup) {
        return <Group_Get_Started onClose={handleCloseCustomizeGroup} />;
    }



    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }
    return(
        <div className='w-[501px] h-auto bg-white mt-4 pl-8 pt-11 pb-14 pr-14 ml-6'>
            <div>
                <div className='flex flex-col gap-5 ml-2'>
                    <div className='w-[438px] h-[33px] font-normal text-[27px] text-[#343434] ml-12'>Customize Your Group</div>
                    <div className='w-[438px] h-auto font-normal text-[16px] text-[#343434]'>
                        <div className=''>
                            Give your new server a personality with a name and an
                        </div>
                        <div className='ml-14'>
                            icon. You can always change it later
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-9 gap-3 ml-36'>
                    <div className="w-[100px] h-[100px] rounded-full border border-dashed border-black"></div>
                    <div className='ml-8'>
                        <div className='text-[#545454] -mt-24'><CameraAltOutlinedIcon style={{ fontSize: 40 }} /></div>
                        <div className='mr-2 text-[16px] font-normal text-[#343434]'>Upload</div>
                        <div className='-mt-24 ml-7'><img src={ADD1.src} alt="" /></div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='ml-2 text-[#343434] text-[16px] font-normal'>Group Name</div>
                    <input type="text" placeholder="Write Your Group Name" className="w-[432px] h-[57px] border border-solid  p-6 rounded-[10px] bg-[#EFEEEE]"/>
                </div>
                <div className='flex flex-row gap-[240px] ml-6 mt-7'>
                    <div className='mt-2'>Back</div>
                    <button className='flex items-center w-[81px] h-[43px] bg-[#EDE5DA] rounded-[5px] p-[10px]' onClick={handleCustomizeClick}>Create</button>
                </div>
            </div>
        </div>
    )
}
export default CostomizeGroup;