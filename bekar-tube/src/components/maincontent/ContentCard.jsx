import PropTypes from "prop-types";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ContentCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { thumbnail, channel_icon: Icon, title, channel_name, views, create_date, id } = item;

    return (
        <div onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="h-auto w-auto cursor-pointer">

            <div>
                {!isHovered ? (
                    <img
                        src={thumbnail}
                        alt="youtube_thumbnail"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <iframe
                        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=0`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                )}
            </div>

            <div className=" flex items-start gap-x-2.5 mt-2.5">
                <div className="w-9 h-9">
                    <Icon size={36} />
                </div>
                <div className="grow">
                    <h3>{title}</h3>
                    <p>{channel_name}</p>
                    <p>{views} . <span>{create_date}</span></p>
                </div>
                <BsThreeDotsVertical />
            </div>
        </div >
    )
}

export default ContentCard

ContentCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        channel_icon: PropTypes.elementType,
        thumbnail: PropTypes.elementType,
        title: PropTypes.string.isRequired,
        channel_name: PropTypes.string.isRequired,
        views: PropTypes.string.isRequired,
        create_date: PropTypes.string.isRequired
    })
}