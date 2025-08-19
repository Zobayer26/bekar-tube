import PropTypes from "prop-types"

const Button = ({ children}) => {
    return (
        <button className="flex  items-center gap-x-2 px-2 py-1 text-sm rounded-2xl bg-[#282828] hover:bg-[#3F3F3F]
         font-medium  capitalize">
            {children}
        </button>
    )
}

export default Button

Button.propTypes = {
    children: PropTypes.node
}