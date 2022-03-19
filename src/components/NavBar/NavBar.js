import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { firestoresDb } from '../../services/firebase/firebase';
import './NavBar.css';

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDocs(collection(firestoresDb, 'categories')).then((response) => {
      const categories = response.docs.map((cat) => {
        return { id: cat.id, ...cat.data() };
      });
      setCategories(categories);
    });
  }, []);

  return (
    <header className='header flex py-3 justify-evenly bg-slate-100 items-center px-5 shadow-md'>
      <div className='header__logo'>
        <Link to={'/'}>
          <div className='flex items-center'>
            <img
              src='https://icongr.am/jam/bug.svg?size=30&color=00806a'
              alt=''
            />
            <h1 className='font-bold mx-3'>Bug Games</h1>
          </div>
        </Link>
      </div>
      <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <img
          src='https://icongr.am/jam/align-justify.svg?size=30&color=00806a'
          alt=''
        />
        <img
          src='https://icongr.am/jam/close.svg?size=30&color=00806a'
          alt=''
        />
      </div>
      <nav>
        <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg:slate-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
          {categories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/category/${cat.id}`}
              className={({ isActive }) =>
                isActive ? 'ActiveOption' : 'Option'
              }
            >
              {cat.description}
            </NavLink>
          ))}
        </ul>
      </nav>

      <div className='header__cart flex items-center'>
        <input
          type='search'
          className='rounded-full px-4 py-2'
          placeholder='The game you want...'
          name='game'
        />
        <button className='bg-white hover:bg-green-700 text-black hover:text-white mx-1 font-bold py-2 px-4 rounded-full'>
          Log In
        </button>
        <button className='bg-white hover:bg-green-700 text-black hover:text-white font-bold py-2 px-4 mx-1 rounded-full'>
          Register
        </button>
        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
