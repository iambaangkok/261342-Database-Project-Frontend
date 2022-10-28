import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/ProductDetails.css'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Button from '../components/Button';

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


function ProductDetails() {

    var location = useLocation();
    var navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [productData, setProductData] = useState<ProductsProductCardProps>(
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
        },
    )

    const [apiurl, setApiurl] = useState("http://127.0.0.1:8000/api/productdetails?productCode=");


    const addToCart = async () => {
        var url = "http://127.0.0.1:8000/addToCart/"
        var resp = await axios.post(url + productData.productCode);
        return resp.data;
    }

    const fetchData = async () => {
        var productCode = searchParams.get("productCode")
        console.log(productCode)

        var tApiurl = apiurl + productCode
        console.log(tApiurl)

        const resp = await axios.get(tApiurl);
        const data = await resp.data;

        console.log(data)

        // Assign value to productsData
        var tProductData = data.data
        setProductData(tProductData);
    }

    useEffect(() => {
        fetchData().catch(console.error);
    }, [])



    return (
        <div className={"ProductDetailsBody"}>
            <div className={"ProductDetailsBodyHeader"}>
                Product Details
            </div>
            <div className={"ProductDetailsLR"}>
                <img className={"ProductDetailsLRImage"} src={img1} alt={img1} ></img>
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
                        <Link to="/cart">
                            <Button text={"BUY NOW"} icon={"shopping_cart_outline"} buttonColor={"yellow"} textColor={"black"} func={() => { }}></Button>
                        </Link>
                        <Button text={"Add to cart"} icon={"shopping_cart_outline"} buttonColor={"yellow"} textColor={"black"} func={() => {
                            addToCart();
                        }}></Button>
                    </div>
                </div>
            </div>
            <div className={"ProductDetailsBot"}>
                {productData.productCode}
            </div>
        </div>
    )
}

export default ProductDetails