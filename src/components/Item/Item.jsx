import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Item.css";
import { useState } from "react";

const Item = ({ birra }) => {
  return (
    <Card className="card mb-2 color--green" style={{ width: "23vw" }}>
      <Card.Img variant="top" src={birra.foto} />
      <Card.Body className="cardbody">
        <h3 className="text-light ">{birra.estilo}</h3>
        <p className="text-light">
          Precio: {birra.price} || Stock: {birra.stock}
        </p>
        <Link className="button color--state-ok" to={`/detalle/${birra.id}`}>
          <Button className="button color--state-ok">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
