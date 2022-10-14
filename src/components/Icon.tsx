import {BsPersonFill} from 'react-icons/bs'
import {BiSearch, BiCart} from 'react-icons/bi'

import '../css/Icon.css'
// import arrow_ios_back from '../icons/arrow ios back.svg'
// import arrow_ios_forward from '../icons/arrow ios forward.svg'

// import person from '../icons/person.svg'
// import search_outline from '../icons/search outline.svg'
// import shopping_cart_outline from '../icons/shopping cart outline.svg'


type IconProps = {
    type: string,
    iconColor: "white" | "black" | "yellow" | "gray"
}

function Icon({ type, iconColor }: IconProps) {

    // var ico;

    // switch (type) {
    //     case "arrow_ios_back":
    //         ico = arrow_ios_back
    //         break;
    //     case "arrow_ios_forward":
    //         ico = arrow_ios_forward
    //         break;
    //     case "person":
    //         ico = <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M7.5 6.875C7.99445 6.875 8.4778 6.72838 8.88893 6.45368C9.30005 6.17897 9.62048 5.78853 9.8097 5.33171C9.99892 4.87489 10.0484 4.37223 9.95196 3.88728C9.8555 3.40232 9.6174 2.95687 9.26777 2.60723C8.91814 2.2576 8.47268 2.0195 7.98773 1.92304C7.50277 1.82657 7.00011 1.87608 6.54329 2.0653C6.08648 2.25452 5.69603 2.57495 5.42133 2.98608C5.14662 3.3972 5 3.88055 5 4.375C5 5.03804 5.26339 5.67393 5.73223 6.14277C6.20107 6.61161 6.83696 6.875 7.5 6.875Z" fill="black" />
    //             <path d="M11.25 13.125C11.4158 13.125 11.5747 13.0592 11.6919 12.9419C11.8092 12.8247 11.875 12.6658 11.875 12.5C11.875 11.3397 11.4141 10.2269 10.5936 9.40641C9.77312 8.58594 8.66032 8.125 7.5 8.125C6.33968 8.125 5.22688 8.58594 4.40641 9.40641C3.58594 10.2269 3.125 11.3397 3.125 12.5C3.125 12.6658 3.19085 12.8247 3.30806 12.9419C3.42527 13.0592 3.58424 13.125 3.75 13.125H11.25Z" fill="black" />
    //         </svg>
    //         break;
    //     case "search_outline":
    //         ico = search_outline
    //         break;
    //     case "shopping_cart_outline":
    //         ico = shopping_cart_outline
    //         break;
    // }

    var ico;

    switch (type) {
        case "arrow_ios_back":
            // ico = arrow_ios_back
            break;
        case "arrow_ios_forward":
            // ico = arrow_ios_forward
            break;
        case "person":
            ico = <BsPersonFill className="InnerIcon" fill={iconColor} size="100%"></BsPersonFill>
            break;
        case "search_outline":
            ico = <BiSearch className="InnerIcon" fill={iconColor} size="100%"></BiSearch>
            break;
        case "shopping_cart_outline":
            ico = <BiCart className="InnerIcon" fill={iconColor} size="100%"></BiCart>
            break;
    }

    

    return (
        <div className={"Icon Icon-" + iconColor}>
            {ico}
        </div >
    )
}

export default Icon