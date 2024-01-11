import Logo from "../assets/logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import HeaderLogo from "../assets/header.jpg"
const Home = () => {
    return <div className="flex h-[100vh] flex-col"  style={{
        backgroundImage: "url('https://images.pexels.com/photos/205321/pexels-photo-205321.png?auto=compress&cs=tinysrgb&w=600')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
    }}>
        <HomeHeader/>
        <main className="grow flex justify-center">
            <div className="w-full px-5 flex flex-col items-center mt-44">
                <img src={Logo} alt="" className="w-[172px] md:w-[272px] mb-8" />
                <SearchInput/>
             <div className="flex gap-2 text-[#3c4043] mt-8">
                <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                    Google Search
                </button>
                <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                    I'm Feeling Lucky
                </button>
             </div>
            </div>
        </main>
        <Footer/>
    </div>
};

export default Home;
