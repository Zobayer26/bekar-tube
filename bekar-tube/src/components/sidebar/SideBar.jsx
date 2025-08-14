import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Explore, LibraryMenu, MoreOptions, Settings, SidebarMenu, SubscriptionItems } from "../../data/SidebarMenuData";
import Footer from "./Footer";
import SideBarItem from "./SideBarItem";
const SideBar = () => {
    return (
        <div className="max-w-[240px] w-full h-screen flex flex-col gap-[15px] overflow-y-scroll scroll-smooth">
            <div className="px-3 ">
                {SidebarMenu.map((item) => (
                    <SideBarItem key={item.id} item={item} />
                ))}
                <hr className="mt-[15px] text-secondary" />
            </div>
            <div className="px-3 ">
                <div className="w-[180px] h-10 px-3 flex items-center rounded-2xl hover:bg-[#3F3F3F] cursor-pointer">

                    <h1 className="capitalize font-medium flex items-center gap-2.5">
                        You
                        <span> < MdOutlineKeyboardArrowRight /></span>
                    </h1>

                </div>
                {LibraryMenu.map((item) => (
                    <SideBarItem key={item.id} item={item} />
                ))}
            </div>
            <hr className="text-secondary" />
            <div className="px-3 ">
                <h1 className="capitalize font-medium px-3">
                    Subscriptions
                </h1>
                {SubscriptionItems.map((item) => (
                    <SideBarItem key={item.id} item={item} />
                ))}
                <SideBarItem item={{ title: "show more", icon: IoIosArrowDown }} />
            </div>
            <hr className="text-secondary" />
            <div className="px-3 ">
                <h1 className="capitalize font-medium px-3">
                    Explore
                </h1>
                {Explore.map((item) => (
                    <SideBarItem key={item.id} item={item} />
                ))}
            </div>
            <hr className="text-secondary" />
            <div className="px-3 ">
                <h1 className="font-medium px-3 mb-1">
                    More from YouTube
                </h1>
                {MoreOptions.map((item) => (
                    <SideBarItem key={item.id} item={item} />
                ))}
            </div>
            <hr className="text-secondary" />
            <div className="px-3 ">
                {Settings.map((item) => (
                    <SideBarItem key={item.id} item={item} />
                ))}
            </div>
            <hr className="text-secondary" />
            <Footer />
        </div>

    )
}

export default SideBar