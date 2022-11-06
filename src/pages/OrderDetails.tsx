import '../css/Cart.css'
import axios from 'axios'
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import CartProductCards from '../components/CartProductCards';
import { Link, useSearchParams } from 'react-router-dom';
import OrderDetailsCard from '../components/OrderDetailsCard';

type OrderDetailsProps = {
    productCode: string,
    name: string,
    scale: string,
    vendor: string,
    quantityOrdered: number,
    price: number,
    total: number,
}

function OrderDetails() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [orderDetails, setOrderDetails] = useState([
        { productCode: "A", quantityOrdered: 0, priceEach: 0 },
    ])

    let total = 0

    const fetchData = async () => {
        var orderDetailsURL = "http://127.0.0.1:8000/api/order?orderNumber="

        if (localStorage.getItem("Token") === null) {
            window.location.href = "http://127.0.0.1:3000/login"
            return
        } else {
            var orderNumber = searchParams.get("orderNumber")
            
            var apiurl = orderDetailsURL

            const resp = await axios.get(apiurl+orderNumber)
            console.log(resp)
            let data = resp.data
            setOrderDetails(data)
        }
    }

    useEffect(() => {
        fetchData().catch(console.error);
    }, [])

    useEffect(() => {

    }, [orderDetails,setOrderDetails])


    return (
        <div className="CartContainer">
            <div className="CartBody">
                <div className="HeadContainer">
                    <div className='Text'>{"Order#" + searchParams.get("orderNumber") + "'s Details" }</div>
                </div>

                <div className='CartItem'>
                    <div className="ColumNames">
                        <div className='Right'>
                            <div className='TextFrame'>
                                <div className='Text'>
                                    Product Code
                                </div>
                            </div>
                            <div className='TextFrame'>
                                <div className='Text'>
                                    Unit Price
                                </div>
                            </div>
                            <div className='TextFrame'>
                                <div className='Text'>
                                    Quantity
                                </div>
                            </div>
                            <div className='TextFrame'>
                                <div className='Text'>
                                    Total Price
                                </div>
                            </div>
                        </div>
                    </div>
                    {orderDetails.map((x,index) => {
                        let sumTotal = parseFloat(Number(x.priceEach * x.quantityOrdered).toFixed(2))
                        total += sumTotal
                        return <OrderDetailsCard key={index} refreshFunction={()=>(fetchData())} quantityOrdered={x.quantityOrdered} priceEach={x.priceEach} total={sumTotal} productCode={x.productCode} remove={false}></OrderDetailsCard>
                    })}
                    <div className='SubTotal'>
                        <div className='Top'>
                            <div className='SubTotalText'>
                                SubTotal:
                            </div>
                            <div className="SubTotalNumber">
                                $ {parseFloat(Number(total).toFixed(2))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderDetails