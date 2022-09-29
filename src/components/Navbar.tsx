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
            </div>
            <Brand></Brand>
            <div className='NavbarRight'>

            </div>
        </div>
    )
}

export default Navbar