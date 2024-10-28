'use client';
import signimage from '../../../public/signimage.png'
const Signup= () => {
    return(
        <div className='fixed flex flex-row'>
            <div className='w-[678px] h-[1024px]'>
                <img src={signimage.src} alt="" className='mt-[90px] ml-[150px] w-[424px] h-[530px] '/>
            </div>
            <div className='bg-white w-[1078px] h-[1024px] ml-10 pt-14 pl-20'>
                <h1 className = 'w-[413px] h-[68px] font-normal text-[56px] ml-14'>Create Account</h1>
                <h1 className=' w-[500px] h-[24px] font-normal text-[20px] text-[#343434] mt-5 ml-[74px]'>Don’t you have account? No worries!</h1>
                <div className='flex flex-col mt-12 gap-3 ml-2'>
                    <input type="text" placeholder="Name" className="flex flex-row content-center w-[506px] h-[72px] pl-[10px] pr-[385px] pt-[10px] p-[21px] bg-[#F3F9F7] rounded-[15px] text-[20px] font-normal text-[#3D3C3C]"/>
                    <input type="email" placeholder="Email" className="flex flex-row content-center w-[506px] h-[72px] pl-[10px] pr-[385px] pt-[10px] p-[21px] bg-[#F3F9F7] rounded-[15px] text-[20px] font-normal text-[#3D3C3C]"/>
                    <input type="password" placeholder="Password" className="flex flex-row content-center w-[506px] h-[72px] pl-[10px] pr-[385px] pt-[10px] p-[21px] bg-[#F3F9F7] rounded-[15px] text-[20px] font-normal text-[#3D3C3C]"/>
                   
                </div>
                <button className='mt-5 bg-[#F7F3EF] rounded-[15px] w-[106px] h-[51px] items-center ml-96 shadow-custom'>Sign Up</button>
                <div className="absolute w-[193px] h-[172px] left-[-28px] top-[884px] bg-[#F45507] opacity-[0.88] filter blur-[125px] -mt-72"></div>
            </div>
        </div>
    )
}
export default Signup