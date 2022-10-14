import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/ProductsProductCard.css'
import { Link } from 'react-router-dom';
import Button from './Button';

import img1 from '../images/cc_01.jpg';


type ProductsProductCardProps = {
    name: string,
    scale: string,
    vendor: string,
    quantity: number,
    price:number,
}

function ProductsProductCard({name, scale, vendor, quantity, price} : ProductsProductCardProps) {   

    return (
        <div className={"ProductCardContainer"}>
            <img className={"ProductCardImage"} src={img1} alt={img1} ></img>
            <div className={"ProductCardBottomContainer"}>
                <div className={"ProductCardTextsContainer"}>
                    <div className={"ProductCardTextsTopContainer"}>
                        <div className={"ProductCardTextsTopNameContainer"}>
                            <div className={"ProductCardTextsTopName"}>
                                {name}
                            </div>
                            <div className={"ProductCardTextsTopScale"}>
                                {scale}
                            </div>
                        </div>
                        <div className={"ProductCardTextsTopVendor"}>
                            {vendor}
                        </div>
                    </div>
                    <div className={"ProductCardTextsBottomContainer"}>
                        <div className={"ProductCardTextsBottomQuantity"}>
                            {quantity + " available"}
                        </div>
                        <div className={"ProductCardTextsBottomPrice"}>
                            {"$ " +price}
                        </div>
                    </div>
                </div>
                <div className={"ProductCardButtons"}>
                    <Button text={"See details"} icon={""} buttonColor={"whiteBorder"} textColor={"black"} ></Button>
                    <Button text={"Add to cart"} icon={"shopping_cart_outline"} buttonColor={"yellow"} textColor={"black"} ></Button>
                </div>
            </div>
        </div>
    )
}

export default ProductsProductCard