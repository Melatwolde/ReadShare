'use client';
import { Edit, Save } from "@mui/icons-material";
import { useState } from 'react';

const Bottom = () => {
    // Initial user data
    const [userData, setUserData] = useState({
        fullName: "Abebe Kebede",
        email: 'abebekebede@gmail.com',
        city: 'Tercha',
        country: 'Ethiopia',
        postalCode: 1000,
    });

    // State to manage edit mode
    const [isEditing, setIsEditing] = useState(false);

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // Toggle edit mode
    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="w-[1280px] h-[370px] rounded-bl-[25px] rounded-br-[25px] rounded-tl-[0px] rounded-tr-[0px] bg-white p-6">
            <div className="text-[26px]">Personal Information</div>
            <div className="flex flex-row mt-5 gap-36">
                <div className="flex flex-col">
                    <div className="text-[16px] text-[#404040]">Full Name</div>
                    {isEditing ? (
                        <input
                            type="text"
                            name="fullName"
                            value={userData.fullName}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1"
                        />
                    ) : (
                        <div>{userData.fullName}</div>
                    )}
                </div>

                <div className="flex flex-col ml-10">
                    <div className="text-[16px] text-[#404040]">Email</div>
                    {isEditing ? (
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1"
                        />
                    ) : (
                        <div>{userData.email}</div>
                    )}
                </div>
                <div onClick={toggleEditMode} className="cursor-pointer ml-40">
                    {isEditing ? <Save /> : <Edit />}
                </div>
            </div>

            <div className="text-[26px] pt-7">Address</div>
            <div className="flex flex-row mt-5 gap-44">
                <div className="flex flex-col">
                    <div className="text-[16px] text-[#404040]">City</div>
                    {isEditing ? (
                        <input
                            type="text"
                            name="city"
                            value={userData.city}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1"
                        />
                    ) : (
                        <div>{userData.city}</div>
                    )}
                </div>

                <div className="flex flex-col ml-16">
                    <div className="text-[16px] text-[#404040]">Country</div>
                    {isEditing ? (
                        <input
                            type="text"
                            name="country"
                            value={userData.country}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1"
                        />
                    ) : (
                        <div>{userData.country}</div>
                    )}
                </div>
               
            </div>
            <div className="text-[16px] text-[#404040] mt-5">
                Postal Code {isEditing ? (
                    <input
                        type="number"
                        name="postalCode"
                        value={userData.postalCode}
                        onChange={handleInputChange}
                        className="border rounded px-2 py-1"
                    />
                ) : (
                    <span>{userData.postalCode}</span>
                )}
            </div>
        </div>
    );
};

export default Bottom;
