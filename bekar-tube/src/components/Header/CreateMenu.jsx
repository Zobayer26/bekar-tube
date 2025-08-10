import { IoMdAdd } from "react-icons/io";
const CreateMenu = () => {
    return (
        <div className="flex items-center rounded-2xl bg-[#212121] hover:bg-[#3F3F3F] py-1.5 px-2 gap-0.5 cursor-pointer">
            <IoMdAdd size={24} />
            <p className=" font-Roboto font-medium">Create</p>
        </div>
    )
}
export default CreateMenu;