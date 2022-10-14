import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/Products.css'
import { Link } from 'react-router-dom';
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

    var apiurl = "http://127.0.0.1:8000/products?page=1"
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
        { productCode: 11,  productName: "NAME",  productLine: "LINE", productScale: "SCALE", productVendor: "VENDOR",productDescription: "DESC",quantityInStock: 0,buyPrice: 0,MSRP: 0}
    ])

    const fetchData = async () => {
        const resp = await axios.get(apiurl);
        const data = resp.data;

        // Assign value to productsData
        var tProductsData = data.data
        // for (var i = 0; i < 12; ++i) {
        //     tProductsData[0] = data
        // }
        setProductsData(tProductsData);
    }

    useEffect(() => {
        fetchData().catch(console.error);
    }, [])


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
        </div>
    )
}

export default Products