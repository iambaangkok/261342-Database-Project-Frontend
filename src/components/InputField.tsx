import '../css/InputField.css'

type Text = {
    textL: string,
    textR: string
}

function InputField({textL,textR} : Text) {
    return (
        <div className={"InputField"}>
            <div className='Text'>
                <div className='TextLeft'>
                    {textL}
                </div>
                <div className='TextRight'>
                    {textR}
                </div>
            </div>
            <input className='Field'>
                    
            </input>
        </div >
    )
}

export default InputField