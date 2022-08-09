import './Button.css' 

const Button = (props) => {
    return (
        <button className='button'>
            <label>{props.label}</label>
        </button>
    )
}

export default Button;