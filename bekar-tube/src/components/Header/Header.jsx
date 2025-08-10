import { FaMicrophone } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import CreateMenu from "./CreateMenu";
import Logo from "./Logo";
import NotificationMenu from "./NotificationMenu";
import Search from "./Search";
import UserMenu from "./UserMenu";


const Header = () => {
    return (
        <header className="px-4 py-2  flex justify-between items-center">
            <div className=" flex items-center gap-5">
                <div className=" w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#3F3F3F] cursor-pointer">
                    <HiOutlineBars3 size={24} />
                </div>
                <Logo />
            </div>

            <div className="flex items-center gap-2.5">
                <Search />
                <div className="flex w-10 h-10 items-center bg-[#212121] justify-center 
                cursor-pointer rounded-full hover:bg-[#3F3F3F]">
                    <FaMicrophone size={24} />
                </div>
            </div>

            <div className=" flex gap-1 items-center ">
                <CreateMenu />
                <NotificationMenu />
                <UserMenu />
            </div>

        </header>
    )
}

export default Header;