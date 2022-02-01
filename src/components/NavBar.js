import React from 'react';

function NavBar() {
  return <header className='header flex py-3 justify-evenly bg-slate-100 items-center px-5'>
      <div className='flex items-center'>
        <img src="https://icongr.am/jam/bug.svg?size=30&color=00806a" alt="" />
        <h1 className='font-mono font-bold mx-3'>Bug Games</h1>
      </div>
      <nav>
        <ul className='flex '>
          <li className='mx-3'><a href="">Store</a></li>
          <li className='mx-3'><a href="">Sale</a></li>
          <li className='mx-3'><a href="">Free games</a></li>
        </ul>
      </nav>
      
      <div className='header__cart flex items-center'>
      <button className='bg-slate-100 hover:bg-green-700 text-black mx-1 font-bold py-2 px-4 rounded-full'>Log In</button>
      <button className='bg-slate-100 hover:bg-green-700 text-black font-bold py-2 px-4 mx-1 rounded-full'>Register</button>
        <span className='text-slate-700 mx-2'>
          0
        </span>
        <img src="https://icongr.am/jam/shopping-cart.svg?size=30&color=00806a" alt="" className='my-2'/>
      </div>
  </header>;
}

export default NavBar;
