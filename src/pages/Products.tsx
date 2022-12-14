import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/Products.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

function Products() {

    var location = useLocation();   
    var navigate = useNavigate();

    const [productsData, setProductsData] = useState<ProductsProductCardProps[]>([
        // { productCode: "CODE",  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        // { productCode: "CODE",  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
        // { productCode: "CODE",  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0},
    ])

    const [productLines, setProductLines] = useState<string>("");

    const [apiurl, setApiurl] = useState("http://127.0.0.1:8000/api/products?page=1");

    const [prevPageUrl, setPrevPageUrl] = useState("");
    const [pageUrl, setPageUrl] = useState("http://127.0.0.1:3000/api/products?page=1");
    const [nextPageUrl, setNextPageUrl] = useState("");

    const [links, setLinks] = useState();

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
    }, [apiurl, prevPageUrl, nextPageUrl, productsData, productLines])

    return (
        <div className={"ProductsBody"}>
            <div className={"ProductsHeaderContainer"}>
                Our Models <br></br>
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
            <div className="ProductsPageNav">
                {prevPageUrl !== null ?
                    <Button text={""} icon={"arrow_back"} buttonColor={"white"} textColor={"black"} func={()=>{
                        setApiurl(prevPageUrl)
                        navigate(String(prevPageUrl).replace("http://127.0.0.1:8000/api/products",""));
                    }}></Button>
                    :<Button text={""} icon={"arrow_back"} buttonColor={"white"} textColor={"white"} func={()=>{
                    }}></Button>}
                {nextPageUrl !== null ?
                    <Button text={""} icon={"arrow_forward"} buttonColor={"white"} textColor={"black"} func={()=>{
                        setApiurl(nextPageUrl)
                        navigate(String(nextPageUrl).replace("http://127.0.0.1:8000/api/products",""));
                    }}></Button>
                    :<Button text={""} icon={"arrow_forward"} buttonColor={"white"} textColor={"white"} func={()=>{
                    }}></Button>}
            </div>
        </div>
    )
}

export default Products