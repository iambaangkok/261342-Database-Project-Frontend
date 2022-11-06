import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/Home.css'
import { Link } from 'react-router-dom';
import Button from '../components/Button';

// import img1 from '../images/cc_01.jpg';
// import img2 from '../images/p_01.jpg';
// import img3 from '../images/cc_02.jpg';

import classiccars from '../images/classiccars.jpg';
import motorcycles from '../images/motorcycles.jpg';
import planes from '../images/planes.jpg';
import ships from '../images/ships.jpg';
import trains from '../images/trains.jpg';
import trucksandbuses from '../images/trucksandbuses.jpg';
import vintagecars from '../images/vintagecars.jpg';



function Home() {   

    var apiurl = "http://127.0.0.1:8000/api/Random_product_3"
    const [productCodes, setProductCodes] = useState(["A","B","C"])
    const [names, setNames] = useState(["1952 Alpine Renault 1300", "1929 Texaco Curtiss Robin", "1936 Mercedes 500K Roadster"]) 
    const [prices, setPrices] = useState([134.99, 61.99, 50.99])
    const [lines, setLines] = useState<string[]>(["","",""])

    const fetchData = async () => {
        const resp = await axios.get(apiurl);
        const data = resp.data;
        console.log(resp)
        console.log(data)
        
        var tProductCodes = ["","",""]
        tProductCodes[0] = data[0].productCode
        tProductCodes[1] = data[1].productCode
        tProductCodes[2] = data[2].productCode
        setProductCodes(tProductCodes)

        var tNames = ["","",""]
        tNames[0] = data[0].productName
        tNames[1] = data[1].productName
        tNames[2] = data[2].productName
        setNames(tNames)

        var tLines = ["","",""]
        tLines[0] = data[0].productLine
        tLines[1] = data[1].productLine
        tLines[2] = data[2].productLine
        setLines(tLines)

        var tPrices = [0,0,0]
        tPrices[0] = data[0].MSRP
        tPrices[1] = data[1].MSRP
        tPrices[2] = data[2].MSRP
        setPrices(tPrices)
    }

    const addToCart = async (productCode:string) =>{

        var url = "http://127.0.0.1:8000/api/addToCart"

        if(localStorage.getItem("Token") === null){
            window.location.href = "http://127.0.0.1:3000/login"
            return;
        }else{
            var body = {
                productCode:productCode,
                remember_token: JSON.parse(localStorage.getItem("Token")!),
                quantity:1
            }
            
            console.log(body)
            
            var resp = await axios.post(url, body);
            // setUpdateComponent(!updateComponent)

            return resp.data;
        }
    }

    useEffect(() => {
        fetchData().catch(console.error);
    }, [])

    const getCatImg = (pl:string) =>{
        var categoryImg = classiccars;
        if(pl === "Motorcycles"){
            categoryImg = motorcycles;
        }else if(pl === "Planes"){
            categoryImg = planes;
        }else if(pl === "Ships"){
            categoryImg = ships;
        }else if(pl === "Trains"){
            categoryImg = trains;
        }else if(pl === "Trucks and Buses"){
            categoryImg = trucksandbuses;
        }else if(pl === "Vintage Cars"){
            categoryImg = vintagecars;
        }

        return categoryImg
    }

    


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
                            <Link to={"/product?productCode="+productCodes[0]} style={{ textDecoration: 'none' }}>
                                <Button text={"see more details"} icon={""} buttonColor={"black"} textColor={"white"} func={()=>{addToCart(productCodes[0])}}></Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={"Image"}>
                    <img className={"ActualImage"} src={getCatImg(lines[0])} alt={getCatImg(lines[0])} ></img>
                </div>
            </div>
            <div className={"FeaturedProduct"}>
                <div className={"Image"}>
                    <img className={"ActualImage"} src={getCatImg(lines[1])} alt={getCatImg(lines[1])} ></img>
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
                            <Link to={"/product?productCode="+productCodes[1]} style={{ textDecoration: 'none' }}>
                                <Button text={"see more details"} icon={""} buttonColor={"black"} textColor={"white"} func={()=>{addToCart(productCodes[1])}}></Button>
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
                            <Link to={"/product?productCode="+productCodes[2]} style={{ textDecoration: 'none' }}>
                                <Button text={"see more details"} icon={""} buttonColor={"black"} textColor={"white"} func={()=>{addToCart(productCodes[2])}}></Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={"Image"}>
                    <img className={"ActualImage"} src={getCatImg(lines[2])} alt={getCatImg(lines[2])} ></img>
                </div>
            </div>
        </div>
    )
}

export default Home