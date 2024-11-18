'use client';
import location from '../../../../public/icons/location.svg'
const UpcomingEvents = () => {
    function EventData(
        Date: string,
        Month: string,
        Event_Name: string,
        Location: string,
        Time: string
    ) {
        return { Date, Month, Event_Name, Location, Time };
    }

    const Data = [
        EventData('08', 'August', 'Paris Readers', '4 killo Abrhot', '4:30LT - 6:30LT'),
        EventData('20', 'September', 'Tizeta Book review ', 'killo Abrhot', '4:30LT - 6:30LT'),
        EventData('12', 'October', 'Tizeta Book review', 'killo Abrhot', '4:30LT - 6:30LT'),
        EventData('16', 'November', 'Jano Books', 'killo Abrhot', '4:30LT - 6:30LT'),
        EventData('05', 'January', 'Anbebu Summit', 'killo Abrhot', '4:30LT - 6:30LT'),
        EventData('06', 'January', 'Tizeta Book review', 'killo Abrhot', '4:30LT - 6:30LT'),
    ];

    return (
        <div className="mt-6">
            <div className="mb-4">
                <h1 className="text-2xl font-medium">Upcoming Events From The Community</h1>
            </div>
            <div className="flex flex-row gap-[20px] w-[930px] h-[320px] overflow-x-auto whitespace-nowrap hide-scrollbar">
                {Data.map((event, index) => (
                    <div key={index} className="inline-block flex-col border p-4 rounded-lg shadow-md bg-[#CCCBE9] h-[319px] w-[380px] ">
                        <div className="flex flex-col mt-8 ">
                            <div className="ml-2 text-[60px] font-normal leading-[73px] text-[#343434] w-[87px] h-[73px] font-inter">{event.Date}</div>
                            <div className="ml-2 text-xl -mt-[2px] text-[#343434] text-[24px]">{event.Month}</div>
                        </div>
                        <div className="mt-20 content-start p-0 gap-x-[6px] gap-y-[7px] w-[215px] h-[83px] left-[17px] top-[205px] z-0">
                            <div className="text-2xl font-[400px] text-[22px] text-[#343434]">{event.Event_Name}</div>
                            <div className='flex flex-row gap-4'>
                                <div className="text-[#343434] font-normal text-[18px]">{event.Location}</div>
                                <div className=""><img src={location.src} alt="Location Icon" /></div>
                            </div>
                            <div className="text-[#343434]">{event.Time}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingEvents;