import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import thmubnail from "../../assets/youtube.jpg";


const ContentCard = () => {
    return (
        <div className="h-auto w-auto cursor-pointer">
            <div className="">
                <img
                    src={thmubnail}
                    alt="youtube_thumbnail"
                    className=" w-full h-full rounded-md bg-cover bg-no-repeat bg-center"
                />
            </div>
            <div className=" flex items-start gap-x-2.5 mt-2.5">
                <div className="w-9 h-9">
                    <FaCircleUser size={36} />
                </div>
                <div className="grow">
                    <h3>Don&apos;t WASTE Your Time.. Learn to Code the RIGHT Way!</h3>
                    <p>Web Developete</p>
                    <p>1.2M views . <span>2 years ago</span></p>
                </div>
                <BsThreeDotsVertical />
            </div>
        </div>
    )
}

export default ContentCard