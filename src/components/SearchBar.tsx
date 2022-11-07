import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import '../css/SearchBar.css'
import Button from './Button'


function SearchBar() {

    const useMatchPath = (path:string) =>{
        let location = useLocation();
        var pagePath =  location.pathname;
        return pagePath.startsWith(path);
    }

    const [searchKey, setSearchKey] = useState<string>("");

    const navigateToSearch = async () =>{
        var url = "http://127.0.0.1:3000/search?searchKey=" + searchKey
        window.location.href = url
    }


    return (
        <div >
            <form className={"SearchBar"}
            action="submit" method="get"
            onSubmit={e => { e.preventDefault(); }}>
                <div className="SearchBoxContainer">
                    <input className="SearchBox" onChange={(e) => setSearchKey(e.target.value)} onKeyPress={event => {
                if (event.key === 'Enter') {
                    navigateToSearch()
                }
              }}>

                    </input>
                </div>
                <Button text={""} icon={"search_outline"} buttonColor={"white"} textColor={useMatchPath("/search") ? "yellow" : "black"} func={()=>{navigateToSearch()}}></Button>
            </form>
        </div >
    )
}

export default SearchBar