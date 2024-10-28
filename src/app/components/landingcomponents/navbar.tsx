'use client';
import React from 'react';
import logo from '../../../../public/logo.png'
const NavBar = () => {
    return (
        <nav className=" fixed w-full top-0 ">
            <div className="container mx-auto flex justify-between items-center p-2">
                <div className="flex items-center gap-72">
                    <img src={logo.src} alt="Logo" width={150} height={150} className="mr-2" />
                    <ul className="flex space-x-32">
                        <li className="nav-item">
                            <a className="nav-link hover:text-gray-400 font-medium" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link hover:text-gray-400 font-medium" href="/about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link hover:text-gray-400 font-medium" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='ml-[-100]'>
                    <ul className="flex space-x-2">
                        <li className="nav-item">
                            <a className="nav-link hover:text-gray-400 border border-[#CCCBE9] text-[#000000] py-2 px-4 rounded-2xl  " href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link bg-[#CCCBE9] text-[#000000] py-2 px-4 rounded-2xl " href="/signup">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;