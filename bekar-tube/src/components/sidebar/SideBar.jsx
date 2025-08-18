import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Explore, LibraryMenu, MoreOptions, Settings, SidebarMenu, SubscriptionItems, shortSidebarMenu } from "../../data/SidebarMenuData";
import Footer from "./Footer";
import SideBarItem from "./SideBarItem";

import PropTypes from "prop-types";
const SideBar = ({ showSideBar }) => {

    return (
        <aside className="h-[calc(100vh-100px)] sticky top-14.5 left-0">
            {
                showSideBar ? (
                    <div className={`max-w-[240px] flex flex-col 
                    px-3 pb-3 overflow-y-scroll scroll-smooth`}>
                        <div>
                            {SidebarMenu.map((item) => (
                                <SideBarItem key={item.id} item={item} showSideBar={showSideBar} />
                            ))}
                        </div>

                        <hr className=" text-secondary" />

                        <div>
                            <div className=" h-10 px-3 flex items-center rounded-md hover:bg-[#3F3F3F] cursor-pointer">

                                <h1 className="capitalize font-medium flex items-center gap-x-2.5">
                                    You
                                    <span> < MdOutlineKeyboardArrowRight /></span>
                                </h1>

                            </div>
                            {LibraryMenu.map((item) => (
                                <SideBarItem key={item.id} item={item} />
                            ))}
                        </div>

                        <hr className="text-secondary" />

                        <div>
                            <h1 className="capitalize font-medium px-3">
                                Subscriptions
                            </h1>
                            {SubscriptionItems.map((item) => (
                                <SideBarItem key={item.id} item={item} />
                            ))}
                            <SideBarItem
                                item={{ title: "show more", icon: IoIosArrowDown }}
                            />
                        </div>

                        <hr className="text-secondary" />

                        <div>
                            <h1 className="capitalize font-medium px-3">
                                Explore
                            </h1>
                            {Explore.map((item) => (
                                <SideBarItem key={item.id} item={item} />
                            ))}
                        </div>

                        <hr className="text-secondary" />

                        <div>
                            <h1 className="font-medium  ml-3 mb-1">
                                More from YouTube
                            </h1>
                            {MoreOptions.map((item) => (
                                <SideBarItem key={item.id} item={item} />
                            ))}
                        </div>

                        <hr className="text-secondary" />

                        <div>
                            {Settings.map((item) => (
                                <SideBarItem key={item.id} item={item} />
                            ))}
                        </div>

                        <hr className="text-secondary" />

                        <Footer />

                    </div >
                ) : (
                    <div className="px-1">
                            {shortSidebarMenu .map(({ id, icon: Icon, title }) => (
                            <div key={id}
                                className={`flex w-16 pt-4 pb-3.5 flex-col justify-center items-center  py-1 rounded-md hover:bg-[#3F3F3F] cursor-pointer`}>
                                <div>
                                    <Icon size={24} />
                                </div>
                                <h1 className=" w-full text-center capitalize font-medium text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                                    {title}
                                </h1>
                            </div>
                        ))}
                    </div>
                )
            }

        </aside>

    )
}

export default SideBar

SideBar.propTypes = {
    showSideBar: PropTypes.bool
}