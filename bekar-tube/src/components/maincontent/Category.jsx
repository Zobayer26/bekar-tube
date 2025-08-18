import PropTypes from "prop-types"
export default function Category({ item: { title }, onSelect }) {

    return (
        <div onClick={() => { onSelect(title) }}
            className="bg-[#3F3F3F] px-2 py-0.5 rounded-md  flex items-center justify-center cursor-pointer">
            <h2 className="w-auto whitespace-nowrap">{title}</h2>
        </div>
    )
}

Category.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,

    }),
    onSelect: PropTypes.func
}