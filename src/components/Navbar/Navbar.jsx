import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartWidget from "./CartWidget/CartWidget";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const { cartQuantity } = useCartContext();
  return (
    <>
      <nav>
        <Link to="/">
          <li>
            <img className="header__logo" src="/logo face.webp" />
          </li>
        </Link>
        <ul className="ul">
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
              {cartQuantity()}
              <CartWidget />
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
