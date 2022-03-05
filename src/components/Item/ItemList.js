import React from 'react';
import Item from './Item';
import ItemAlternative from './ItemAlternative';
import { getProducts } from '../asyncmock';
import './ItemList.css';

function ItemList() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  });

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center bg-slate-200 m-3'>
      {products.map((product) => (
        <ItemAlternative
          key={product.id}
          id={product.id}
          img={product.img}
          name={product.name}
          price={product.price}
          version={product.version}
          category={product.category}
        />
      ))}
    </div>
  );
}

export default ItemList;
