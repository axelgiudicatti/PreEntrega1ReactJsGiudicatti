import "../Navbar/Navbar.css";
import CartWidget from "./CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav>
      <li>
        <img className="header__logo" src="/logo face.webp" />
      </li>
      <ul>
        <li> Latas</li>
        <li> Barriles</li>
        <li> Beertruck</li>
        <li>
          12
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
