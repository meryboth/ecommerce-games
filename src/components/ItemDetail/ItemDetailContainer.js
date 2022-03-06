import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getProductItem } from '../asyncmock';
import { useParams } from 'react-router-dom';
import { firestoresDb } from '../../services/firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';

function ItemDetailContainer() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(firestoresDb, 'products', productId);

    getDoc(docRef)
      .then((response) => {
        const product = { id: response.id, ...response.data() };
        setProduct(product);
      })
      .catch((error) => {
        alert('error', `Error buscando producto: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProduct();
    };
  }, [productId]);

  return (
    <div className='mt-5'>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
