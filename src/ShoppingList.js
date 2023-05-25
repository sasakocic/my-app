import { ListGroup } from 'react-bootstrap';

export function ShoppingList() {
  const shoppingProducts = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  const shoppingItems = shoppingProducts.map(product => <ListGroup.Item
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
  >
    {product.title}
  </ListGroup.Item>
  );
  return (
    <>
      <h3>Shopping List</h3>
      <ListGroup>{shoppingItems}</ListGroup>
    </>
  );
}
