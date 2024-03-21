import { useState } from "react"
import LOListings from "../../BasicComp/LOListings"
import db from "../../Database"
function Favorites() {
    const [favorites, setFavorites] = useState<any[]>(db.favorites)
    return(
        <div>
            <LOListings listings={favorites}/>
        </div>
    )
}
export default Favorites