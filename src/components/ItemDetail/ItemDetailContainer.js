import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import { getProductItem } from '../asyncmock';
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {


  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    getProductItem(productId).then(item => {
        setProduct(item)
    }).catch(err  => {
        console.log(err)
    })

    return (() => {
        setProduct()
    })

}, [productId])


  return (
    <div className='mt-5'>
      <ItemDetail
      product={product}
      />
    </div>
  )
}

export default ItemDetailContainer