import '../css/Cart.css'
import axios from 'axios'
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import CartProductCards from '../components/CartProductCards';

type CartProductCardsProps = {
    productCode: number,
    name: string,
    scale: string,
    vendor: string,
    quantity: number,
    price: number,
    total: number,
}

function Payment() {
    var cartUrl = "http://127.0.0.1:8000/api/showcart"

    const [productCart, setCart] = useState([
        { productCode: "A", productName: "A", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantity: 0, MSRP: 0 },
    ])

    const [Subtotal, setSubTotal] = useState(0)
    const [checkNumber, setCheck] = useState(0)
    let total = 0

    const postToken = async () => {
        const resp = await axios.post(cartUrl, {
            remember_token: JSON.parse(localStorage.getItem("Token")!),
            totalAmount : Subtotal,
            checkNumber : checkNumber,
        })
        let data = resp.data
        console.log(data)
        setCart(data)
    }

    useEffect(() => {
        postToken().catch(console.error)
    }, [])


    useEffect(() => {
        setSubTotal(total)
    }, [total])

    useEffect(() => {

    }, [productCart])

    return (
        <div className="CartContainer">
            <div className="CartBody">
                <div className="HeadContainer">
                    <div className='Text'>Payment</div>
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

                    {productCart.map((x,index) => {
                        let sumTotal = parseFloat(Number(x.MSRP * x.quantity).toFixed(2))
                        total += sumTotal
                        return <CartProductCards key={index} refreshFunction={() => postToken()} name={x.productName} vendor={x.productLine} scale={x.productScale} quantity={x.quantity} price={x.MSRP} total={sumTotal} productCode={x.productCode} remove={false}></CartProductCards>
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
                        <div className='Bottom'>
                            <div className='Frame'>
                                <Button text={"Confirm Payment"} icon={""} buttonColor={"yellow"} textColor={"black"} func={() => { }}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment