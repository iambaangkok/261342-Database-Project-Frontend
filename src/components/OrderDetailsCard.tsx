import img1 from '../images/cc_01.jpg';
import '../css/MyOrdersOrderCard.css'
import Button from './Button';
import axios from 'axios';
import Products from '../pages/Products';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { stringify } from 'querystring';

type OrderDetailsCardProps = {
    refreshFunction: Function,

    productCode:string,
    quantityOrdered: number,
    priceEach: number,
    total: number,

    remove: boolean
}


function OrderDetailsCard(props: OrderDetailsCardProps) {
    const orderDetailURL = "http://127.0.0.1:3000/product?productCode="

    const cancelOrder = async () => {
        var cancelOrderUrl = "http://127.0.0.1:8000/api/cancelOrder"

        if(localStorage.getItem("Token") === null){
            window.location.href = "http://127.0.0.1:3000/login"
            return;
        }else{      
            try {
                const resp = await axios.post(cancelOrderUrl, {
                    productCode: props.productCode,
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
                    <a href={orderDetailURL+props.productCode} target="_blank">
                    <div className='MyOrdersRightText'>{props.productCode}</div>
                    </a>
                </div>
                <div className='MyOrdersRightFrame'>
                    <div className='MyOrdersRightText'>{props.priceEach}</div>
                </div>
                <div className='MyOrdersRightFrame'>
                    <div className='MyOrdersRightText'>{props.quantityOrdered}</div>
                </div>
                <div className='MyOrdersRightFrame'>
                    <div className='MyOrdersRightText'>{props.total}</div>
                </div>

            </div>
        </div>
    )
}
export default OrderDetailsCard