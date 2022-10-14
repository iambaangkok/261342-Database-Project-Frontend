import '../css/Cart.css'
import axios from 'axios'
import Button from '../components/Button';
import { useEffect } from 'react';

function Cart(){
    var apiurl = ""
    const fetchData = async () => {
        const resp = await axios.get(apiurl);
        const data = resp.data;

    }

    useEffect(() => {
        // fetchData().catch(console.error);
    }, [])

    return(
        <div className="CartContainer">
            <div className="CartBody">
                <div className="HeadContainer">
                    <div className='Text'>My Cart</div>
                </div>

                <div className='CartItem'>
                    <div className="ColumNames">
                        <div className='Left'>
                            <div className='TextProduct'>
                                Product
                            </div>
                        </div>
                        <div className='Right'>
                            <div className='TextFrame'>
                                <div className='Text'>
                                    Unit Price
                                </div>
                            </div>
                            <div className='TextFrame'>
                                <div className='Text'>
                                    Quantity
                                </div>
                            </div>
                            <div className='TextFrame'>
                                <div className='Text'>
                                    Total Price
                                </div>
                            </div>
                            <div className='TextFrame'>
                                <div className='Text'>
                                    Action
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='SubTotal'>
                        <div className='Top'>
                            <div className='SubTotalText'>
                                SubTotal: 
                            </div>
                            <div className="SubTotalNumber">
                                $ 455555
                            </div>
                        </div>
                        <div className='Bottom'>
                            <div className='Frame'>
                                <Button text={"Check Out"} icon={""} buttonColor={"yellow"} textColor={"black"} func={()=>{}}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart