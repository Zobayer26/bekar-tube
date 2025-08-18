import PropTypes from "prop-types";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const ContentCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { thumbnail, channel_icon: Icon, title, channel_name, views, create_date, id } = item;

    return (
        <Link to={`/video/${id}`}
            onMouseEnter={() => setIsHovered(true)}
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
                    <div className=" w-[400px] h-[400px]">
                        <iframe
                            src={`https://www.youtube.com/embed/${id}?autoplay=0&mute=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
  
                    </div>

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
        </Link >
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