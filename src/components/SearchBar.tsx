import { Link } from 'react-router-dom'
import '../css/SearchBar.css'
import Button from './Button'


function SearchBar() {

    return (
        <div >
            <form className={"SearchBar"}
            action="submit" method="get">
                <div className="SearchBoxContainer">
                    <input className="SearchBox" >

                    </input>
                </div>
                <Link to="/search">
                    <Button text={""} icon={"search_outline"} buttonColor={"white"} textColor={"black"} ></Button>
                </Link>
            </form>
        </div >
    )
}

export default SearchBar