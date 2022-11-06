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
    var cartUrl = "http://127.0.0.1:8000/api/showcart"
    var paymentUrl = ""

    const [productCart, setCart] = useState([
        { productCode: "A", productName: "A", productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR", productDescription: "DESC", quantity: 0, MSRP: 0 },
    ])

    const [Subtotal, setSubTotal] = useState(0)
    const [checkNumber, setCheck] = useState("")
    let total = 0

    const [isOpen, setIsOpen] = useState(false)

    const [alertText, setAlert] = useState("")

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    const postToken = async () => {
        const resp = await axios.post(cartUrl, {
            remember_token: JSON.parse(localStorage.getItem("Token")!),
        }).then((resp) => {
            let data = resp.data
            console.log(data)
            setCart(data)
        }).catch((error)=>{
            setAlert(error.response.data.message)
            togglePopup()
            console.log(error)
        })
    }

    const postData = async () => {
        const resp = await axios.post(paymentUrl, {
            remember_token: JSON.parse(localStorage.getItem("Token")!),
            totalAmount: Subtotal,
            checkNumber: checkNumber,
        }).catch((error)=>{
            setAlert(error.response.data.message)
            togglePopup()
            console.log(error)
        })
    }

    useEffect(() => {
        postToken()
    }, [])


    useEffect(() => {
        setSubTotal(parseFloat(Number(total).toFixed(2)))
    }, [total])

    useEffect(() => {

    }, [productCart])

    return (
        <div className="PaymentContainer">
            <div className="PaymentBody">
                <div className="HeadContainer">
                    <div className='Text'>Payment</div>
                </div>
                {isOpen && <PopUp handleClose={togglePopup} headText="Payment Fail" contentText={alertText}></PopUp>}
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
                                    if(checkNumber.length === 8){
                                        postData()
                                    }else{
                                        setAlert("Check number must have 8 characters")
                                        togglePopup()
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