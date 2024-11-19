'use client';
import nofile from '../../../../public/nofile.png';
import { useRef } from 'react';

const Uploaded = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const selectedFile = files[0];
            console.log('Selected file:', selectedFile);
        }
    };

    return (
        <div className="w-[1280px] h-[400px] mt-20 rounded-bl-[25px] rounded-br-[25px] rounded-tl-[0px] rounded-tr-[0px] bg-white">
            <div className="-mt-16">
                <img src={nofile.src} alt="" className="ml-[500px] w-[280px] h-[280px] -mt-4" />
            </div>
            <div className="flex flex-col items-center -mt-10 gap-1">
                <div className="text-[28px]">There is no Items here!</div>
                <div className="text-[18px] text-[#545454]">Start sharing your book now</div>

                {/* Hidden file input element */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    accept=".pdf,.epub" 
                />

                <button
                    className="bg-[#F7F3EF] rounded-[25px] w-[163px] h-[56px] mt-3"
                    onClick={handleUploadClick}
                >
                    Upload book
                </button>
            </div>
        </div>
    );
};

export default Uploaded;
