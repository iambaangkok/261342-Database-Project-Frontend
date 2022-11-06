import classiccars from '../images/classiccars.jpg';
import motorcycles from '../images/motorcycles.jpg';
import planes from '../images/planes.jpg';
import ships from '../images/ships.jpg';
import trains from '../images/trains.jpg';
import trucksandbuses from '../images/trucksandbuses.jpg';
import vintagecars from '../images/vintagecars.jpg';

import '../css/CartProductCards.css'
import '../css/Quantity.css'
import Button from './Button';
import axios from 'axios';
import Products from '../pages/Products';
import { useEffect, useState } from 'react';
import Quantity from './Quantity';
import PopUp from './PopUp';

type CartProductCardsProps = {
    refreshFunction: Function,
    name: string,
    scale: string,
    vendor: string,
    productLine:string,
    quantity: number,
    price: number,
    total: number,
    productCode: string,
    remove: boolean,
    showSelectQuantity: boolean
}

var RemoveUrl = "http://127.0.0.1:8000/api/removeproductincart"
var RemoveAllUrl = "http://127.0.0.1:8000/api/removeall"

function CartProductCards(props: CartProductCardsProps) {

    const [quantityValue, setQuantityValue] = useState<number>(1)

    const [isOpen, setIsOpen] = useState(false)

    const [alertText, setAlert] = useState("")

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    const RemoveAll = async () => {
        if (localStorage.getItem("Token") === null) {
            window.location.href = "http://127.0.0.1:3000/login"
            return;
        } else {
            const resp = await axios.post(RemoveAllUrl, {
                productCode: props.productCode,
                remember_token: JSON.parse(localStorage.getItem("Token")!)
            }).then((resp) => {
                props.refreshFunction()
                console.log(resp)
            }).catch((error) => {
                setAlert(error.data.message)
                togglePopup()
            })
        }
    }

    const RemoveFromCart = async () => {
        if (localStorage.getItem("Token") === null) {
            window.location.href = "http://127.0.0.1:3000/login"
            return;
        } else {
            const resp = await axios.post(RemoveUrl, {
                productCode: props.productCode,
                remember_token: JSON.parse(localStorage.getItem("Token")!)
            }).then((resp) => {
                props.refreshFunction()
                console.log(resp)
            }).catch((error) => {
                setAlert(error.data.message)
                togglePopup()
            })
        }
    }

    const addToCart = async () => {
        var addToCartURL = "http://127.0.0.1:8000/api/addToCart"
        if (localStorage.getItem("Token") === null) {
            window.location.href = "http://127.0.0.1:3000/login"
            return;
        } else {
            const resp = await axios.post(addToCartURL, {
                productCode: props.productCode,
                remember_token: JSON.parse(localStorage.getItem("Token")!),
                quantity: 1
            }).then((resp) => {
                props.refreshFunction()
                console.log(resp)
            }).catch((error) => {
                setAlert(error.data.message)
                togglePopup()
            })
        }
    }

    useEffect(() => {
    }, [])

    const getCatImg = (pl:string) =>{
        var categoryImg = classiccars;
        if(pl === "Motorcycles"){
            categoryImg = motorcycles;
        }else if(pl === "Planes"){
            categoryImg = planes;
        }else if(pl === "Ships"){
            categoryImg = ships;
        }else if(pl === "Trains"){
            categoryImg = trains;
        }else if(pl === "Trucks and Buses"){
            categoryImg = trucksandbuses;
        }else if(pl === "Vintage Cars"){
            categoryImg = vintagecars;
        }

        return categoryImg
    }

    return (
        <div className="CartCard">
            <div className="Left">
                <img className="LeftImage" src={getCatImg(props.productLine)} alt={getCatImg(props.productLine)}></img>
                <div className='LeftTexts'>
                    <div className='Name'>{props.name}</div>
                    <div className='Vendor'>{props.vendor}</div>
                    <div className='Scale'>{props.scale}</div>
                </div>
            </div>
            <div className="Right">
                <div className='RightFrame'>
                    <div className='RightText'>{props.price}</div>
                </div>
                <div className='RightFrame'>
                    <div className='RightText'>
                        {props.showSelectQuantity == true ?
                            <div className='CartQuantity'>
                                <Quantity
                                    exportValueFunction={setQuantityValue}
                                    incrementFunction={() => { addToCart(); }}
                                    decrementFunction={() => { if (props.quantity != 1) { RemoveFromCart(); } }}
                                    startingValue={props.quantity}></Quantity>
                            </div>
                            :
                            props.quantity
                        }
                    </div>
                </div>
                <div className='RightFrame'>
                    <div className='RightText'>{props.total}</div>
                </div>
                {props.remove == true ?
                    <div className='RightFrame'>
                        <Button text={"Remove"} icon={"remove"} buttonColor={"white"} textColor={"red"} func={() => { RemoveAll();}}></Button>
                    </div>
                    : ""}
            </div>
        </div>
    )
}
export default CartProductCards