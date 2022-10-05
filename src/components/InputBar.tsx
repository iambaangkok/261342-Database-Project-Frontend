import '../css/SearchBar.css'

type Text = {
    text1: string,
    text2: string,
    text3: string
}

function InputBar({text1,text2,text3} : Text) {
    return (
        <div className="flex">
            <div className='flex-row'>
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
            </div>
            <div className="SearchBoxContainer">
                <input className="SearchBox" ></input>
            </div>
        </div >
    )
}

export default InputBar