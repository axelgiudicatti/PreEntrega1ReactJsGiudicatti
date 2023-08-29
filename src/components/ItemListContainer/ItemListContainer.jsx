import Cards from "./Item";
import { mFetch } from "../../utils/mockFetch";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [birras, setBirras] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    mFetch()
      .then((respuesta) => setBirras(respuesta))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="tarjetas">
      {loading ? <h2> Loading...</h2> : birras.map((birra) => Cards(birra))}
    </div>
  );
};

export default ItemListContainer;
