'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
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
import Group_Creation from '../POP_UP/group_creation';
import ClearIcon from '@mui/icons-material/Clear';
import Group_Get_Started from '../POP_UP/group_get_started';


interface MainPageProps {
    disableStyles?: boolean;
    isVisible?: boolean; // Ensure this is optional
}

const MainPage = ({ disableStyles, isVisible: initialIsVisible = true }: MainPageProps) => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(initialIsVisible);
    const [showGroupCreation, setShowGroupCreation] = useState(false);

    const handleAddClick = () => {
        setShowGroupCreation(true); // Show the pop-up
    };

    // Function to close the Group Creation pop-up
    const handleClosePopUp = () => {
        setShowGroupCreation(false); // Hide the pop-up
    };

    // Toggle the search bar visibility
    const toggleSearchVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="inset-0 bg-[#EDE5DA] overflow-hidden">
            {/* Header Section */}
            <div className="flex flex-row justify-between items-center p-4">
                <Image src={logo} alt="Logo" className="fixed w-[95px] h-[66px] rounded-full" />

                {isVisible && (
                    <div className="flex items-center w-[270px] h-[57px] ml-[600px] rounded-[20px] bg-[#f1EEEE] ">
                        <input
                            type=""
                            placeholder="Search..."
                            className="bg-[#f1EEEE] ml-2 "
                        />
                        <Image src={search} alt="Search" className="w-[25px] h-[25px] " />
                    </div>
                )}

                {/* Icons Section */}
                {isVisible && (
                    <div className="flex items-center space-x-4">
                        <Link href="/cart">
                            <Image src={cart} alt="Cart" className="w-[35px] h-[35px]  cursor-pointer" />
                        </Link>
                        <Link href="/profile">
                            <Image src={profile} alt="Profile" className="w-[50px] h-[50px] cursor-pointer rounded-full" />
                        </Link>
                    </div>
                )}
            </div>

            {/* Sidebar Navigation */}
            <div className="flex flex-col items-center gap-7 mt-4 fixed left-9 top-36">
                <Link href="/Homepage">
                    <Image src={Home} alt="Home" className="w-[33.3px] h-[33.3px] cursor-pointer" />
                </Link>
                <Link href="/Bookmarks">
                    <Image src={Bookmark} alt="Bookmark" className="w-[33.3px] h-[33.3px] cursor-pointer" />
                </Link>
                <Link href="/messages">
                    <Image src={message} alt="Message" className="w-[33.3px] h-[33.3px] cursor-pointer" />
                </Link>
                <Link href="/User_profile">
                    <Image src={user} alt="User" className="w-[33.3px] h-[33.3px] cursor-pointer" />
                </Link>
            </div>

            {/* Bottom Icons */}
            <div className="fixed left-9 bottom-20 space-y-3">
                <Link href="/upload">
                    <Image src={Upload} alt="Upload" className="w-[44px] h-[44px] cursor-pointer mt-5" />
                </Link>
                <Link href="/Discover_Groups">
                    <Image src={Discover} alt="Discover" className="w-[44px] h-[44px] cursor-pointer mt-3" />
                </Link>

                {/* Updated "Add" Button to trigger pop-up */}
                <button onClick={handleAddClick}>
                    <Image src={Add} alt="Add" className="w-[44px] h-[44px] cursor-pointer mt-3" />
                </button>
            </div>

            {/* Group Creation Pop-up */}
            {showGroupCreation && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg relative w-[600px]">
                        <Group_Creation />

                        {/* Close Button */}
                        <button
                            onClick={handleClosePopUp}
                            className="absolute top-2 right-2 text-[#545454] hover:text-red-500"
                        >
                            <ClearIcon />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainPage;
