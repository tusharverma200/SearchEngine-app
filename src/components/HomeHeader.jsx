import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
    return (
        <header className=" h-16 flex justify-between md:justify-end items-center gap-4 px-5 ">
            <div className="flex gap-4">
                <span className="textblack/[0.87] text-[13] line-height hover:underline cursor-pointer">
                    Qmail
                </span>
                <span className="textblack/[0.87] text-[13] line-height hover:underline cursor-pointer">
                    Images
                </span>
            </div>
            <ProfileIcon/>
        </header>
    );
};

export default HomeHeader;
