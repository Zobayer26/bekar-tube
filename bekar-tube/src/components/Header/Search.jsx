import { RiSearchLine } from "react-icons/ri";

const Search = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click")
    }

    return (
        <div className="w-[640px]">
            <form onSubmit={handleSubmit} className="flex" >
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full border border-secondary rounded-l-[40px] outline-none py-2 pl-4 
                    focus:border-blue-500"
                />
                <button type="submit"
                    className="w-16 flex py-2 pl-4 justify-center items-center bg-[#212121] 
                     cursor-pointer rounded-r-[40px] border border-secondary  border-l-0" >
                    <RiSearchLine size={24} />
                </button>
            </form>

        </div>
    )
}

export default Search