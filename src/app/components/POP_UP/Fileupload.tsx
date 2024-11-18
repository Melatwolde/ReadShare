'use client';
import cloud from '../../../../public/icons/cloud.svg'
import Image from 'next/image';
const File_Upload = () =>{
    return (
        <div className='bg-white w-[601px] h-[529px] mt-3 ml-4'>
            <div>File Upload</div>
            <div className="flex flex-row">
                <div className="bg-[#D9D9D9] w-[30px] h-[30px] rounded-full">1</div><div>2</div>
            </div>
            <div className="border-dashed text-gray-900 ">
                    <img src={cloud.src} alt="" />
                    <div>Drag and drop file or choose file</div>
            </div>
            <button>Upload</button>
        </div>
    )
}
export default File_Upload;