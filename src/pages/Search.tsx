import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/Products.css'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../components/Button';

import img1 from '../images/cc_01.jpg';
import ProductsProductCard from '../components/ProductsProductCard';

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

type ProductLineProps = {
    productLine: string,
    textDescription: string,
    htmpDescription: string,
    image: string
}

const COL = 3;

function Search() {

    var navigate = useNavigate();


    const [searchParams, setSearchParams] = useSearchParams();

    const [productsData, setProductsData] = useState<ProductsProductCardProps[]>([
        // { productCode: "CODE",  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        // { productCode: "CODE",  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        // { productCode: "CODE",  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
    ])

    const [productLines, setProductLines] = useState<string>("");

    const fetchData = async () => {
        //// productLines
        const productLinesApiURL = "http://127.0.0.1:8000/api/productlines"
        const resp1 = await axios.get(productLinesApiURL);
        const data1 = await resp1.data;

        console.log(resp1)
        var PLs : ProductLineProps[] = data1;

        var tempPL = ""


        PLs.forEach((e:ProductLineProps) => {
            tempPL += e.productLine + ", "
        });

        setProductLines(tempPL);


        //// productsData
        const fetchDataURL = "http://127.0.0.1:8000/api/search?searchKey="
        const apiURL = fetchDataURL + searchParams.get("searchKey")

        console.log(apiURL)

        const resp = await axios.get(apiURL);
        const data = await resp.data;

        console.log(data)

        setProductsData(data);
    }

    useEffect(() =>{
        fetchData().catch(console.error);
    },[])

    useEffect(() => {
    }, [productsData])

    return (
        <div className={"ProductsBody"}>
            <div className={"ProductsHeaderContainer"}>
                {"Search Key: " + searchParams.get("searchKey")}
                <br></br>
                <div style={{  fontWeight: 400, fontSize: 18, wordWrap:"break-word"}}>{
                    "You can search the following search keys to search that category: "
                } </div>
                <div style={{  fontWeight: 400, fontSize: 18, wordWrap:"break-word"}}>{
                    productLines
                } </div>
            </div>
            <div className={"ProductsProductsContainer"}>
                <div className={"ProductsProductsRow"}>
                    {productsData.slice(0, 1 * COL).map((x, index) => {
                        return <ProductsProductCard key={index} refreshFunction={()=>{fetchData()}} productCode={x.productCode} productName={x.productName} productLine={x.productLine} productScale={x.productScale} productVendor={x.productVendor} productDescription={x.productDescription} quantityInStock={x.quantityInStock} buyPrice={x.buyPrice} MSRP={x.MSRP}/>
                    })}
                </div>
                <div className={"ProductsProductsRow"}>
                    {productsData.slice(1 * COL, 2 * COL).map((x, index) => {
                        return <ProductsProductCard key={index} refreshFunction={()=>{fetchData()}} productCode={x.productCode} productName={x.productName} productLine={x.productLine} productScale={x.productScale} productVendor={x.productVendor} productDescription={x.productDescription} quantityInStock={x.quantityInStock} buyPrice={x.buyPrice} MSRP={x.MSRP}/>
                    })}
                </div>
                <div className={"ProductsProductsRow"}>
                    {productsData.slice(2 * COL, 3 * COL).map((x, index) => {
                        return <ProductsProductCard key={index} refreshFunction={()=>{fetchData()}} productCode={x.productCode} productName={x.productName} productLine={x.productLine} productScale={x.productScale} productVendor={x.productVendor} productDescription={x.productDescription} quantityInStock={x.quantityInStock} buyPrice={x.buyPrice} MSRP={x.MSRP}/>
                    })}
                </div>
                <div className={"ProductsProductsRow"}>
                    {productsData.slice(3 * COL, 4 * COL).map((x, index) => {
                        return <ProductsProductCard key={index} refreshFunction={()=>{fetchData()}} productCode={x.productCode} productName={x.productName} productLine={x.productLine} productScale={x.productScale} productVendor={x.productVendor} productDescription={x.productDescription} quantityInStock={x.quantityInStock} buyPrice={x.buyPrice} MSRP={x.MSRP}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Search