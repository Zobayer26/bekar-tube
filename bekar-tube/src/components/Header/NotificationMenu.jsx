import { IoIosNotifications } from "react-icons/io";

const NotificationMenu = () => {
    return (
        <div className="w-10 h-10 flex justify-center items-center 
        rounded-full hover:bg-[#3F3F3F] cursor-pointer">
            <IoIosNotifications size={24} />
        </div>
    )
}
export default NotificationMenu;