import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/Products.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

import img1 from '../images/cc_01.jpg';
import ProductsProductCard from '../components/ProductsProductCard';

type ProductsProductCardProps = {
    productCode: number,
    productName: string,
    productLine: string,
    productScale: string,
    productVendor: string,
    productDescription: string,
    quantityInStock: number,
    buyPrice: number,
    MSRP: number,
}

const COL = 3;

function Products() {

    var location = useLocation();
    var navigate = useNavigate();

    const [productsData, setProductsData] = useState([
        { productCode: 0,  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        { productCode: 1,  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        { productCode: 2,  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        { productCode: 3,  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        { productCode: 4,  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        { productCode: 5,  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        { productCode: 6,  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        { productCode: 7,  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        { productCode: 8,  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        { productCode: 9,  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        { productCode: 10,  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        { productCode: 11,  productName: "NAME  ",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0}
    ])

    const [apiurl, setApiurl] = useState("http://127.0.0.1:8000/products?page=1");

    const [prevPageUrl, setPrevPageUrl] = useState("");
    const [pageUrl, setPageUrl] = useState("http://127.0.0.1:3000/products?page=1");
    const [nextPageUrl, setNextPageUrl] = useState("");

    const [links, setLinks] = useState();

    const fetchData = async () => {
        const resp = await axios.get(apiurl);
        const data = await resp.data;

        setPrevPageUrl(data.prev_page_url);
        setNextPageUrl(data.next_page_url);

        console.log("prev " + data.prev_page_url)
        console.log("next " + data.next_page_url)

        setLinks(data.links);

        console.log(data)

        // Assign value to productsData
        var tProductsData = data.data
        setProductsData(tProductsData);
    }

    useEffect(() =>{
        fetchData().catch(console.error);
    },[apiurl])

    useEffect(() => {
        console.log(prevPageUrl)
        console.log(nextPageUrl)
    }, [apiurl, prevPageUrl, nextPageUrl])

    return (
        <div className={"ProductsBody"}>
            <div className={"ProductsHeaderContainer"}>
                Our Models
            </div>
            <div className={"ProductsProductsContainer"}>
                <div className={"ProductsProductsRow"}>
                    {productsData.slice(0, 1 * COL).map((x) => {
                        return <ProductsProductCard key={x.productCode} name={x.productName} scale={x.productScale} vendor={x.productVendor} quantity={x.quantityInStock} price={x.MSRP} />
                    })}
                </div>
                <div className={"ProductsProductsRow"}>
                    {productsData.slice(1 * COL, 2 * COL).map((x) => {
                        return <ProductsProductCard key={x.productCode} name={x.productName} scale={x.productScale} vendor={x.productVendor} quantity={x.quantityInStock} price={x.MSRP} />
                    })}
                </div>
                <div className={"ProductsProductsRow"}>
                    {productsData.slice(2 * COL, 3 * COL).map((x) => {
                        return <ProductsProductCard key={x.productCode} name={x.productName} scale={x.productScale} vendor={x.productVendor} quantity={x.quantityInStock} price={x.MSRP} />
                    })}
                </div>
                <div className={"ProductsProductsRow"}>
                    {productsData.slice(3 * COL, 4 * COL).map((x) => {
                        return <ProductsProductCard key={x.productCode} name={x.productName} scale={x.productScale} vendor={x.productVendor} quantity={x.quantityInStock} price={x.MSRP} />
                    })}
                </div>
            </div>
            <div className="ProductsPageNav">
                {prevPageUrl !== null ?
                    <Button text={""} icon={"arrow_back"} buttonColor={"white"} textColor={"black"} func={()=>{
                        setApiurl(prevPageUrl)
                        navigate(String(prevPageUrl).replace("http://127.0.0.1:8000/products",""));
                    }}></Button>
                :""}
                {nextPageUrl !== null ?
                    <Button text={""} icon={"arrow_forward"} buttonColor={"white"} textColor={"black"} func={()=>{
                        setApiurl(nextPageUrl)
                        navigate(String(nextPageUrl).replace("http://127.0.0.1:8000/products",""));
                    }}></Button>
                    
                :""}
            </div>
        </div>
    )
}

export default Products