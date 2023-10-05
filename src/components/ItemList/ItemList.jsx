import Item from "../Item/Item";
const ItemList = ({ beers }) => {
  return (
    <>
      {beers.map((beer) => (
        <Item key={beer.id} beer={beer} />
      ))}
    </>
  );
};

export default ItemList;
