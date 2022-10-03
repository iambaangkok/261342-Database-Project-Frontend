import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/Navbar.css'
import Brand from './Brand';
import Button from './Button';
import SearchBar from './SearchBar';


function Navbar(){


    return(
        <div className={"Navbar"}>
            <div className={"BrandContainer"}>
                <Brand></Brand>
            </div>
            <div className="ButtonContainer">
                <div className="Left">
                    <Button text={"Home"} icon={""} buttonColor={"white"} textColor={"yellow"} ></Button>
                    <Button text={"Products"} icon={""} buttonColor={"white"} textColor={"black"} ></Button>
                    <Button text={"My Orders"} icon={""} buttonColor={"white"} textColor={"black"} ></Button>
                </div>
                <div className="Right">
                    <SearchBar></SearchBar>
                    <Button text={""} icon={"person"} buttonColor={"white"} textColor={"black"} ></Button>
                    <Button text={""} icon={"shopping_cart_outline"} buttonColor={"white"} textColor={"black"} ></Button>

                </div>
            </div>
        </div>
    )
}

export default Navbar