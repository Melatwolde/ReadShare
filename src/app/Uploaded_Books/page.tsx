'use client'
import Top from "../components/Profile/topprofile"
import Uploaded from "../components/Profile/uploadedbooks"
import MainPage from "../components/Mainpage_component/mainpage"
import { useRef } from 'react';
import Link from "next/link"
const UploadedBooks = () =>{
    
    return(
        <div>
            <div className="mt-5"><MainPage isVisible={false} /></div>
            <div className="ml-40">
                <div className="-mt-10"><Top/></div>
                <div className="flex flex-row ml-[780px] gap-20 mt-8">
                    <Link href = '/User_profile'>Profile</Link>
                    <Link href='/Bookmarks'>Bookmarks</Link>
                    <Link href='/Uploaded_Books'>Uploaded Books</Link>
                </div>
                <div className="mt-11"><Uploaded/></div>
            </div>
        </div>
    )
}
export default UploadedBooks