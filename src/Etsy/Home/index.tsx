import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import SearchNav from '../BasicComp/SearchNav';
import { EtsyState } from '../store';
import { useSelector } from 'react-redux';

export 
function Home() {
    const currentUser = useSelector((state: EtsyState) => state.UserReducer.user);
    return (
        <div>
            <SearchNav/>
            {currentUser}
        </div>
    );
}

export default Home;