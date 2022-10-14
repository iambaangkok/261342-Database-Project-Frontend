import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/Products.css'
import { Link } from 'react-router-dom';
import Button from '../components/Button';

import img1 from '../images/cc_01.jpg';
import ProductsProductCard from '../components/ProductsProductCard';

type ProductsProductCardProps = {
    id:number,
    name: string,
    scale: string,
    vendor: string,
    quantity: number,
    price:number,
}

const COL = 3;

function Products() {   

    var apiurl = ""
    var productsData: ProductsProductCardProps[] = [
        {id:0,name:"1969 Ford Falcon", scale:"1:12", vendor:"Second Gear Diecast", quantity:1093, price:173.02},
        {id:1,name:"1969 Ford Falcon", scale:"1:12", vendor:"Second Gear Diecast", quantity:1093, price:173.02},
        {id:2,name:"1969 Ford Falcon", scale:"1:12", vendor:"Second Gear Diecast", quantity:1093, price:173.02},
        {id:3,name:"1969 Ford Falcon", scale:"1:12", vendor:"Second Gear Diecast", quantity:1093, price:173.02},
        {id:4,name:"1969 Ford Falcon", scale:"1:12", vendor:"Second Gear Diecast", quantity:1093, price:173.02},
        {id:5,name:"1969 Ford Falcon", scale:"1:12", vendor:"Second Gear Diecast", quantity:1093, price:173.02},
        {id:6,name:"1969 Ford Falcon", scale:"1:12", vendor:"Second Gear Diecast", quantity:1093, price:173.02},
        {id:7,name:"1969 Ford Falcon", scale:"1:12", vendor:"Second Gear Diecast", quantity:1093, price:173.02},
        {id:8,name:"1969 Ford Falcon", scale:"1:12", vendor:"Second Gear Diecast", quantity:1093, price:173.02},
        {id:9,name:"1969 Ford Falcon", scale:"1:12", vendor:"Second Gear Diecast", quantity:1093, price:173.02},
        {id:10,name:"1969 Ford Falcon", scale:"1:12", vendor:"Second Gear Diecast", quantity:1093, price:173.02},
        {id:11,name:"1969 Ford Falcon", scale:"1:12", vendor:"Second Gear Diecast", quantity:1093, price:173.02},
    ];

    const fetchData = async () => {
        const resp = await axios.get(apiurl);
        const data = resp.data;

        // Assign value to productsData
        // productsData = resp.data;
    }

    useEffect(() => {
        // fetchData().catch(console.error);
    }, [])


    return (
        <div className={"ProductsBody"}>
            <div className={"ProductsHeaderContainer"}>
                Our Models
            </div>
            <div className={"ProductsProductsContainer"}>
                <div className={"ProductsProductsRow"}>
                    {productsData.slice(0,1*COL).map((x) => {
                        return <ProductsProductCard key={x.id} name={x.name} scale={x.scale} vendor={x.vendor} quantity={x.quantity} price={x.price}/>
                    })}
                </div>
                <div className={"ProductsProductsRow"}>
                    {productsData.slice(1*COL,2*COL).map((x) => {
                        return <ProductsProductCard key={x.id} name={x.name} scale={x.scale} vendor={x.vendor} quantity={x.quantity} price={x.price}/>
                    })}
                </div>
                <div className={"ProductsProductsRow"}>
                    {productsData.slice(2*COL,3*COL).map((x) => {
                        return <ProductsProductCard key={x.id} name={x.name} scale={x.scale} vendor={x.vendor} quantity={x.quantity} price={x.price}/>
                    })}
                </div>
                <div className={"ProductsProductsRow"}>
                    {productsData.slice(3*COL,4*COL).map((x) => {
                        return <ProductsProductCard key={x.id} name={x.name} scale={x.scale} vendor={x.vendor} quantity={x.quantity} price={x.price}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products