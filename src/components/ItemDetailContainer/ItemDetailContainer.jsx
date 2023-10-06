import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [beer, setBeer] = useState({});
  const { pid } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "PFReactJSGiudicatti", pid);
    getDoc(queryDoc)
      .then((resp) => ({ id: resp.id, ...resp.data() }))
      .then((resp) => setBeer(resp))
      .catch((err) => console.log(err));
  }, [pid]);
  return (
    <div>
      <ItemDetail beer={beer} />
    </div>
  );
};

export default ItemDetailContainer;
