import React from 'react';
import { Link } from 'react-router-dom';

function NoItemsInCart() {
  return (
    <div className='flex flex-col text-center w-full items-center'>
      <p>There are no items in your cart</p>
      <Link
        to='/'
        className='text-green-700 inline-flex items-center md:mb-2 lg:mb-0 text-center '
      >
        Go buy something!
      </Link>
    </div>
  );
}

export default NoItemsInCart;
