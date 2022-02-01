import React from 'react';

function NavBar() {

  let Links = [
    {name: "Store", link: "/store"},
    {name: "Sale", link: "/sale"},
    {name: "Free games", link: "/freegames"}
  ];

  return <header className='header flex py-3 justify-evenly bg-slate-100 items-center px-5 shadow-md'>
      <div className='header__logo'>
        <a href="/" className='flex items-center'>
          <img src="https://icongr.am/jam/bug.svg?size=30&color=00806a" alt="" />
          <h1 className='font-bold mx-3'>Bug Games</h1>
        </a>
      </div>
      <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <img src="https://icongr.am/jam/align-justify.svg?size=30&color=00806a" alt="" />
        <img src="https://icongr.am/jam/close.svg?size=30&color=00806a" alt="" />
      </div>
      <nav>
        <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg:slate-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
          {Links.map((link, index) => {
            return <li key={index} className='mx-3 md:ml-8 md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-300 duration-500'>{link.name}</a>
            </li>
          })}
        </ul>
      </nav>
      
      <div className='header__cart flex items-center'>
      <input type="search" className='rounded-full px-4 py-2' placeholder='The game you want...' name='game'/>
      <button className='bg-white hover:bg-green-700 text-black hover:text-white mx-1 font-bold py-2 px-4 rounded-full'>Log In</button>
      <button className='bg-white hover:bg-green-700 text-black hover:text-white font-bold py-2 px-4 mx-1 rounded-full'>Register</button>
        <span className='text-slate-700 mx-2'>
          <small>0</small>
        </span>
        <img src="https://icongr.am/jam/shopping-cart.svg?size=30&color=00806a" alt="" className='my-2'/>
      </div>
  </header>;
}

export default NavBar;
