import '../css/SearchBar.css'
import Button from './Button'


function SearchBar() {

    return (
        <div className={"SearchBar"}>
            <div className="SearchBoxContainer">
                <div className="SearchBox">
                    
                </div>
            </div>
            <Button text={""} icon={"search_outline"} buttonColor={"white"} textColor={"black"} ></Button>
        </div >
    )
}

export default SearchBar