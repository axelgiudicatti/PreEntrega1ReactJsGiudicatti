import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Item.css";
import { useState } from "react";

function Cards(props) {
  return (
    <Card
      key={props.id}
      className="card mb-2 color--green"
      style={{ width: "23vw" }}
    >
      <Card.Img variant="top" src={props.foto} />
      <Card.Body className="cardbody">
        <h3 className="text-light">{props.estilo}</h3>
        <p className="text-light">
          IBU: {props.IBU} | Alc: {props.Alc} || SRM: {props.SRM}
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
}

export default Cards;
