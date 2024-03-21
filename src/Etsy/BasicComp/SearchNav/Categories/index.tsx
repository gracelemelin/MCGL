import { Link} from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
function Categories() {
  const links = ["Acessories", "Arts & Collectibles", "Baby", "Bags & Purses",
  "Bath & Beauty", "Books, Movies, & Music", "Clothing", "Craft Supplies & Tools", 
  "Electronics & Accessories", "Gifts", "Home & Living", "Jewelry"];
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
export default Categories;