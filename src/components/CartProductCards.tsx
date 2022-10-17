import img1 from '../images/cc_01.jpg';
import '../css/CartProductCards.css'
import Button from './Button';

type CartProductCardsProps = {
    name: string,
    scale: string,
    vendor: string,
    quantity: number,
    price:number,
    total: number,
    productCode:number
}

function CartProductCards ({name,scale,vendor,quantity,price,total,productCode}:CartProductCardsProps){
 return(
    <div className="CartCard">
        <div className="Left">
            <img className="LeftImage" src={img1} alt={img1}></img>
            <div className='LeftTexts'>
                <div className='Name'>{name}</div>
                <div className='Vendor'>{vendor}</div>
                <div className='Scale'>{scale}</div>
            </div>
        </div>
        <div className="Right">
            <div className='RightFrame'>
                <div className='RightText'>{price}</div>
            </div>
            <div className='RightFrame'>
                <div className='RightText'>{quantity}</div>
            </div>
            <div className='RightFrame'>
                <div className='RightText'>{total}</div>
            </div>
            <div className='RightFrame'>
                <Button text={"Remove"} icon={"remove"} buttonColor={"white"} textColor={"red"} func={()=>{}}></Button>
            </div>
        </div>
    </div>
 )
}
export default CartProductCards