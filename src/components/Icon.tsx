import { BsPersonFill } from 'react-icons/bs'
import { BiSearch, BiCart } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { IoIosClose, IoMdCloseCircleOutline } from 'react-icons/io'
import '../css/Icon.css'
// import arrow_ios_back from '../icons/arrow ios back.svg'
// import arrow_ios_forward from '../icons/arrow ios forward.svg'

// import person from '../icons/person.svg'
// import search_outline from '../icons/search outline.svg'
// import shopping_cart_outline from '../icons/shopping cart outline.svg'


type IconProps = {
    type: string,
    iconColor: "white" | "black" | "yellow" | "gray" | "red"
}

function Icon({ type, iconColor }: IconProps) {
    var ico;
    var trueIconColor : string = iconColor;
    if(iconColor === "yellow"){
        trueIconColor = "var(--c-yellow)";
    }

    switch (type) {
        case "arrow_back":
            ico = <IoChevronBack className="InnerIcon" fill={trueIconColor} stroke={trueIconColor} size="100%"></IoChevronBack>
            break;
        case "arrow_forward":
            ico = <IoChevronForward className="InnerIcon" fill={trueIconColor} stroke={trueIconColor} size="100%"></IoChevronForward>
            break;
        case "person":
            ico = <BsPersonFill className="InnerIcon" fill={trueIconColor} stroke={trueIconColor} size="100%"></BsPersonFill>
            break;
        case "search_outline":
            ico = <BiSearch className="InnerIcon" fill={trueIconColor} stroke={trueIconColor} size="100%"></BiSearch>
            break;
        case "shopping_cart_outline":
            ico = <BiCart className="InnerIcon" fill={trueIconColor} stroke={trueIconColor} size="100%"></BiCart>
            break;
        case "outline_plus":
            ico = <AiOutlinePlus className="InnerIcon" fill={trueIconColor} stroke={trueIconColor} size="100%"></AiOutlinePlus>
            break;
        case "remove":
            ico = <IoIosClose className="InnerIcon" fill={trueIconColor} stroke={trueIconColor} size="100%"></IoIosClose>
            break;
        case "Close":
            ico = <IoMdCloseCircleOutline className="InnerIcon" fill={trueIconColor} stroke={trueIconColor} size="100%"></IoMdCloseCircleOutline>
            break;
    }



    return (
        <div className={"Icon Icon-" + iconColor}>
            {ico}
        </div >
    )
}

export default Icon