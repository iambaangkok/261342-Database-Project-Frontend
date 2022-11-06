import '../css/Cart.css'
import axios from 'axios'
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import CartProductCards from '../components/CartProductCards';
import { Link, useSearchParams } from 'react-router-dom';

type CartProductCardsProps = {
    productCode: string,
    name: string,
    scale: string,
    vendor: string,
    quantity: number,
    price: number,
    total: number,
}

function OrderDetails() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [orderDetails, setOrderDetails] = useState([
        { productCode: "A", productName: "A", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantity: 0, MSRP: 0 },
    ])

    let total = 0

    const fetchData = async () => {
        var orderDetailsURL = "http://127.0.0.1:8000/api/order"

        if (localStorage.getItem("Token") === null) {
            window.location.href = "http://127.0.0.1:3000/login"
            return
        } else {
            var orderNumber = searchParams.get("orderNumber")
            
            var apiurl = orderDetailsURL + orderNumber

            const resp = await axios.post(apiurl, {
                remember_token: JSON.parse(localStorage.getItem("Token")!)
            })
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
                        <div className='Left'>
                            <div className='TextProduct'>
                                Product
                            </div>
                        </div>
                        <div className='Right'>
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
                        let sumTotal = parseFloat(Number(x.MSRP * x.quantity).toFixed(2))
                        total += sumTotal
                        return <CartProductCards key={index} refreshFunction={()=>(fetchData())} name={x.productName} vendor={x.productLine} scale={x.productScale} quantity={x.quantity} price={x.MSRP} total={sumTotal} productCode={x.productCode} remove={false}></CartProductCards>
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