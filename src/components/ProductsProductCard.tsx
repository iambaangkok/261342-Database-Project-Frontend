import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/ProductsProductCard.css'
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';

import img1 from '../images/cc_01.jpg';
import Quantity from './Quantity';
import PopUp from './PopUp';


type ProductsProductCardProps = {
    refreshFunction: Function,
    productCode: string,
    productName: string,
    productLine: string,
    productScale: string,
    productVendor: string,
    productDescription: string,
    quantityInStock: number,
    buyPrice: number,
    MSRP: number,
}

function ProductsProductCard(props: ProductsProductCardProps) {
    var navigate = useNavigate();

    const [updateComponent, setUpdateComponent] = useState<boolean>(true);

    const [isOpen, setIsOpen] = useState(false)

    const [alertText, setAlert] = useState("")

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }


    const navigateToProductDetail = async () => {
        var url = "http://127.0.0.1:3000/product?productCode=" + props.productCode
        console.log("NAV to " + url)
        window.location.href = url
    }

    const addToCart = async () => {
        var url = "http://127.0.0.1:8000/api/addToCart"

        if (localStorage.getItem("Token") === null) {
            window.location.href = "http://127.0.0.1:3000/login"
            return;
        } else {
            var body = {
                productCode: props.productCode,
                remember_token: JSON.parse(localStorage.getItem("Token")!),
                quantity: 1
            }

            console.log(body)
            setAlert(props.productName + " is Add to cart")
            togglePopup();
            setTimeout(() => {
                setIsOpen(false);
            }, 1000);
            var resp = await axios.post(url, body);
            setUpdateComponent(!updateComponent)

            await props.refreshFunction();

            return resp.data;
        }
    }



    useEffect(() => {

    }, [props, updateComponent])


    return (
        <div className={"ProductCardContainer"}>
            {isOpen && <PopUp handleClose={() => { togglePopup(); }} headText="Add to cart success" contentText={alertText}></PopUp>}
            <img className={"ProductCardImage"} src={img1} alt={img1} ></img>
            <div className={"ProductCardBottomContainer"}>
                <div className={"ProductCardTextsContainer"}>
                    <div className={"ProductCardTextsTopContainer"}>
                        <div className={"ProductCardTextsTopNameContainer"}>
                            <div className={"ProductCardTextsTopName"}>
                                {props.productName}
                            </div>
                            <div className={"ProductCardTextsTopScale"}>
                                {props.productScale}
                            </div>
                        </div>
                        <div className={"ProductCardTextsTopVendor"}>
                            {props.productVendor}
                        </div>
                    </div>
                    <div className={"ProductCardTextsBottomContainer"}>
                        <div className={"ProductCardTextsBottomQuantity"}>
                            {props.quantityInStock + " available"}
                        </div>
                        <div className={"ProductCardTextsBottomPrice"}>
                            {"$ " + props.MSRP}
                        </div>
                    </div>
                </div>
                <div className={"ProductCardButtons"}>
                    <Button text={"See details"} icon={""} buttonColor={"whiteBorder"} textColor={"black"} func={() => { navigateToProductDetail() }}></Button>
                    <Button text={"Add to cart"} icon={"shopping_cart_outline"} buttonColor={"yellow"} textColor={"black"} func={() => {
                        addToCart();
                    }}></Button>
                </div>
            </div>
        </div>
    )
}
export default ProductsProductCard