import '../css/MyOrders.css'
import axios from 'axios'
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import CartProductCards from '../components/CartProductCards';
import { Link } from 'react-router-dom';

type CartProductCardsProps = {
    productCode: string,
    name: string,
    scale: string,
    vendor: string,
    quantity: number,
    price: number,
    total: number,
}

function MyOrders() {
    var fetchDataUrl = "http://127.0.0.1:8000/api/showcart"

    const [myOrders, setMyOrders] = useState([
        { productCode: "A", productName: "A", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantity: 0, MSRP: 0 },
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

    }, [myOrders,setMyOrders])


    return (
        <div className="MyOrdersContainer">
            <div className="MyOrdersBody">
                <div className="MyOrdersHeadContainer">
                    <div className='MyOrdersText'>My Orders</div>
                </div>

                <div className='MyOrdersItem'>
                    <div className="MyOrdersColumNames">
                        <div className='MyOrdersLeft'>
                            <div className='MyOrdersTextProduct'>
                                Order Number	
                            </div>
                        </div>
                        <div className='MyOrdersRight'>
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
                        </div>
                    </div>
                    {myOrders.map((x,index) => {
                        let sumTotal = parseFloat(Number(x.MSRP * x.quantity).toFixed(2))
                        total += sumTotal
                        return <CartProductCards key={index} refreshFunction={()=>(fetchData())} name={x.productName} vendor={x.productLine} scale={x.productScale} quantity={x.quantity} price={x.MSRP} total={sumTotal} productCode={x.productCode} remove={true}></CartProductCards>
                    })}
                    <div className='MyOrdersSubTotal'>
                        <div className='MyOrdersTop'>
                            <div className='MyOrdersSubTotalText'>
                                SubTotal:
                            </div>
                            <div className="MyOrdersSubTotalNumber">
                                $ {parseFloat(Number(total).toFixed(2))}
                            </div>
                        </div>
                        <div className='MyOrdersBottom'>
                            <div className='MyOrdersFrame'>
                                <Link to="/payment" style={{ textDecoration: 'none' }}>
                                    <Button text={"Check Out"} icon={""} buttonColor={"yellow"} textColor={"black"} func={() => { }}></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyOrders