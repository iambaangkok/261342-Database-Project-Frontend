import '../css/Cart.css'
import axios from 'axios'
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import CartProductCards from '../components/CartProductCards';
import { Link } from 'react-router-dom';

type CartProductCardsProps = {
    productCode: number,
    name: string,
    scale: string,
    vendor: string,
    quantity: number,
    price: number,
    total: number,
}

function Cart() {
    var cartUrl = ""
    var productUrl = "http://127.0.0.1:8000/products"
    var TokenUrl = "";

    const [productCart, setCart] = useState([
        { productCode: 0, quantity: 1 },
        { productCode: 2, quantity: 1 },
        { productCode: 4, quantity: 1 }
    ])

    const [productsData, setProductsData] = useState([
        { productCode: 0, productName: "A", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantityInStock: 0, buyPrice: 0, MSRP: 0 },
        { productCode: 1, productName: "B", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantityInStock: 0, buyPrice: 0, MSRP: 0 },
        { productCode: 2, productName: "C", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantityInStock: 0, buyPrice: 0, MSRP: 0 },
        { productCode: 3, productName: "D", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantityInStock: 0, buyPrice: 0, MSRP: 0 },
        { productCode: 4, productName: "E", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantityInStock: 0, buyPrice: 0, MSRP: 0 },
    ])

    const [token, setToken] = useState<string| null>(localStorage.getItem("Token"));

    const postToken = async () => {
        try {
            const resp = await axios.post(TokenUrl, {
                token:token
            });
            console.log(resp)
        } catch (e) {
            console.log(e)
            alert("post Token fail")
        }
    }

    // useEffect(() => {
    //     postToken
    // },[])

    const fetchCartData = async () => {
        const resp = await axios.get(cartUrl);
        const data = resp.data;
        setCart(data)
    }

    const fetchProductData = async () => {
        const resp = await axios.get(productUrl);
        const data = resp.data;
        setProductsData(data)
    }

    useEffect(() => {
        fetchCartData().catch(console.error);
    }, [])

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

                    {/* {productsData.filter((x) => productCart.map((x) => {x.productCode}).includes(x.productCode) ).map((x) => {
                        return <CartProductCards name={x.productName} vendor={x.productLine} scale={x.productScale} quantity={x.quantityInStock} price={x.buyPrice} total={x.quantityInStock * x.buyPrice} productCode={x.productCode} remove={true}></CartProductCards>
                    })} */}

                    {productsData.map((x) => {
                        return <CartProductCards name={x.productName} vendor={x.productLine} scale={x.productScale} quantity={x.quantityInStock} price={x.buyPrice} total={x.quantityInStock * x.buyPrice} productCode={x.productCode} remove={true}></CartProductCards>
                    })}

                    <div className='SubTotal'>
                        <div className='Top'>
                            <div className='SubTotalText'>
                                SubTotal:
                            </div>
                            <div className="SubTotalNumber">
                                $ 455555
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