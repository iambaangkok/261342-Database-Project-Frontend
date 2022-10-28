import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/ProductsProductCard.css'
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';

import img1 from '../images/cc_01.jpg';


type ProductsProductCardProps = {
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

function ProductsProductCard(props : ProductsProductCardProps) {  
    var navigate = useNavigate();

    const navigateToProductDetail = async () =>{
        var url = "http://127.0.0.1:3000/product?productCode=" + props.productCode
        console.log("NAV to " + url)
        window.location.href = url
    }

    const addToCart = async () =>{
        var url = "http://127.0.0.1:8000/addToCart/"
        var resp = await axios.post(url+props.productCode);
        return resp.data;
    }

    useEffect(() => {

    }, [props])

    return (
        <div className={"ProductCardContainer"}>
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
                            {"$ " +props.MSRP}
                        </div>
                    </div>
                </div>
                <div className={"ProductCardButtons"}>
                    <Button text={"See details"} icon={""} buttonColor={"whiteBorder"} textColor={"black"} func={()=>{navigateToProductDetail()}}></Button>
                    <Button text={"Add to cart"} icon={"shopping_cart_outline"} buttonColor={"yellow"} textColor={"black"} func={()=>{
                        addToCart();
                    }}></Button>
                </div>
            </div>
        </div>
    )
}
export default ProductsProductCard