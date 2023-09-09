import Item from "../Item/Item";
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
