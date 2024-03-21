import SearchNav from "../SearchNav"

function ShoppingCart() {
    return(
        <div>
        <SearchNav/>
        {/* we need to access list of cards added to cart */}
        <h2>Items in your cart</h2>
        </div>
    )
}
export default ShoppingCart