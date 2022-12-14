import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/ProductDetails.css'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Button from '../components/Button';

import classiccars from '../images/classiccars.jpg';
import motorcycles from '../images/motorcycles.jpg';
import planes from '../images/planes.jpg';
import ships from '../images/ships.jpg';
import trains from '../images/trains.jpg';
import trucksandbuses from '../images/trucksandbuses.jpg';
import vintagecars from '../images/vintagecars.jpg';

import Quantity from '../components/Quantity';
import PopUp from '../components/PopUp';

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


function ProductDetails() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [productData, setProductData] = useState(
        {
            productCode: "PRODUCTCODE",
            productName: "NAME",
            productLine: "LINE",
            productScale: "SCALE",
            productVendor: "VENDOR",
            productDescription: "DESC",
            quantityInStock: 0,
            buyPrice: 0,
            MSRP: 0
        }
    )

    const [isOpen, setIsOpen] = useState(false)

    const [alertText, setAlert] = useState("")

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    const [quantityValue, setQuantityValue] = useState<number>(1)

    const addToCart = async () => {
        var addToCartURL = "http://127.0.0.1:8000/api/addToCart"

        if(localStorage.getItem("Token") === null){
            window.location.href = "http://127.0.0.1:3000/login"
            return;
        }else{
            var body = {
                productCode:productData.productCode,
                remember_token: JSON.parse(localStorage.getItem("Token")!),
                quantity:quantityValue
            }
            setAlert(productData.productName + " is Add to cart")
            togglePopup();
            setTimeout(() => {
                setIsOpen(false);
            }, 1000);
            console.log(body)
            
            var resp = await axios.post(addToCartURL, body);

            return resp.data;
        }
    }

    const fetchData = async () => {
        var fetchApiUrl = "http://127.0.0.1:8000/api/product?productCode=";

        console.log(productData)

        var productCode = searchParams.get("productCode")
        console.log(productCode)

        var apiurl = fetchApiUrl + productCode
        console.log(apiurl)

        const resp = await axios.get(apiurl);
        console.log(resp)
        const data = await resp.data;

        console.log(data)

        // Assign value to productsData
        var tProductData = data
        setProductData(tProductData);
    }

    const getQuantityValue = (quantityValue:number) => {
        setQuantityValue(quantityValue)
    }

    useEffect(() => {
        fetchData().catch(console.error);
    }, [])
    useEffect(() => {
    }, [productData, quantityValue])

    var categoryImg = classiccars;
    if(productData.productLine === "Motorcycles"){
        categoryImg = motorcycles;
    }else if(productData.productLine === "Planes"){
        categoryImg = planes;
    }else if(productData.productLine === "Ships"){
        categoryImg = ships;
    }else if(productData.productLine === "Trains"){
        categoryImg = trains;
    }else if(productData.productLine === "Trucks and Buses"){
        categoryImg = trucksandbuses;
    }else if(productData.productLine === "Vintage Cars"){
        categoryImg = vintagecars;
    }

    return (
        <div className={"ProductDetailsBody"}>
            <div className={"ProductDetailsBodyHeader"}>
                Product Details
            </div>
            {isOpen && <PopUp handleClose={() => { togglePopup(); }} headText="Add to cart success" contentText={alertText}></PopUp>}
            <div className={"ProductDetailsLR"}>
                <img className={"ProductDetailsLRImage"} src={categoryImg} alt={categoryImg} ></img>
                <div className={"ProductDetailsLRRight"}>
                    <div className={"ProductDetailsLRRightTexts"}>
                        <div className={""}>
                            <span style={{ fontWeight: 700 }}>Code: </span> {productData.productCode}
                        </div>
                        <div className={""}>
                            <span style={{ fontWeight: 700 }}>Name: </span> {productData.productName}
                        </div>
                        <div className={""}>
                            <span style={{ fontWeight: 700 }}>Line: </span> {productData.productLine}
                        </div>
                        <div className={""}>
                            <span style={{ fontWeight: 700 }}>Scale: </span> {productData.productScale}
                        </div>
                        <div className={""}>
                            <span style={{ fontWeight: 700 }}>Vendor: </span> {productData.productVendor}
                        </div>
                        <div className={""}>
                            <span style={{ fontWeight: 700 }}>Currently in stock: </span> {productData.quantityInStock}
                        </div>
                        <div className={""}>
                            <span style={{ fontWeight: 700 }}>Price: </span> ${productData.MSRP}
                        </div>
                    </div>
                    <div className={"ProductDetailsLRRightButtons"}>
                        <Link to="/cart" style={{ textDecoration: 'none' }}>
                            <Button text={"BUY NOW"}  icon={"shopping_cart_outline"} buttonColor={"yellow"} textColor={"black"} func={() => { }}></Button>
                        </Link>

                        <Quantity startingValue={1} exportValueFunction={getQuantityValue} incrementFunction={()=>{}} decrementFunction={()=>{}}></Quantity>
                        <Button text={"Add to cart"} icon={"shopping_cart_outline"} buttonColor={"yellow"} textColor={"black"} func={() => {
                            addToCart();
                        }}></Button>
                    </div>
                </div>
            </div>
            <div className={"ProductDetailsBot"}>
                {productData.productDescription}
            </div>
        </div>
    )
}

export default ProductDetails