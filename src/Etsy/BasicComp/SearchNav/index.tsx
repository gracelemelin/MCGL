import React, { useState } from 'react';
import Categories from './Categories';
import SearchBar from './SearchBar';
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import LOListings from '../LOListings';
import { BiLogoEtsy } from "react-icons/bi";
import db from '../../Database';
import './index.css'; 
import { useNavigate } from 'react-router-dom'; 
function SearchNav() {
    const [listings, setListings] = useState<any[]>(db.listings);
    const navigate = useNavigate(); 
    
    const handleSearch = async (searchTerm: any) => {
      try {
        const response = await fetch(`https://api.example.com/search?term=${searchTerm}`);
        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }
        const searchData = await response.json();
        console.log("Search results:", searchData);
      } catch (error) {
        console.error("Error during search:", error);
      }
    };

    const goToFavorites = () => {
        // Navigate to favorites page
        navigate("/favorites");
    };

    const goToAccount = () => {
        // Navigate to account page
        navigate("/Account");
    };

    const goToCart = () => {
        // Navigate to cart page
        navigate("/cart");
    };

    const goToHome = () => {
      //Navigate to home page
      navigate("/Home");
    }


    return (
        <nav className="navbar search-nav" style={{width: 500}}>
            <div className="navbar-container">
                <div className="navbar-brand"><BiLogoEtsy onClick={goToHome} /></div>
                <div className='ms-1 me-1'>
                <Categories />
                <SearchBar />
                </div>
                <div className="navbar-icons">
                    <AiOutlineHeart className="navbar-icon" onClick={goToFavorites} />
                    <MdAccountCircle className="navbar-icon" onClick={goToAccount} />
                    <BsCart2 className="navbar-icon" onClick={goToCart} />
                </div>
            </div>
        </nav>
    );
}

export default SearchNav;