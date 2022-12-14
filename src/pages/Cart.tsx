import '../css/Cart.css'
import axios from 'axios'
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import CartProductCards from '../components/CartProductCards';
import { Link } from 'react-router-dom';
import PopUp from '../components/PopUp';

type CartProductCardsProps = {
    productCode: string,
    productName: string,
    productLine: string,
    productScale: string,
    productVendor: string,
    productDescription: string,
    quantity: number,
    MSRP: number,
}

function Cart() {
    var cartUrl = "http://127.0.0.1:8000/api/showcart"

    const [productCart, setCart] = useState<CartProductCardsProps[]>([
    ])

    let total = 0

    const [isOpen, setIsOpen] = useState(false)

    const [alertText, setAlert] = useState("")

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    const postToken = async () => {
        if (localStorage.getItem("Token") === null) {
            window.location.href = "http://127.0.0.1:3000/login"
            return
        } else {
            const resp = await axios.post(cartUrl, {
                remember_token: JSON.parse(localStorage.getItem("Token")!)
            }).then((resp) => {
                let data = resp.data
                console.log(data)
                setCart(data)
            }).catch((error)=>{
                setAlert(error.data)
                togglePopup()
            })

        }
    }

    useEffect(() => {
        postToken().catch(console.error)
    }, [cartUrl])

    useEffect(() => {

    }, [productCart])


    return (
        <div className="CartContainer">
            <div className="CartBody">
                <div className="HeadContainer">
                    <div className='Text'>My Cart</div>
                </div>
                {isOpen && <PopUp handleClose={togglePopup} headText={"Cart is Empty"} contentText={alertText}></PopUp>}
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
                    {productCart.map((x, index) => {
                        let sumTotal = parseFloat(Number(x.MSRP * x.quantity).toFixed(2))
                        total += sumTotal
                        return <CartProductCards key={index} refreshFunction={() => (postToken())} name={x.productName} vendor={x.productVendor} productLine={x.productLine} scale={x.productScale} quantity={x.quantity} price={x.MSRP} total={sumTotal} productCode={x.productCode} remove={true} showSelectQuantity={true}></CartProductCards>
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
                                    <Button text={"Check Out"} icon={""} buttonColor={"yellow"} textColor={"black"} func={() => {
                                        if(productCart.length === 0){
                                            setAlert("Please add some products before clicking Check out.")
                                            togglePopup()
                                            {<Link to="/payment" style={{ textDecoration: 'none' } }></Link>}
                                        }else{
                                            window.location.href = "http://127.0.0.1:3000/payment"
                                        }
                                    }}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart