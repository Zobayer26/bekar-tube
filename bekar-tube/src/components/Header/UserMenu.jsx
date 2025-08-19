import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { profileMenuModal } from "../../data/ModalData";
import Modal from "../Modal";

const UserMenu = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div onClick={() => setShowModal(!showModal)}
            className=" relative w-16 h-8.5 p-1 cursor-pointer">
            <FaCircleUser size={32} />
            {showModal &&
                <Modal
                    style="top-10 right-0 w-[300px]"
                >
                    {profileMenuModal.map(({ id, icon: Icon, title,action }) => (
                        <div key={id}
                        onClick={action}
                            className=" h-10 px-5 flex gap-5 items-center hover:bg-[#3F3F3F] cursor-pointer w-full" >
                            <div>
                                <Icon size={24} />
                            </div>
                            <h1 className="capitalize font-normal text-sm">
                                {title}
                            </h1>
                        </div>
                    ))}
                    <hr />
                </Modal>
            }
        </div>
    )
}

export default UserMenu;