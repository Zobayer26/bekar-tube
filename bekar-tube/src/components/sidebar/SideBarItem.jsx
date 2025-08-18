import PropTypes from "prop-types"
export default function SideBarItem({ item: { title, icon: Icon } }) {

    return (
        <div className={`w-[195px] h-10 flex items-center gap-x-5 px-3 rounded-md hover:bg-[#3F3F3F] cursor-pointer`}>
            <div>
                <Icon size={24} />
            </div>

            <h1 className="capitalize font-medium text-[16px] whitespace-nowrap tracking-tight ">
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