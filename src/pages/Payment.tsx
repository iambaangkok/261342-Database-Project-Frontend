import '../css/Payment.css'
import axios from 'axios'
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import CartProductCards from '../components/CartProductCards';
import InputField from '../components/InputField';
import PopUp from '../components/PopUp';

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



    const [productCart, setCart] = useState([
        { productCode: "A", productName: "A", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantity: 0, MSRP: 0 },
    ])

    const [checkNumber, setCheck] = useState("")
    var total = 0

    const [isOpen, setIsOpen] = useState(false)

    const [alertText, setAlert] = useState("")

    const [popUpH,setPopupHead] = useState("")

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    const postToken = async () => {
        var cartUrl = "http://127.0.0.1:8000/api/showcart"
        const resp = await axios.post(cartUrl, {
            remember_token: JSON.parse(localStorage.getItem("Token")!),
        }).then((resp) => {
            let data = resp.data
            console.log(data)
            setCart(data)
        }).catch((error) => {
            setAlert(error.response.data.message)
            setPopupHead("Payment Fail")
            togglePopup()
            console.log(error)
        })
    }

    const postData = async () => {
        var paymentUrl = "http://127.0.0.1:8000/api/payment"
        const resp = await axios.post(paymentUrl, {
            remember_token: JSON.parse(localStorage.getItem("Token")!),
            totalAmount: parseFloat(Number(total).toFixed(2)),
            checkNumber: checkNumber,
        }).then((resp) => {
            console.log(resp)
            setAlert("")
            setPopupHead(resp.data)
            togglePopup()
        })
            .catch((error) => {
                setAlert(error.response.data)
                setPopupHead("Payment Fail")
                togglePopup()
                console.log(error)
            })
    }

    useEffect(() => {
        postToken();
    }, [])

    useEffect(() => {
    }, [productCart])



    return (
        <div className="PaymentContainer">
            <div className="PaymentBody">
                <div className="HeadContainer">
                    <div className='Text'>Payment</div>
                </div>
                {isOpen && <PopUp handleClose={togglePopup} headText={popUpH} contentText={alertText}></PopUp>}
                <div className='PaymentItem'>
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

                    {productCart.map((x, index) => {
                        let sumTotal = parseFloat(Number(x.MSRP * x.quantity).toFixed(2))
                        total += sumTotal
                        return <CartProductCards key={index} refreshFunction={() => postToken()} name={x.productName} vendor={x.productLine} scale={x.productScale} quantity={x.quantity} price={x.MSRP} total={sumTotal} productCode={x.productCode} remove={false} showSelectQuantity={false}></CartProductCards>
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
                        <div className='Mid'>
                            <div className='CreditText'>
                                Check Number :
                            </div>
                            <div className='PaymentInputField'>
                                <input className='PaymentField' onChange={(e) => setCheck(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='Bottom'>
                            <div className='Frame'>
                                <Button text={"Confirm Payment"} icon={""} buttonColor={"yellow"} textColor={"black"} func={() => {
                                    if (checkNumber.length > 8) {
                                        setAlert("Check number must have at most 8 characters")
                                        togglePopup()
                                    } else {
                                        postData()
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
export default Payment