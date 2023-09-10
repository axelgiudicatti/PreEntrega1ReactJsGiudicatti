import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import CartWidget from "./CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <li>
          <img className="header__logo" src="/logo face.webp" />
        </li>
      </Link>
      <ul>
        <Link to="/category/LATAS">
          <li> Latas </li>
        </Link>
        <Link to="/category/BARRILES">
          <li> Barriles</li>
        </Link>
        <Link to="/category/BEERTRUCKS">
          <li> Beertruck</li>
        </Link>
        <Link to="/cart">
          <li>
            12
            <CartWidget />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
