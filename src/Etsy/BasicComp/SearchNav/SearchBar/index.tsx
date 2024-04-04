import React, { useEffect, useState } from 'react';
import { BiSearch } from "react-icons/bi";
import './index.css'; 
import axios from 'axios';
import { searchWithTerm } from '../../../util/search_api';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  // const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  // const [apiUsers, setApiUsers] = useState<any[]>([]);

  // const fetchUsers = async () => {
  //   const response = await axios.get("http://localhost:4000/api/allusers");
  //   setApiUsers(response.data);
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const filterItems = (term : any) => { 
  
  //   const filteredItems = apiUsers.filter((user) =>
  //     user.firstName.toLowerCase().includes(String(term).toLowerCase())
  //   );

  //   setFilteredUsers(filteredItems);
  // }

  const handleInputChange = (e : any) => { 
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm)
  }

  const search = (e : any) => {
    const res = searchWithTerm(searchTerm);
    console.log(res)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Type to Search"
        value={searchTerm}
        className="search-input"
        onChange={handleInputChange}
      />
      <button onClick={search}></button>
    </div>
  );
}

export default SearchBar;