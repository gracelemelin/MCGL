import React, { useState } from 'react'
import Categories from './Categories'
import SearchBar from './SearchBar'
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import LOListings from '../LOListings';
import db from '../../Database';

function SearchNav() {
    const [listings, setListings] = useState<any[]>(db.listings)
    return (
        <div>
            <h1>Company name -- Catagories -- search bar -- favs -- acc -- cart</h1>
            <Categories/>
            <SearchBar/>
            <AiOutlineHeart />
            <MdAccountCircle />
            <BsCart2 />
        </div>
    )
}
export default SearchNav