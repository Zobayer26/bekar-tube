import PropTypes from "prop-types"

const Modal = ({ children, style }) => {
    return (
        <div className={`bg-[#282828] rounded-md py-2 absolute ${style} `}>
            {children}
        </div>
    )
}

export default Modal

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.string
}