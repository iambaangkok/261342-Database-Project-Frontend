import img1 from '../images/cc_01.jpg';
import '../css/CartProductCards.css'
import Button from './Button';
import axios from 'axios';
import Products from '../pages/Products';
import { useEffect, useState } from 'react';

type MyOrdersOrderCardProps = {
    refreshFunction: Function,
    orderNumber: string,
    orderDate: string,
    requiredDate: string,
    shippedDate: number,
    status: number,
    comments: number,
    customerNumber: string,
    remove: boolean
}

var cancelOrderUrl = "http://127.0.0.1:8000/api/cancelOrder"

function MyOrdersOrderCard(props: MyOrdersOrderCardProps) {
    const cancelOrder = async () => {
        if(localStorage.getItem("Token") === null){
            window.location.href = "http://127.0.0.1:3000/login"
            return;
        }else{      
            try {
                const resp = await axios.post(cancelOrderUrl, {
                    productCode: props.orderNumber,
                    remember_token: JSON.parse(localStorage.getItem("Token")!)
                });
                await props.refreshFunction()
                console.log(resp)
                return resp.data;
            } catch (e) {
                console.log(e)
                alert("Fail to cancel")
            }
        }
    }

    useEffect(() => {
    }, [cancelOrder])

    return (
        <div className="CartCard">
            <div className="Left">
                <img className="LeftImage" src={img1} alt={img1}></img>
                <div className='LeftTexts'>
                    <div className='Name'>{props.orderNumber}</div>
                    <div className='Vendor'>{props.requiredDate}</div>
                    <div className='Scale'>{props.orderDate}</div>
                </div>
            </div>
            <div className="Right">
                <div className='RightFrame'>
                    <div className='RightText'>{props.status}</div>
                </div>
                <div className='RightFrame'>
                    <div className='RightText'>{props.shippedDate}</div>
                </div>
                <div className='RightFrame'>
                    <div className='RightText'>{props.comments}</div>
                </div>
                {
                    props.remove == true ?
                        <div className='RightFrame'>
                            <Button text={"Remove"} icon={"remove"} buttonColor={"white"} textColor={"red"} func={() => { cancelOrder() }}></Button>
                        </div>
                        : ""}
            </div>
        </div>
    )
}
export default MyOrdersOrderCard