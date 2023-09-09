import Item from "../Item/Item";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
const ItemList = ({ birras }) => {
  return (
    <>
      {birras.map((birra) => (
        <Item key={birra.id} birra={birra} />
      ))}
    </>
  );
};

export default ItemList;
