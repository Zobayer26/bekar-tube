import PropTypes from "prop-types";
import { useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaCircleUser } from "react-icons/fa6";
import { GrEmoji } from "react-icons/gr";
import { HiDotsVertical } from "react-icons/hi";
import { MdSort } from "react-icons/md";
import useComments from "../hooks/useComments";

const Comments = ({ videoId }) => {
    const [show, setShow] = useState(false)
    const [text, setText] = useState("")
    const comments = useComments(videoId)

    console.log(comments)

    const handleCommentSubmit = () => {
        console.log(text)
    }
    return (
        <section>
            <div className=" mt-8 mb-9">
                <div className="flex gap-x-7.5 mb-5">
                    <h3 className=" text-xl text-[#f1f1f1]">2365 Comments</h3>
                    <button className="flex items-center">
                        <MdSort size={24} />
                        <p>Sort by</p>
                    </button>
                </div>
                <div className="flex gap-x-2.5">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border">
                        <FaCircleUser />
                    </div>
                    <div
                        className="grow">
                        <input
                            onClick={() => setShow(true)}
                            className=" w-full border-b outline-none"
                            placeholder="Add comments"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        {
                            show &&
                            <div className=" w-full flex justify-between pt-2">

                                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#3F3F3F] cursor-pointer">
                                    <GrEmoji size={24} />
                                </button>

                                <div className="flex gap-x-2.5">

                                    <button className="px-3 py-0.5 rounded-3xl hover:bg-[#3f3f3f] capitalize cursor-pointer"
                                        onClick={() => setShow(false)}>
                                        cancel
                                    </button>

                                    <button
                                        onClick={() => {
                                            text ? handleCommentSubmit() : ""
                                        }}
                                        className={`px-3 py-0.5 rounded-3xl bg-[#282828] ${text ? "bg-blue-400 cursor-pointer" : ""}`}>
                                        Comments
                                    </button>
                                </div>

                            </div>
                        }

                    </div>
                </div>
            </div>
            <div>
                {comments.map(({
                    author,
                    authorImage,
                    text,
                    likeCount,
                    publishedAt }, index) => (
                    <div key={index}
                        className=" flex items-start gap-x-2.5 mb-5">
                        <div className="w-10 h-10 shrink-0">

                            <img
                                src={authorImage}
                                alt="author_image"
                                className=" w-full h-auto rounded-full bg-cover bg-center"
                            />
                        </div>
                        <div className="grow px-1 text-sm">
                            <h4 className="">{author} {publishedAt}</h4>
                            <p className=" ">{text} </p>
                            <div className="flex gap-2.5 items-center">
                                <p className="flex gap-1 items-start"><BiLike /> <span>{likeCount}</span></p>
                                <BiDislike />
                                <p className="ml-2 cursor-pointer">Reply</p>
                            </div>

                        </div>
                        <span>
                            <HiDotsVertical size={24} />
                        </span>
                    </div>
                )

                )}
            </div>
        </section>
    )
}

export default Comments

Comments.propTypes = {
    videoId: PropTypes.string
}