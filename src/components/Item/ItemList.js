import React from 'react';
import Item from './Item';
import ItemAlternative from './ItemAlternative';
import { getProducts } from '../asyncmock';
import './ItemList.css';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firestoresDb } from '../../services/firebase/firebase';
import { useParams } from 'react-router-dom';

function ItemList() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { categoryId } = useParams();

  React.useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(
          collection(firestoresDb, 'products'),
          where('category', '==', categoryId)
        )
      : collection(firestoresDb, 'products');

    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

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
