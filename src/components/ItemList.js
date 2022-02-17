import React from 'react';
import Item from './Item';
import { getProducts } from './asyncmock';
import "./ItemList.css";

function ItemList() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        getProducts().then(products => {
            setProducts(products);
        });
    })

  return (
    <div className='flex flex-wrap justify-center'>
        {products.map (product => <Item 
        key={product.id} 
        id={product.id}
        img={product.img} 
        name={product.name}
        price={product.price}
        version={product.version}
        category={product.category}
        />)}
    </div>
  )
}

export default ItemList