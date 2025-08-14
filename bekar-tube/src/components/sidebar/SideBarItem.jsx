import PropTypes from "prop-types"
export default function SideBarItem({ item: { title, icon: Icon } }) {

    return (
        <div className=" h-10 px-3 flex gap-5 items-center rounded-xl hover:bg-[#3F3F3F] cursor-pointer w-full">
            <div>
                <Icon size={24} />
            </div>
            <h1 className="capitalize font-medium">
                {title}
            </h1>
        </div>
    )
}

SideBarItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired
    })
}