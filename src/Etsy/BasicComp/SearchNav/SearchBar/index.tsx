import { useState } from "react";
import LOListings from "../../LOListings";

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const [listings, setListings] = useState<any[]>();
    
    const handleSearchChange = (e : any) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

    const searchEtsy = () => {
        // call api for listings
        const list = {}
        // <LOListings listings={list}/>
    }

    return(
        <div>
            <input id="bar" type="text" placeholder={"Search for anything"} onChange={handleSearchChange} value={searchInput}></input>
            <button onClick={searchEtsy}>Enter</button>
        </div>
    )
}
export default SearchBar