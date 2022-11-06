import { useState, useEffect } from 'react';
import '../css/Quantity.css'

type QuantityType = {
    exportValueFunction:Function
}

function Quantity(props:QuantityType) {

    const [value, setValue] = useState<number>(1)

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
    }, [])

    useEffect(() => {
    }, [value])

    return (
        <div>
            <div className="quantity-input">
                <button className="quantity-input__modifier quantity-input__modifier--left" onClick={decrement}>
                    &mdash;
                </button>
                <input className="quantity-input__screen" type="text" value={value} readOnly/>
                <button className="quantity-input__modifier quantity-input__modifier--right" onClick={increment}>
                    &#xff0b;
                </button>
            </div>
        </div>
    );
}

export default Quantity;