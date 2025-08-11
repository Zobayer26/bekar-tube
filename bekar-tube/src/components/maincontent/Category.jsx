import PropTypes from "prop-types"

export default function Category({ item: { title } }) {
    return (
        <div className=" bg-[#3F3F3F] px-2 py-1 rounded-lg">
            {title}
        </div>
    )
}

Category.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
    })
}