'use client';
import { useRouter } from 'next/navigation';
import logo from '../../../../public/logo.png';
import Add from '../../../../public/icons/Add.svg';
import cart from '../../../../public/icons/cart.svg';
import Bookmark from '../../../../public/icons/Bookmark.svg';
import search from '../../../../public/icons/search.svg';
import Home from '../../../../public/icons/Home.svg';
import Upload from '../../../../public/icons/Upload.svg';
import user from '../../../../public/icons/user_contact.svg';
import message from '../../../../public/icons/message.svg';
import Discover from '../../../../public/icons/Discover.svg';
import profile from '../../../../public/thealchemist.png';
import { useState } from 'react';
import { ReactNode } from 'react';

interface MainPageProps {
    children: ReactNode;
    disableStyles?: boolean;
    disable?: boolean;
}

const MainPage = ({ children, disableStyles }: MainPageProps) => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    // Example data to search from
    const data = [
        { id: 1, name: 'The Alchemist' },
        { id: 2, name: 'The Ninth Bridgroom' },
        { id: 3, name: 'To Kill a Mockingbird' },
        { id: 4, name: '1984' },
    ];
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="inset-0 bg-[#EDE5DA] overflow-hidden">
            <div className="flex flex-row justify-between items-center p-4">
                <img src={logo.src} alt="Logo" className="fixed w-[95px] h-[66px] rounded-full" />
                <div className={"flex items-center w-[270px] h-[57px] ml-[600px] rounded-[20px] bg-[#f1EEEE] border"}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className=" bg-[#f1EEEE] ml-2"
                    />
                    <img src={search.src} alt="Search" className="w-[29px] h-[29.29px]" />
                </div>
                <div className="flex items-center space-x-4">
                    <img src={cart.src} alt="Cart" className="w-[45px] h-[45px]" />
                    <img src={profile.src} alt="Profile" className="w-[50px] h-[50px]" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-7 mt-4 fixed left-9 top-36">
                <img src={Home.src} alt="Home" className="w-[33.3px] h-[33.3px] cursor-pointer" onClick={() => router.push('/homepage')} />
                <img src={Bookmark.src} alt="Bookmark" className="w-[33.3px] h-[33.3px] cursor-pointer" onClick={() => router.push('/bookmark')} />
                <img src={message.src} alt="Message" className="w-[33.3px] h-[33.3px] cursor-pointer" onClick={() => router.push('/message')} />
                <img src={user.src} alt="User" className="w-[33.3px] h-[33.3px] cursor-pointer" onClick={() => router.push('/user')} />
            </div>
            <div className="fixed left-9 bottom-20 space-y-3">
                <img src={Upload.src} alt="Upload" className="w-[34px] h-[34px] cursor-pointer" onClick={() => router.push('/upload')} />
                <img src={Discover.src} alt="Discover" className="w-[34px] h-[34px] cursor-pointer" onClick={() => router.push('/discover')} />
                <img src={Add.src} alt="Add" className="w-[34px] h-[34px] cursor-pointer" onClick={() => router.push('/add')} />
            </div>

            {/* Scrollable frame */}
            <div className={`w-[1400px] h-auto top-[60px] mt-[6px] ml-28 p-4 ${!disableStyles ? 'bg-[#FCF8F5] rounded-[35px] shadow-lg' : ''} shadow-lg overflow-y-auto hide-scrollbar`}>
                {children}  {/* Render the child components here */}
            </div>
        </div>
    );
};

export default MainPage;