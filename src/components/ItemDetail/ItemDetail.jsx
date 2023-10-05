import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../Counter/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./ItemDetail.css";
import { useState } from "react";

const ItemDetail = ({ beer }) => {
  const [isCounter, setIsCounter] = useState(true);
  const { addBeer } = useCartContext();

  const onAdd = (quantity) => {
    addBeer({ ...beer, quantity });
    setIsCounter(false);
  };

  return (
    <div className="itemdetail">
      <h2> Detalles del producto</h2>
      <div className="description">
        <img src={beer.picture} />
        <p>{beer.description}</p>
      </div>
      <div className="lineardetail">
        <h4>{beer.style}</h4>
        <h4>IBU: {beer.IBU}</h4>
        <h4>Alc: {beer.Alc}</h4>
        <h4>SRM: {beer.SRM}</h4>
        <h4>{beer.price}/unidad</h4>
      </div>
      <div className="selector">
        {isCounter ? (
          <ItemCount initial={0} stock={beer.stock} onAdd={onAdd} />
        ) : (
          <>
            <Link to={"/"}>
              <button className="button color--state-bad">Ir al Inicio</button>
            </Link>
            <Link to={"/cart"}>
              <button className="button color--state-ok">Ir al Carrito</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
