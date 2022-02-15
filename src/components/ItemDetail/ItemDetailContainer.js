import React from 'react'
import { useState } from 'react';
import ItemDetail from './ItemDetail'
import { getProductItem } from '../asyncmock';

function ItemDetailContainer() {


  const [product, setProduct] = useState([]);

  React.useEffect(() => {
    getProductItem().then(products => {
        setProduct(products);
    });
  })


  return (
    <div>
      <ItemDetail
      key={product.id} 
      img={product.img} 
      name={product.name}
      price={product.price}
      version={product.version}
      category={product.category}
      description={product.description}
      plataforms={product.plataforms}
      mode={product.mode}
      />
    </div>
  )
}

export default ItemDetailContainer