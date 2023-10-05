import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [beers, setbeers] = useState([]);
  const [loading, setLoading] = useState([true]);
  const { cid } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "PFReactJSGiudicatti");
    const queryFilter = cid
      ? query(queryCollection, where("category", "==", cid))
      : queryCollection;
    getDocs(queryFilter)
      .then((resp) =>
        setbeers(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [cid]);

  return (
    <div className="cards">
      {loading ? <h2> Loading...</h2> : <ItemList beers={beers} />}
    </div>
  );
};

export default ItemListContainer;
