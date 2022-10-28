import img1 from '../images/cc_01.jpg';
import '../css/CartProductCards.css'
import Button from './Button';
import axios from 'axios';
import Products from '../pages/Products';
import { useState } from 'react';

type CartProductCardsProps = {
    name: string,
    scale: string,
    vendor: string,
    quantity: number,
    price: number,
    total: number,
    productCode: string,
    remove: boolean
}

var RemoveUrl = ""

function CartProductCards({ name, scale, vendor, quantity, price, total, productCode, remove }: CartProductCardsProps) {

    const RemoveFromCart = async () => {
        if(localStorage.getItem("Token") === null){
            window.location.href = "http://127.0.0.1:3000/login"
            return;
        }else{      
            try {
                const resp = await axios.post(RemoveUrl, {
                    productCode: productCode,
                    remember_token: JSON.parse(localStorage.getItem("Token")!)
                });
                console.log(resp)
            } catch (e) {
                console.log(e)
                alert("Remove Fail")
            }
        }
    }

    return (
        <div className="CartCard">
            <div className="Left">
                <img className="LeftImage" src={img1} alt={img1}></img>
                <div className='LeftTexts'>
                    <div className='Name'>{name}</div>
                    <div className='Vendor'>{vendor}</div>
                    <div className='Scale'>{scale}</div>
                </div>
            </div>
            <div className="Right">
                <div className='RightFrame'>
                    <div className='RightText'>{price}</div>
                </div>
                <div className='RightFrame'>
                    <div className='RightText'>{quantity}</div>
                </div>
                <div className='RightFrame'>
                    <div className='RightText'>{total}</div>
                </div>
                {
                    remove == true ?
                        <div className='RightFrame'>
                            <Button text={"Remove"} icon={"remove"} buttonColor={"white"} textColor={"red"} func={() => { RemoveFromCart() }}></Button>
                        </div>
                        : ""}
            </div>
        </div>
    )
}
export default CartProductCards