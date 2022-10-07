import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/Home.css'
import { Link } from 'react-router-dom';
import Button from '../components/Button';

import img1 from '../images/cc_01.jpg';
import img2 from '../images/p_01.jpg';
import img3 from '../images/cc_02.jpg';


function Home() {


    return (
        <div className={"HomeBody"}>
            <div className={"FeaturedProduct"}>
                <div className={"HomeText"}>
                    <div className={"Container"}>
                        <div className={"Title"}>
                            1952 Alpine Renault 1300
                        </div>
                        <div className={"Bottom"}>
                            <div className={"Description"}>
                                Starting at $134.99
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
                            1929 Texaco Curtiss Robin
                        </div>
                        <div className={"Bottom"}>
                            <div className={"Description"}>
                                Starting at $61.99
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
                            1936 Mercedes 500K Roadster
                        </div>
                        <div className={"Bottom"}>
                            <div className={"Description"}>
                                Starting at $50.99
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