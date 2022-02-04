import React from 'react';

function CartWidget() {
  return <div className='flex items-center'>
    <span className='text-slate-700 mx-2'>
          <small>0</small>
        </span>
        <img src="https://icongr.am/jam/shopping-cart.svg?size=30&color=00806a" alt="" className='my-2'/>
  </div>;
}

export default CartWidget;
