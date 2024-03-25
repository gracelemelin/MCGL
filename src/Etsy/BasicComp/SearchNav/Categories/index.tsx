import { Link} from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
import { useState } from "react";

function Categories() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const trueDropdown = () => {
    setShowDropdown(true);
  };
  
  
  const links = ["Acessories", "Arts & Collectibles", "Baby", "Bags & Purses",
  "Bath & Beauty", "Books, Movies, & Music", "Clothing", "Craft Supplies & Tools", 
  "Electronics & Accessories", "Gifts", "Home & Living", "Jewelry"];

  return (
    <div className="navbar-dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <span className="navbar-dropdown-toggle">Categories</span>
      {showDropdown && (
        <div className="navbar-dropdown-content" onMouseEnter={trueDropdown} onMouseLeave={trueDropdown}>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Categories;