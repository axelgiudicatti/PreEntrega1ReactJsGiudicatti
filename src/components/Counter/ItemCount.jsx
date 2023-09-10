import { useEffect, useState } from "react";
import "./ItemCount.css";
const useCounter = (min, max) => {
  const [count, setCount] = useState(min);

  const handleAdd = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const handleSubstract = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return {
    count,
    handleAdd,
    handleSubstract,
  };
};

const ItemCount = ({ initial, stock, onAdd }) => {
  const { count, handleAdd, handleSubstract } = useCounter(initial, stock);
  const handleOnAdd = () => {
    onAdd(count);
  };
  return (
    <div className="onAdd">
      <div className="itemcount">
        <button className="color--state-bad mini" onClick={handleSubstract}>
          -
        </button>
        <label>{count} Unidades</label>
        <button className="color--state-ok mini" onClick={handleAdd}>
          +
        </button>
      </div>
      <button className="color--state-green mini" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
