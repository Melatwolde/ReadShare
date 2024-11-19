// Import necessary modules
'use client';
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
import { useState, useEffect, useRef, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Homepage from '@/app/Homepage/page'; 
import Reading_Page from '@/app/Reading_Page/page';
import Discover_Groups from '@/app/Discover_Groups/page';
// Define props
interface MainPageProps {
    children?: ReactNode;
    disableStyles?: boolean;
}

const Comp = ({ children, disableStyles }: MainPageProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<ReactNode | null>(null);
  const activeTabRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeTab]);

  // Tab content components for each tab
  const BookmarkPage = () => <div>Bookmark Content</div>;
  const ChatPage = () => <div>Chat Content</div>;
  const UserProfilePage = () => <div>User Profile Content</div>;
  const UploadPage = () => <div>Upload Content</div>;
  const DiscoverGroupsPage = () => <div>Discover Groups Content</div>;
  const AddGroupPage = () => <div>Add Group Content</div>;

  // Render tab with click handler for switching content
  const renderTab = (tabName: string, contentComponent: ReactNode, icon: StaticImageData) => (
    <li
      ref={activeTab === contentComponent ? activeTabRef : null}
      className={`relative flex space-x-5 cursor-pointer ${
        activeTab === contentComponent ? "text-[#2D60FF] font-semibold" : "text-[#B1B1B1]"
      }`}
      onClick={() => setActiveTab(contentComponent)} // Set the component as the active tab
    >
      {activeTab === contentComponent && (
        <div className="relative flex items-center">
          <div className="w-1 h-10 bg-blue-800 absolute left-0 top-1 rounded-r-lg"></div>
          <Image className="ml-10" src={icon} alt={tabName} />
        </div>
      )}
      <h2>{tabName}</h2>
    </li>
  );

  return (
    <div>
      <div className="inset-0 bg-[#EDE5DA] overflow-hidden">
        {/* Header */}
        <div className="flex flex-row justify-between items-center p-4">
          <img src={logo.src} alt="Logo" className="fixed w-[95px] h-[66px] rounded-full" />
          <div className="flex items-center w-[270px] h-[57px] ml-[600px] rounded-[20px] bg-[#f1EEEE] border">
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#f1EEEE] ml-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img src={search.src} alt="Search" className="w-[29px] h-[29.29px]" />
          </div>
          <div className="flex items-center space-x-4">
            <img src={cart.src} alt="Cart" className="w-[45px] h-[45px]" />
            <img src={profile.src} alt="Profile" className="w-[50px] h-[50px]" />
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex flex-col items-center gap-7 mt-4 fixed left-9 top-36">
          <div className="w-[33.3px] h-[33.3px] cursor-pointer">
            {renderTab("Dashboard", <Homepage />, Home)} {/* Use Homepage component */}
            {renderTab("Bookmark", <BookmarkPage />, Bookmark)}
            {renderTab("Chat", <ChatPage />, message)}
            {renderTab("User Profile", <UserProfilePage />, user)}
          </div>
        </div>
        <div className="fixed left-9 bottom-20 space-y-3">
          <div className="w-[34px] h-[34px] cursor-pointer">
            {renderTab("Upload", <UploadPage />, Upload)}
            {renderTab("Discover Groups", <Discover_Groups />, Discover)}
            {renderTab("Add Group", <AddGroupPage />, Add)}
          </div>
        </div>

        {/* Main Content Frame */}
        <div
          className={`w-[1400px] h-auto top-[60px] mt-[6px] ml-28 p-4 ${
            !disableStyles ? 'bg-[#FCF8F5] rounded-[35px] shadow-lg' : ''
          } shadow-lg overflow-y-auto hide-scrollbar`}
        >
          {activeTab || children} {/* Render active tab content or fallback to children */}
        </div>
      </div>
    </div>
  );
};

export default Comp;
