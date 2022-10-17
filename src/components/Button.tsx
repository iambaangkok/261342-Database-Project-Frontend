import '../css/Button.css'
import Icon from './Icon'

type ButtonProps = {
    text: string,
    icon: string
    buttonColor: "white" | "black" | "yellow" |"whiteBorder",
    textColor: "white" | "black" | "yellow" | "gray"| "red",
    func: Function,
}

function Button({ text, icon, buttonColor, textColor, func}: ButtonProps) {
    return (
        <div className={"Button Button-" + buttonColor}
            onClick={() => {func()}}>
            {icon !== "" ? 
                <Icon type={icon} iconColor={textColor}></Icon> 
            :""}

            {text !== "" ?
                <div className={"Text Text-" + textColor}>
                    {text}
                </div>
            : "" }
        </div >
    )
}

export default Button