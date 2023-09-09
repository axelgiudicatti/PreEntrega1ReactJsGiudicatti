import { useEffect, useState } from "react";

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
    <div>
      <button onClick={handleAdd}> + </button>
      <label>{count}</label>
      <button onClick={handleSubstract}>-</button>
    </div>
  );
};

export default ItemCount;
