import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { createMenuModal } from "../../data/ModalData";
import Modal from "../Modal";
const CreateMenu = () => {

    const [showModal, setShowModal] = useState(false)
    return (
        <div onClick={() => setShowModal(!showModal)}
            className="relative flex items-center rounded-2xl bg-[#212121] hover:bg-[#3F3F3F] py-1.5 px-2 gap-0.5 cursor-pointer">
            <IoMdAdd size={24} />
            <p className=" font-Roboto font-medium">Create</p>
            {showModal &&
                <Modal
                    style="top-10 left-0 w-[190px] "
                >
                    {
                        createMenuModal.map(({ id, icon: Icon, title }) => (
                            <div key={id}
                                className=" h-10 px-5 flex gap-5 items-center hover:bg-[#3F3F3F] cursor-pointer w-full" >
                                <div>
                                    <Icon size={24} />
                                </div>
                                <h1 className="capitalize font-medium">
                                    {title}
                                </h1>
                            </div>
                        ))
                    }
                </Modal>
            }
        </div>
    )
}
export default CreateMenu;