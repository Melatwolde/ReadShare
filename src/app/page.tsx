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
import HomePage from "./Homepage/homepage";
import Book_Description from "./About_the_book/Book_Description";
import Reading_Page from '../app/Reading_Page/Reading_Page';
import Group_Card from "./Discover_Groups/group_card";
import Signup from '../app/auth/signup';
import Login from "./auth/Login";
import Group_Creation from "./components/POP_UP/group_creation";
import CostomizeGroup from "./components/POP_UP/group_customize";
import Group_Get_Started from "./components/POP_UP/group_get_started";
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
    <Reading_Page/>
    {/* <Group_Card/> */}
    {/* <Group_Creation/> */}
    {/* <CostomizeGroup/> */}
    {/* <Group_Get_Started/> */}
   </main>
  );
}
