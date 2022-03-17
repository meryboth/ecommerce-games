import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ItemDetail({ product }) {
  const [qty, setQty] = useState(0);

  const { addToCart } = useContext(CartContext);

  function onAdd(cantidad) {
    setQty(cantidad);
    addToCart(product, cantidad);
  }

  return (
    <div className='container m-auto bg-white rounded shadow-md mb-3 p-10 w-1/2'>
      <div className='flex'>
        <img src={product?.img} alt='' className='w-1/4 h-full' />
        <div className='p-5 flex flex-col justify-center'>
          <h1 className='font-bold text-4xl mb-3'>{product?.name}</h1>
          <p>{product?.description}</p>
          <h4 className='font-regular text-3xl mb-3 mt-3 text-slate-500'>
            Price: {product?.price}US
          </h4>
          <h6 className='text-slate-500'>Plataforms: {product?.plataforms}</h6>
          <h6 className='text-slate-500'>Mode: {product?.mode}</h6>
          {qty === 0 ? (
            <Counter stock={product?.stock} onAdd={onAdd} />
          ) : (
            <div className='mt-3'>
              <Link to='/cart'>
                <button className='btn bg-slate-200 py-2 px-5 rounded mx-1 flex hover:bg-slate-500'>
                  <img
                    className='mr-2'
                    src='https://icongr.am/jam/shopping-cart.svg?size=30&color=00806a'
                    alt=''
                  />
                  My shop bag
                </button>
              </Link>
              <Link to='/'>
                <button className='btn bg-slate-200 py-2 px-5 rounded flex mx-1 mt-2 hover:bg-slate-500'>
                  <img
                    className='mr-2'
                    src='https://icongr.am/jam/gamepad-f.svg?size=30&color=00806a'
                    alt=''
                  />
                  Keep buying
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
