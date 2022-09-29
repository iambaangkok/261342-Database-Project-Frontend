import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/Navbar.css'
import Brand from './Brand';
import Button from './Button';

type NavbarProps={
    variant:"solid-black" | "transparent-white",
}

function Navbar({variant}:NavbarProps){

    useEffect(() => {
    }, [])

    var LineClass = "Line Line-" + ((variant === 'solid-black')? "black":"white")
    return(
        <div className={'Navbar Navbar-'+variant+" ES-drop-shadow-blur-6"}>
            <div className='NavbarLeft'>
                <Button text={"home"}></Button>
                <Button text={"products"}></Button>
                <Button text={"my cart"}></Button>
                <div className={LineClass}></div>
            </div>
            <Brand variant={variant}></Brand>
            <div className='NavbarRight'>
                <div className={LineClass}></div>
                <Button text={"sign-up"}></Button>
                <Button text={"login"}></Button>
                <div className={"Divider Divider-" + ((variant === 'solid-black')? "black":"white")}></div>
                <Button text={"start shopping"}></Button>
            </div>
        </div>
    )
}

export default Navbar