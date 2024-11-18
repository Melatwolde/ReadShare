'use client';
import { Avatar } from "@mui/material";
import avatar from '../../../../public/avatar.png'

function User_data(User_name: string, status: string) {
    return {
        User_name,
        status
    };
}

const Data = [
    User_data('Alelmayhu Almu', 'Online')
];

const Top = () => {
    return (
        <div className="">
            {Data.map((user, index) => (
                <div key={index} className=''>
                    <div className="flex flex-row w-[1280px] h-[200px] rounded-tl-[25px] rounded-tr-[25px] rounded-bl-[0px] rounded-br-[0px] bg-white">
                        <img src={avatar.src} alt="" className="w-[190px] h-[190px] mt-24 ml-10"/> 
                        <div className="flex flex-col mt-32 ml-5">
                            <div className=' font-medium text-[30px]'>{user.User_name}</div>
                            <div className='text-[22px] text-green-500 -mt-2'>{user.status}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Top;


