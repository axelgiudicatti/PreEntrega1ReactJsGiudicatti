import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mFetch } from "../../utils/mockFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../Counter/ItemCount";

const ItemDetailContainer = () => {
  const [birra, setBirra] = useState({});
  const { pid } = useParams();
  console.log(pid);
  const onAdd = (count) => {
    console.log("cantidad seleccionada " + count);
  };

  useEffect(() => {
    mFetch(Number(pid))
      .then((resp) => setBirra(resp))
      .catch((err) => console.log(err));
  }, [pid]);
  return (
    <div>
      <ItemDetail birra={birra} />
      <ItemCount initial={0} stock={15} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
