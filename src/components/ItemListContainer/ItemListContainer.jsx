import Cards from "./Item";
import { mFetch } from "../../utils/mockFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [birras, setBirras] = useState([]);
  const [loading, setLoading] = useState([true]);
  const { cid } = useParams();
  console.log(cid);

  useEffect(() => {
    if (cid) {
      mFetch()
        .then((respuesta) =>
          setBirras(respuesta.filter((birra) => cid == birra.category))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      mFetch()
        .then((respuesta) => setBirras(respuesta))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [cid]);

  return (
    <div className="tarjetas">
      {loading ? <h2> Loading...</h2> : birras.map((birra) => Cards(birra))}
    </div>
  );
};

export default ItemListContainer;
