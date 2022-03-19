import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

function CartWidget() {
  const { sumQuantity } = useContext(CartContext);

  return (
    <>
      {sumQuantity() === 0 ? null : (
        <div className='flex items-center'>
          <span className='text-slate-700 mx-2'>
            <small>{sumQuantity()}</small>
          </span>
          <NavLink to='/cart'>
            <img
              src='https://icongr.am/jam/shopping-cart.svg?size=30&color=00806a'
              alt=''
              className='my-2'
            />
          </NavLink>
        </div>
      )}
    </>
  );
}

export default CartWidget;
