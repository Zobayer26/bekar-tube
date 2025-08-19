import { BsThreeDotsVertical } from "react-icons/bs";
import { Content } from "../../data/ContentData";
const Recommended = () => {
    const { thumbnail, title, channel_name, views, create_date } = Content[0]
    return (
        <div className="">
            <div className="flex items-center gap-x-2.5">
                <p>all</p>
                <p>baul</p>
                <p>gopal</p>
                <p>folk</p>
            </div>
            <div className="h-auto w-auto cursor-pointer flex items-start gap-x-2.5">
                <div className=" min-w-[168px] h-24">
                    <img
                        src={thumbnail}
                        alt="youtube_thumbnail"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>

                <div className="">
                    <h3 className="h-auto overflow-hidden text-xs">{title}</h3>
                    <p>{channel_name}</p>
                    <p>{views} . <span>{create_date}</span></p>
                </div>
                <BsThreeDotsVertical size={36} />
            </div >
        </div>
    )
}
export default Recommended