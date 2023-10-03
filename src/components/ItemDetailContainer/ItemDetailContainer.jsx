import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mFetch } from "../../utils/mockFetch";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [birra, setBirra] = useState({});
  const { pid } = useParams();
  useEffect(() => {
    mFetch(Number(pid))
      .then((resp) => setBirra(resp))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ItemDetail birra={birra} />
    </div>
  );
};

export default ItemDetailContainer;
