import { TbGridDots } from "react-icons/tb";
import logo from "../assets/1.png"
import Profile from "../assets/gmail.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
    return (
        <div className="flex gap-2">
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05] ">
                <TbGridDots size={20} color="#5f6368" />
            </span>
            <span className="h-10 w-10 relative flex justify-center items-center  " >
              
                <span className="h-8 w-8 rounded-full overflow-hidden ">
                    <img src={logo} className="h-120 w-100 object-cover " />
                </span>
            </span>
        </div>
    );
};

export default ProfileIcon; 
