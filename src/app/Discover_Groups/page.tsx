'use client';
import { Group } from '@mui/icons-material';
import background from '../../../public/bg.png';
import pro from '../../../public/profile.png';
import MainPage from '../components/Mainpage_component/mainpage';
import { useState } from 'react';
import Comp from '../components/Mainpage_component/comp'

const Discover_Groups = () => {
    function Group_data(
        Group_Image: string,
        Group_BG: string,
        Group_Name: string,
        Group_Description: string,
        Group_Members: string
    ) {
        return {
            Group_Image,
            Group_BG,
            Group_Name,
            Group_Description,
            Group_Members
        };
    }

    const Data = [
        Group_data(pro.src, background.src, 'Book Club', 'The official group for Midjourny, a place to discuss with others about your favorite book', '10 members'),
        Group_data(pro.src, background.src, 'Book Club', 'The official group for Midjourny, a place to discuss with others about your favorite book', '10 members'),
        Group_data(pro.src, background.src, 'Book Club', 'The official group for Midjourny, a place to discuss with others about your favorite book', '10 members'),
        Group_data(pro.src, background.src, 'Book Club', 'The official group for Midjourny, a place to discuss with others about your favorite book', '10 members'),
        Group_data(pro.src, background.src, 'Book Club', 'The official group for Midjourny, a place to discuss with others about your favorite book', '10 members'),
        Group_data(pro.src, background.src, 'Book Club', 'The official group for Midjourny, a place to discuss with others about your favorite book', '10 members')
    ];

    return (
       
            <div >
                <div className='mt-6'><MainPage isVisible={false} /></div>
                <div className='flex flex-col gap-8 ml-28 -mt-11 bg-[#FCF8F5] h-auto w-[1403px] rounded-35 pl-6 pt-8 rounded-[32px]'>
                    <img src={background.src} alt="Group background" className='w-[1360px] h-[390px] rounded-[35px]' />
                    <h6 className='w-[450px] h-[291px] font-normal text-[60px] text-[#1B1A1A] -mt-80 ml-8'>Find Your Group on Read Share</h6>
                    <h6 className='w-[399px] h-[46px] text-[30px] font-normal text-[#2C2C2C] mt-6 ml-4'>Featured Community</h6>
                    <div className='flex flex-row flex-wrap gap-x-8 gap-y-4 mt-20'>
                        {Data.map((book, index) => (
                            <div key={index} className='w-auto h-[400px] ml-4'>
                                <div className='flex flex-col w-[392px] h-auto -mt-20 gap-2'>
                                    <div className='flex flex-col w-[392px] h-[382px] mt-2 bg-white rounded-[20px]'>
                                        <img src={book.Group_BG} alt="" className='w-[392px] h-[220px] rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px]' />
                                        <img src={book.Group_Image} alt="" className='w-[65px] h-[70px] rounded-[17px] -mt-[53px] ml-2' />
                                        <div className='flex flex-col w-[372px] h-[186px] rounded-tl-none rounded-tr-none rounded-bl-[20px] rounded-br-[20px] pl-4 gap-5'>
                                            <div className='text-[#131313] text-[19px] font-medium'>{book.Group_Name}</div>
                                            <div className='text-[#343434] font-normal text-[16px]'>{book.Group_Description}</div>
                                            <div className='text-[#343434] text-[16px] font-normal mb-5'>{book.Group_Members}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        
    );
};

export default Discover_Groups;