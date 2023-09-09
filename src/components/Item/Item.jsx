import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Item.css";
import { useState } from "react";

const Item = ({ birra }) => {
  return (
    <Card
      key={birra.id}
      className="card mb-2 color--green"
      style={{ width: "23vw" }}
    >
      <Card.Img variant="top" src={birra.foto} />
      <Card.Body className="cardbody">
        <h3 className="text-light">{birra.estilo}</h3>
        <p className="text-light">
          IBU: {birra.IBU} | Alc: {birra.Alc} || SRM: {birra.SRM}
        </p>
        <input
          onChange={(e) => setCantidad(e.target.value)}
          className="cantidad"
          type="number"
          name="cantidad"
          placeholder="Ingresa la cantidad "
        />
        <Button className="button color--state-ok">Agregar</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
