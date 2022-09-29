import { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/Navbar.css'
import Brand from './Brand';
import Button from './Button';

function Navbar(){

    useEffect(() => {
    }, [])

    return(
        <div className='Navbar Navbar-solidblack'>
            <div className='NavbarLeft'>
                <Button text={"home"}></Button>
                <Button text={"products"}></Button>
                <Button text={"my cart"}></Button>
                <div className='Line Line-black'></div>
            </div>
            <Brand></Brand>
            <div className='NavbarRight'>
                <div className='Line Line-black'></div>
                <Button text={"sign-up"}></Button>
                <Button text={"login"}></Button>
                <div className='Divider Divider-black'></div>
                <Button text={"start shopping"}></Button>
            </div>
        </div>
    )
}

export default Navbar