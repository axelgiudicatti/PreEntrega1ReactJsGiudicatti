import Item from "./Item";

const ItemList = ({ birras }) => {
  return (
    <>
      {birras.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </>
  );
};

export default ItemList;
