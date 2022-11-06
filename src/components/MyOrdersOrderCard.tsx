import img1 from '../images/cc_01.jpg';
import '../css/MyOrdersOrderCard.css'
import Button from './Button';
import axios from 'axios';
import Products from '../pages/Products';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { stringify } from 'querystring';

type MyOrdersOrderCardProps = {
    refreshFunction: Function,

    orderNumber: number,
    orderDate: string,
    requiredDate: string,
    shippedDate: string,
    status: string,
    comments: string,
    customerNumber: number,

    remove: boolean
}


function MyOrdersOrderCard(props: MyOrdersOrderCardProps) {
    const orderDetailURL = "http://127.0.0.1:3000/order?orderNumber="

    const cancelOrder = async () => {
        var cancelOrderUrl = "http://127.0.0.1:8000/api/cancelOrder"

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
    }, [])
    useEffect(() => {
    }, [cancelOrder])

    return (
        <div className="MyOrdersCard">
            <div className="MyOrdersRight">
                <div className='MyOrdersRightFrame'>
                    <a href={orderDetailURL+props.orderNumber}>
                    <div className='MyOrdersRightText'>{props.orderNumber}</div>
                    </a>
                </div>
                <div className='MyOrdersRightFrame'>
                    <div className='MyOrdersRightText'>{props.orderDate}</div>
                </div>
                <div className='MyOrdersRightFrame'>
                    <div className='MyOrdersRightText'>{props.requiredDate}</div>
                </div>
                <div className='MyOrdersRightFrame'>
                    <div className='MyOrdersRightText'>{props.shippedDate}</div>
                </div>
                <div className='MyOrdersRightFrame'>
                    <div className='MyOrdersRightText'>{props.status}</div>
                </div>
                {
                    props.status != "Shipped" && props.status != "Cancelled" ?
                        <div className='MyOrdersRightFrame'>
                            <Button text={"Cancel Order"} icon={"remove"} buttonColor={"white"} textColor={"red"} func={() => { cancelOrder() }}></Button>
                        </div>
                        : <div className='MyOrdersRightFrame'>
                        <div className='MyOrdersRightText'>{}</div>
                    </div>}
            </div>
        </div>
    )
}
export default MyOrdersOrderCard