import React, { useState } from 'react';
import { BiSearch } from "react-icons/bi"; // Import search icon
import './index.css'; // Import CSS file for styling

interface SearchBarProps {
    onSearch: (searchTerm: string) => void; // Function to handle search
}

// SearchBar component
function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm.trim()); // Pass search term to parent component
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-btn">
        <BiSearch />
      </button>
    </div>
  );
}

export default SearchBar;