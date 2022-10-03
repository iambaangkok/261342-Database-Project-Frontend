import '../css/Button.css'
import Icon from './Icon'

type ButtonProps = {
    text: string,
    icon: string
    buttonColor: "white" | "yellow",
    textColor: "black" | "yellow",
}

function Button({ text, icon, buttonColor, textColor }: ButtonProps) {
    return (
        <div className={"Button Button-" + buttonColor}>
            {text !== "" && icon !== "" ?
                <div>
                    <Icon type={icon} iconColor={textColor}></Icon>
                    <div className={"Text Text-" + textColor}>
                        {text}
                    </div>
                </div> :
                text !== "" ?
                <div>
                    <div className={"Text Text-" + textColor}>
                        {text}
                    </div>
                </div> :
                <div>
                    <Icon type={icon} iconColor={textColor}></Icon>
                </div>
            }
        </div >
    )
}

export default Button