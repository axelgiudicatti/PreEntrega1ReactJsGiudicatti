import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../Counter/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ birra }) => {
  const onAdd = (count) => {
    console.log("cantidad seleccionada " + count);
  };
  return (
    <div className="itemdetail">
      <h2> Detalles del producto</h2>
      <div className="description">
        <img src={birra.foto} />
        <p>{birra.description}</p>
      </div>
      <div className="lineardetail">
        <h4>{birra.estilo}</h4>
        <h4>IBU: {birra.IBU}</h4>
        <h4>Alc: {birra.Alc}</h4>
        <h4>SRM: {birra.SRM}</h4>
        <h4>{birra.price}/lata</h4>
        <ItemCount initial={0} stock={birra.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;

/*
<img src="../imgs/${estilo}.webp.png" class="carritoimg" />
        <h4>${estilo}</h4>
        <h4>$${precio}/lata</h4>
        <button class="color--state-bad mini" id="eliminar1${estilo}"
        ><strong>-</strong></button>
        <h5>${cantidad} unidades</h5>
        <button class="color--state-ok mini" id="agregar1${estilo}"
        ><strong>+</strong></button>
        <h4>Subt. $${cantidad * precio} </h4>
      </div>`;*/
