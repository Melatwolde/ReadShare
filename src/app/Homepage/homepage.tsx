'use client';
import Logo from '../../../public/logo.png';
import MainPage from '../components/Mainpage_component/mainpage';
import BookCards from '../components/homepage_component/bookcards';
import DiscoverbookClubs from '../components/homepage_component/discoverclubs';
import UpcomingEvents from '../components/homepage_component/eventscard';
import NewlyReleasedCards from '../components/homepage_component/newlyreleasedcards';

const HomePage = () => {
    return (
        <div>
            <MainPage>
                <div className='flex flex-row gap-12'>
                    <div className='flex flex-row  h-[470px]'>
                        <BookCards/>
                    </div>
                    <div className='mr-36'>
                        <DiscoverbookClubs/>
                    </div>
                </div>
                <div className='ml-[950px] -mb-20 -mt-[130px] '><NewlyReleasedCards/></div>
                <div className=' -mt-[480px]'>
                    <UpcomingEvents/>
                </div>
                
            </MainPage>
        </div>
    );
};
export default HomePage;