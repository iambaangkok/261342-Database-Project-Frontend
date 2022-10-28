import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/Products.css'
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


    const [links, setLinks] = useState();

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
        <div className={"ProductsBody"}>
            <div className={"ProductsHeaderContainer"}>
                Product Details
            </div>
            <div className={"ProductsProductsContainer"}>

            </div>
        </div>
    )
}

export default ProductDetails