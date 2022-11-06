import img1 from '../images/cc_01.jpg';
import '../css/CartProductCards.css'
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
    quantity: number,
    price: number,
    total: number,
    productCode: string,
    remove: boolean
}

var RemoveUrl = "http://127.0.0.1:8000/api/removeproductincart"

function CartProductCards(props: CartProductCardsProps) {

    const [quantityValue, setQuantityValue] = useState<number>(1)

    const [isOpen, setIsOpen] = useState(false)

    const [alertText, setAlert] = useState("")

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    const RemoveFromCart = async () => {
        if(localStorage.getItem("Token") === null){
            window.location.href = "http://127.0.0.1:3000/login"
            return;
        }else{      
            
                const resp = await axios.post(RemoveUrl, {
                    productCode: props.productCode,
                    remember_token: JSON.parse(localStorage.getItem("Token")!)
                }).then((resp)=>{
                    props.refreshFunction()
                    console.log(resp)
                    return resp.data;
                }).catch((error)=>{
                    setAlert(error.data.message)
                    togglePopup()
                })
                
        }
    }

    const addToCart = async () => {
        var addToCartURL = "http://127.0.0.1:8000/api/addToCart"

        if(localStorage.getItem("Token") === null){
            window.location.href = "http://127.0.0.1:3000/login"
            return;
        }else{
            var body = {
                productCode:props.productCode,
                remember_token: JSON.parse(localStorage.getItem("Token")!),
                quantity:1
            }
            
            console.log(body)
            
            var resp = await axios.post(addToCartURL, body);

            return resp.data;
        }
    }

    useEffect(() => {
    }, [addToCart,RemoveFromCart])

    useEffect(() => {
    }, [props.quantity])

    return (
        <div className="CartCard">
            <div className="Left">
                {isOpen && <PopUp handleClose={togglePopup} headText="Remove Fail" contentText={alertText}></PopUp>}
                <img className="LeftImage" src={img1} alt={img1}></img>
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
                        {/* {props.quantity} */}
                        <Quantity exportValueFunction={setQuantityValue}
                        incrementFunction={() => { addToCart(); } }
                        decrementFunction={() => { if (props.quantity != 1) { RemoveFromCart(); } } } 
                        startingValue={props.quantity}></Quantity>
                    </div>
                </div>
                <div className='RightFrame'>
                    <div className='RightText'>{props.total}</div>
                </div>
                {
                    props.remove == true ?
                        <div className='RightFrame'>
                            <Button text={"Remove"} icon={"remove"} buttonColor={"white"} textColor={"red"} func={() => { RemoveFromCart() }}></Button>
                        </div>
                        : ""}
            </div>
        </div>
    )
}
export default CartProductCards