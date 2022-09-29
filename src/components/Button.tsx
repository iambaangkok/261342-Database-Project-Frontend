import '../css/Button.css'

type ButtonProps={
    text:string,
}

function Button({text}:ButtonProps) {

    return (
        <div className='Button ES-hover-drop-shadow-1'>
            {text}
        </div >
    )
}

export default Button