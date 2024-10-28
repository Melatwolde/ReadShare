'use client';
import fall from '../../../../public/Fall.png'
const DiscoverbookClubs = () => {
    function ClubsData(
        Group_Profile: string,
        Club_Name: string,
        Members: string,
        Join :string
        
    ) {
        return {Group_Profile, Club_Name, Members, Join};
    }
    const Data = [
        ClubsData(fall.src, 'Book Club 1', '10 Members', 'Join'),
        ClubsData(fall.src, 'Book Club 2', '15 Members', 'Join'),
        ClubsData(fall.src, 'Book Club 2', '15 Members', 'Join'),
        
    ];
    
    return(
        <div className='mr-12 flex flex-col gap-9 p-5 w-[400px] h-[342px]  top-[72px] bg-white rounded-[15px]'>
            <div className='flex flex-row gap-10'>
                <h1 className='font-[500px] text-[22px] text-[#403f3f]'>Discover Book Clubs</h1>
                <h6 className='w-[38px] h-[15px] font-[400px] text-[12px] text-[#343434] mt-2 ml-9'>see all</h6>
            </div>
            <div className='flex flex-col gap-4'>{Data.map((club, index) => (
                <div key={index} className='flex flex-row w-[357px] h-[88=03px] gap-6'>
                    <img className='w-[72px] h-[68.03px] rounded-[20px]' src={fall.src} alt="" />
                    <div className='felx flex-col mt-2'>
                        <h1 className='w-[129px] h-[24px] font-semibold text-[20px] text-[#343434]'>{club.Club_Name}</h1>
                        <h6 className='text-[16px] text-[#343434] font-light'>{club.Members}</h6>
                        
                    </div>
                    <button className='flex justify-center items-center p-[10px] w-[52px] h-[39px] mt-2 ml-10 text-black border border-[#000000] rounded-[15px] shadow-md'>{club.Join}</button>
                </div>
                ))}
            </div>
            
        </div>
    )
};
export default DiscoverbookClubs;

