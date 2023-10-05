import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ beer }) => {
  return (
    <Card className="card mb-2 color--green" style={{ width: "23vw" }}>
      <Card.Img variant="top" src={beer.picture} />
      <Card.Body className="cardbody">
        <h3 className="text-light ">{beer.style}</h3>
        <p className="text-light">
          Precio: {beer.price} || Stock: {beer.stock}
        </p>
        <Link className="button color--state-ok" to={`/detalle/${beer.id}`}>
          <button className="button color--state-ok">Detalles</button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
