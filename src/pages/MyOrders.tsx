import '../css/MyOrders.css'
import axios from 'axios'
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import CartProductCards from '../components/CartProductCards';
import { Link } from 'react-router-dom';
import MyOrdersOrderCard from '../components/MyOrdersOrderCard';

type OrderCardProps = {
    orderNumber: number,
    orderDate: string,
    requiredDate: string,
    shippedDate: string,
    status: string,
    comments: string,
    customerNumber: number,
}

function MyOrders() {
    var fetchDataUrl = "http://127.0.0.1:8000/api/orders"

    const [myOrders, setMyOrders] = useState<OrderCardProps[]>([
        { orderNumber: 0, orderDate: "date", requiredDate: "date", shippedDate: "date", status: "Shipped", comments: "-", customerNumber: 0 },
        { orderNumber: 0, orderDate: "date", requiredDate: "date", shippedDate: "date", status: "Shipped", comments: "-", customerNumber: 0 },
        { orderNumber: 0, orderDate: "date", requiredDate: "date", shippedDate: "date", status: "Shipped", comments: "-", customerNumber: 0 },
        { orderNumber: 0, orderDate: "date", requiredDate: "date", shippedDate: "date", status: "Shipped", comments: "-", customerNumber: 0 },
    ])

    let total = 0

    const fetchData = async () => {
        if (localStorage.getItem("Token") === null) {
            window.location.href = "http://127.0.0.1:3000/login"
            return
        } else {
            const resp = await axios.post(fetchDataUrl, {
                remember_token: JSON.parse(localStorage.getItem("Token")!)
            })
            let data = resp.data
            // console.log(data)
            setMyOrders(data)
            return resp.data;
        }
    }

    useEffect(() => {
        fetchData().catch(console.error)
    }, [fetchDataUrl])

    useEffect(() => {

    }, [myOrders, setMyOrders])


    return (
        <div className="MyOrdersContainer">
            <div className="MyOrdersBody">
                <div className="MyOrdersHeadContainer">
                    <div className='MyOrdersText'>My Orders</div>
                </div>

                <div className='MyOrdersItem'>
                    <div className="MyOrdersColumNames">
                        <div className='MyOrdersRight'>
                        <div className='MyOrdersTextFrame'>
                                <div className='MyOrdersText'>
                                    Order Number
                                </div>
                            </div>
                            <div className='MyOrdersTextFrame'>
                                <div className='MyOrdersText'>
                                    Order Date
                                </div>
                            </div>
                            <div className='MyOrdersTextFrame'>
                                <div className='MyOrdersText'>
                                    Required Date
                                </div>
                            </div>
                            <div className='MyOrdersTextFrame'>
                                <div className='MyOrdersText'>
                                    Shipped Date
                                </div>
                            </div>
                            <div className='MyOrdersTextFrame'>
                                <div className='MyOrdersText'>
                                    Status
                                </div>
                            </div>
                            <div className='MyOrdersTextFrame'>
                                <div className='MyOrdersText'>
                                    Cancel
                                </div>
                            </div>
                        </div>
                    </div>
                    {myOrders.map((x, index) => {
                        // let sumTotal = parseFloat(Number(x.MSRP * x.quantity).toFixed(2))
                        // total += sumTotal
                        return <MyOrdersOrderCard key={index} 
                            refreshFunction={() => (fetchData())}
                            orderNumber={x.orderNumber}
                            orderDate={x.orderDate}
                            requiredDate={x.requiredDate}
                            shippedDate={x.shippedDate}
                            status={x.status}
                            comments={x.comments}
                            customerNumber={x.customerNumber}
                            remove={true} />
                    })}
                    
                </div>
            </div>
        </div >
    )
}
export default MyOrders