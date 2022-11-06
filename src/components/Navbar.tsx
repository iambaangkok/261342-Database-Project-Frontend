import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/Navbar.css'
import Brand from './Brand';
import Button from './Button';
import SearchBar from './SearchBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';


function Navbar() {

    const useMatchPath = (path:string) =>{
        let location = useLocation();
        var pagePath =  location.pathname;
        return pagePath.startsWith(path);
    }

    const useMatchPathExact = (path:string) =>{
        let location = useLocation();
        var pagePath =  location.pathname;
        return pagePath == (path);
    }

    useEffect(() => {

    }, [])


    return (
        <div className={"Navbar"}>
            <div className={"BrandContainer"}>
                <Brand></Brand>
            </div>
            <div className="ButtonContainer">
                <div className="Left">
                    <Link to="/">
                        <Button text={"Home"} icon={""} buttonColor={"white"} textColor={useMatchPathExact("/") ? "yellow" : "black"} 
                        func={()=>{}}></Button>
                    </Link>
                    <Link to="/products">
                        <Button text={"Products"} icon={""} buttonColor={"white"} textColor={useMatchPath("/products") ? "yellow" : "black"}
                        func={()=>{}}></Button>
                    </Link>
                    <Link to="/orders">
                        <Button text={"My Orders"} icon={""} buttonColor={"white"} textColor={useMatchPath("/orders") ? "yellow" : "black"}
                        func={()=>{}}></Button>
                    </Link>

                </div>
                <div className="Right">
                    <SearchBar></SearchBar>
                    <Link to="/login">
                        <Button text={""} icon={"person"} buttonColor={"white"} textColor={useMatchPath("/login") ? "yellow" : "black"} func={()=>{}}></Button>
                    </Link>
                    <Link to="/cart">
                        <Button text={""} icon={"shopping_cart_outline"} buttonColor={"white"} textColor={useMatchPath("/cart") ? "yellow" : "black"} func={()=>{}}></Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar