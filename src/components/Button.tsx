import '../css/Button.css'
import Icon from './Icon'

type ButtonProps = {
    text: string,
    icon: string
    buttonColor: "white" | "black" | "yellow" |"whiteBorder",
    textColor: "white" | "black" | "yellow" | "gray",
}

function Button({ text, icon, buttonColor, textColor }: ButtonProps) {
    return (
        <div className={"Button Button-" + buttonColor}>
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