import '../css/Cart.css'
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

function Cart() {
    var cartUrl = "http://127.0.0.1:8000/api/showcart"
    // var productUrl = "http://127.0.0.1:8000/api/products?page=1"

    const [productCart, setCart] = useState([
        {  productCode: "A", productName: "A", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantity: 0,  MSRP: 0 },
    ])

    // const [productsData, setProductsData] = useState([
    //     { productCode: "0", productName: "A", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantityInStock: 0, buyPrice: 0, MSRP: 0 },
    //     { productCode: "1", productName: "B", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantityInStock: 0, buyPrice: 0, MSRP: 0 },
    //     { productCode: "2", productName: "C", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantityInStock: 0, buyPrice: 0, MSRP: 0 },
    //     { productCode: "3", productName: "D", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantityInStock: 0, buyPrice: 0, MSRP: 0 },
    //     { productCode: "4", productName: "E", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantityInStock: 0, buyPrice: 0, MSRP: 0 },
    // ])

   const [Subtotal,setSubTotal] = useState(0)

    const fetchCartData = async () => {
        const resp = await axios.get(cartUrl);
        const data = resp.data;
        setCart(data)
    }

    useEffect(() => {
        //  fetchCartData().catch(console.error);
    }, [])

    useEffect(()=>{

    },[productCart])

    return (
        <div className="CartContainer">
            <div className="CartBody">
                <div className="HeadContainer">
                    <div className='Text'>My Cart</div>
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
                            <div className='TextFrame'>
                                <div className='Text'>
                                    Action
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {productCart.map((x) => {
                        {setSubTotal(Subtotal + (x.MSRP*x.quantity))}
                        return <CartProductCards name={x.productName} vendor={x.productLine} scale={x.productScale} quantity={x.quantity} price={x.MSRP} total={x.quantity * x.MSRP} productCode={x.productCode} remove={true}></CartProductCards>
                    })} */}
                    

                    <div className='SubTotal'>
                        <div className='Top'>
                            <div className='SubTotalText'>
                                SubTotal:
                            </div>
                            <div className="SubTotalNumber">
                                {Subtotal}
                            </div>
                        </div>
                        <div className='Bottom'>
                            <div className='Frame'>
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
export default Cart