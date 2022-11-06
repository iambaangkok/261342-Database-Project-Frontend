import { useState, useEffect } from 'react';
import '../css/Quantity.css'

type QuantityType = {
    startingValue:number,
    exportValueFunction:Function,
    incrementFunction:Function,
    decrementFunction:Function
}

function Quantity(props:QuantityType) {

    const [value, setValue] = useState<number>(1)

    const updateValue = () =>{
        setValue(props.startingValue)
    }

    const increment = () => {
        setValue(value+1)
        props.exportValueFunction(value)
    }

    const decrement = () => {
        setValue(value-1 > 1 ? value-1 : 1)
        props.exportValueFunction(value)
    }

    useEffect(() => {
        props.exportValueFunction(value)
        updateValue()
    }, [])

    useEffect(()=>{updateValue()},[props.startingValue])

    useEffect(() => {
        props.exportValueFunction(value)
    }, [value])

    return (
        <div>
            <div className="quantity-input">
                <button className="quantity-input__modifier quantity-input__modifier--left" onClick={() => {
                    decrement();
                    props.decrementFunction();
                }}>
                    &mdash;
                </button>
                <input className="quantity-input__screen" type="text" value={value} readOnly/>
                <button className="quantity-input__modifier quantity-input__modifier--right" onClick={() => {
                    increment();
                    props.incrementFunction();
                }}>
                    &#xff0b;
                </button>
            </div>
        </div>
    );
}

export default Quantity;