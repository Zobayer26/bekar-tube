import { useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { HiDotsHorizontal, HiDownload } from "react-icons/hi";
import { HiOutlineScissors } from "react-icons/hi2";
import { MdOutlinedFlag } from "react-icons/md";
import { PiShareFatThin } from "react-icons/pi";
import { useParams } from "react-router-dom";
import Button from "../Button";
import Comments from "../Comments";
import Modal from "../Modal";
const VideoPlayer = () => {
    let { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    return (
        <section className=" w-full">
            <iframe
                width="1236"
                height="695"
                src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                title="Bhalobasar Mess | Arnob | Prateek Kuhad | Backstage Cover # 171"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            <div>
                <h1 className=" text-xl text-[#F1F1F1]">
                    EPISODE 11 | Bachelor Point | S5 | Kabila | Habu | Pasha | Shimul |
                    Kajal Arefin Ome | Boom Films
                </h1>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-emerald-400 mr-3 flex items-center justify-center">
                            a
                        </div>
                        <div className="mr-6">
                            <h4 className=" text-[#F1F1F1]">channel name</h4>
                            <p className=" text-[12px] text-[#AAAAAA]">subscribe count</p>
                        </div>
                        <button className=" px-2 py-1 rounded-2xl bg-[#F1F1F1] text-[#000] font-medium  capitalize">
                            subscribe
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button>
                            <BiLike />
                            <p className=" border-r pr-2">50k</p>
                            <BiDislike />
                        </Button>
                        <Button>
                            <PiShareFatThin />
                            <p>share</p>
                        </Button>
                        <Button>
                            <HiDownload />
                            <p>download</p>
                        </Button>
                        <Button>
                            <HiOutlineScissors />
                            <p>clip</p>
                        </Button>

                        <button
                            onClick={() => setShowModal(!showModal)}
                            className="flex items-center justify-center w-9 h-9 bg-[#282828] relative
                       rounded-full hover:bg-[#3F3F3F]"
                        >
                            <HiDotsHorizontal />
                            {showModal && (
                                <Modal style="top-10 left-0 w-auto capitalize">
                                    <span className="flex items-center px-3 hover:bg-[#3F3F3F] gap-1.5 ">
                                        <CiBookmark />
                                        <p>save</p>
                                    </span>
                                    <span className="flex items-center px-3 hover:bg-[#3F3F3F] gap-1.5">
                                        <MdOutlinedFlag />
                                        <p>report</p>
                                    </span>
                                </Modal>
                            )}
                        </button>
                    </div>
                </div>
                <div className=" px-2 py-2 rounded-md bg-[#282828] mt-3">
                    <p>
                        8.1M views 8 months ago #গোপালভাঁড় #funtimewithgopal #gopalbhar
                    </p>
                    <p>Click here to Subscribe to SONY AATH Channel: / @sonyaath</p>
                    <p>description</p>
                </div>
                <Comments videoId={id} />
            </div>
        </section>
    );
};

export default VideoPlayer;
