import NavBar from "../components/landingcomponents/navbar";
import satr1 from '../../../public/star1.png'
import star2 from '../../../public/star2.png'
import curl from  '../../../public/curl.png'
import light from '../../../public/light.png'
import book from '../../../public/book.png'
import LandingCards from "../components/landingcomponents/landingcards";
import TrendingBooks from "../components/landingcomponents/trending";
import Footer from "../components/landingcomponents/footer";

const LandingPage = () => {
    return (
        <div className="flex flex-col bg-white">
            <NavBar/>
            <div className="absolute w-[225px] h-[171px] mt-[100.77px] ml-[757px] rotate-[-24.07deg] ">
                <img src={satr1.src} alt="" />
            </div>
            <div className="flex flex-col w-[500px] mt-40 p-8 flex-wrap">
                <h1 className="text-[40px] font-semibold">Welcome To ReadShare!</h1>
                <h3 className="text-[30px] font-semibold">Your gateway to affordable and accessible books in Ethiopia</h3>
                <div className="w-[490.21px] h-[37.37px] border-3 border-[#746FFA] rotate-[-2.27deg]"></div>
                {/* <div className="relative w-[490.21px] h-[37.37px]">
                    <div className="absolute w-[490.21px] h-[37.37px] border-3 border-[#746FFA] rotate-[-2.27deg] "></div>
                </div> */}
            </div>
            <div className="absolute w-[130px] h-[139px] ml-[1270.2px] mt-[285px] rotate-[37.8deg]"><img src={curl.src} alt="" /></div>
            <div className="absolute w-[815px] h-[461px] ml-[652px] mt-[320px]"><img src={book.src} alt="" /></div>
            <div className="absolute w-[114px] h-[142px] ml-[606px] mt-[515px]"><img src={star2.src} alt="" /></div>
            <div className="absolute w-[177px] h-[173px] ml-[56.65px] mt-[553.62px]"> <img src={light.src} alt="" /></div>
            <div className="w-[616px] h-[576px] bg-[#EDE5DA] ml-[900px] mt-[-23%] mb-[50%] rounded-tl-[250px] rounded-tr-none rounded-br-none rounded-bl-none"></div>
            <div className="flex flex-row p-[10px] gap-[10px] justify-center absolute ml-[571px] mt-[821px] h-[68px] w-[366px] text-[40px] font-semibold"> Our Services</div>
            <LandingCards/>
            <TrendingBooks/>
            <Footer/>
            
        </div>
    );
}

export default LandingPage;