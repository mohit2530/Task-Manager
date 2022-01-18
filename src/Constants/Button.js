import PropTypes from 'prop-types'



export default function Button({ buttonText, headerButtonColor, onClick }) {

    return <button
        className='btn'
        onClick={onClick}
        style={{ backgroundColor: headerButtonColor }}
    > {buttonText}</button>
}

Button.defaultProps = {
    buttonText: 'Add Task',
    headerButtonColor: 'green',
}


Button.prototypes = {
    buttonText: PropTypes.string.isRequired,
    headerButtonColor: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}