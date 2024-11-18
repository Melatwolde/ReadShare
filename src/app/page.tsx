import Image from "next/image";
import NavBar from "./components/landingcomponents/navbar";
import LandingCards from "./components/landingcomponents/landingcards";
import Footer from "./components/landingcomponents/footer";
import TrendingBooks from "./components/landingcomponents/trending";
import LandingPage from "./landing/landingpage";
import BookCrards from "./components/homepage_component/bookcards";
import UpcomingEvents from "./components/homepage_component/eventscard";
import DiscoverbookClubs from "./components/homepage_component/discoverclubs";
import NewlyReleasedCards from "./components/homepage_component/newlyreleasedcards";
import MainPage from "./components/Mainpage_component/mainpage";
import HomePage from "./Homepage/page";
import Book_Description from "./About_the_book/page";
import Reading_Page from './Reading_Page/page';
import Group_Card from "./Discover_Groups/page";
import Signup from '../app/auth/signup';
import Login from "./auth/Login";
import Group_Creation from "./components/POP_UP/group_creation";
import CostomizeGroup from "./components/POP_UP/group_customize";
import Group_Get_Started from "./components/POP_UP/group_get_started";
import Comp from './components/Mainpage_component/comp'
import Top from '../app/components/Profile/topprofile'
import Bottom from "./components/Profile/bottom_profile";
import Bookmarks from "./components/Profile/bookmarks";
import User_Profile from "./User_profile/page";
import Uploaded from "./components/Profile/uploadedbooks";
import Bookmarkspage from "./Bookmarks/page";
import UploadedBooks from "./Uploaded_Books/page";
import File_Upload from './components/POP_UP/Fileupload'
export default function Home() {
  return (
   <main>
    
    {/* <NavBar /> */}
    {/* <LandingCards /> */}
    {/* <Footer/> */}
    {/* <TrendingBooks/> */}
    {/* <LandingPage/> */}
    {/* <BookCrards/> */}
    {/* <UpcomingEvents/> */}
    {/* <DiscoverbookClubs/> */}
    {/* <NewlyReleasedCards/> */}
    {/* <MainPage children={undefined} /> */}
    {/* <HomePage/> */}
    {/* <Book_Description/> */}
    {/* <Login/> */}
    {/* <Reading_Page/> */}
    {/* <Top/> */}
    {/* <Uploaded/> */}
    {/* <Bottom/> */}
    {/* <Bookmarks/> */}
    {/* <Group_Card/> */}
    {/* <Group_Creation/> */}
    {/* <CostomizeGroup/> */}
    {/* <Group_Get_Started/> */}
    {/* <Comp children={undefined}/> */}
    {/* <User_Profile/> */}
    {/* <Bookmarkspage/> */}
    {/* <UploadedBooks/> */}
    <File_Upload/>
   </main>
  );
}
