import '../css/Cart.css'
import Button from '../components/Button';

function Cart(){
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
                            <div className='SubtotalText'>
                                SubTotal: 
                            </div>
                            <div className="SubtotalNumber">
                                $ 455555
                            </div>
                        </div>
                        <div className='Bottom'>
                            <div className='Frame'>
                                <Button text={"Check Out"} icon={""} buttonColor={"yellow"} textColor={"black"} ></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart