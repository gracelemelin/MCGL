import React from 'react'
import WishlistNav from './WishlistNav'
import About from './About'
import Favorites from "./Favorites"
function Profile() {
    return (
        <div>
            <h1>User name</h1>
            <a href='/editprofile'> Edit public profile </a>
            <About/>
            <WishlistNav/>
            <Favorites/>
        </div>
    )
}
export default Profile