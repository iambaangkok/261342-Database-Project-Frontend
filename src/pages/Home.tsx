import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/Home.css'
import { Link } from 'react-router-dom';
import Button from '../components/Button';

import img1 from '../images/cc_01.jpg';
import img2 from '../images/p_01.jpg';
import img3 from '../images/cc_02.jpg';



function Home() {   

    var apiurl = ""
    var names = ["1952 Alpine Renault 1300", "1929 Texaco Curtiss Robin", "1936 Mercedes 500K Roadster"]
    var prices = [134.99, 61.99, 50.99]

    const fetchData = async () => {
        const resp = await axios.get(apiurl);
        const data = resp.data;

        // un-comment these once API is ready to be fetched
        // names[0] = data.products[0].name
        // names[1] = data.products[1].name
        // names[2] = data.products[2].name

        // prices[0] = data.products[0].price
        // prices[1] = data.products[1].price
        // prices[2] = data.products[2].price
    }

    useEffect(() => {
        // fetchData().catch(console.error);
    }, [])


    return (
        <div className={"HomeBody"}>
            <div className={"FeaturedProduct"}>
                <div className={"HomeText"}>
                    <div className={"Container"}>
                        <div className={"Title"}>
                            {names[0]}
                        </div>
                        <div className={"Bottom"}>
                            <div className={"Description"}>
                                {"Starting at $" + prices[0]}
                            </div>
                            <Link to="/product/productId">
                                <Button text={"see more details"} icon={""} buttonColor={"black"} textColor={"white"} ></Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={"Image"}>
                    <img className={"ActualImage"} src={img1} alt={img1} ></img>
                </div>
            </div>
            <div className={"FeaturedProduct"}>
                <div className={"Image"}>
                    <img className={"ActualImage"} src={img2} alt={img2} ></img>
                </div>
                <div className={"HomeText"}>
                    <div className={"Container"}>
                        <div className={"Title"}>
                            {names[1]}
                        </div>
                        <div className={"Bottom"}>
                            <div className={"Description"}>
                                {"Starting at $" + prices[1]}
                            </div>
                            <Link to="/product/productId">
                                <Button text={"see more details"} icon={""} buttonColor={"black"} textColor={"white"} ></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"FeaturedProduct"}>
                <div className={"HomeText"}>
                    <div className={"Container"}>
                        <div className={"Title"}>
                            {names[2]}
                        </div>
                        <div className={"Bottom"}>
                            <div className={"Description"}>
                                {"Starting at $" + prices[2]}
                            </div>
                            <Link to="/product/productId">
                                <Button text={"see more details"} icon={""} buttonColor={"black"} textColor={"white"} ></Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={"Image"}>
                    <img className={"ActualImage"} src={img3} alt={img3} ></img>
                </div>
            </div>
        </div>
    )
}

export default Home