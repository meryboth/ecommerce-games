import React from 'react';
import { Link } from 'react-router-dom';

function ItemAlternative(props) {
  return (
    <div className='max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
      <div className='px-4 py-2'>
        <h1 className='text-2xl font-bold text-gray-800 uppercase dark:text-white'>
          {props.name}
        </h1>
        <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
          quidem sequi illum facere recusandae voluptatibus
        </p>
      </div>
      <img
        className='object-cover w-full h-48 mt-2'
        src={props.img}
        alt={props.name}
      />
      <div className='flex items-center justify-between px-4 py-2 bg-gray-900'>
        <h1 className='text-lg font-bold text-white'>${props.price}</h1>
        <Link to={`/detail/${props.id}`}>
          <button className='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
            Product Detail
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ItemAlternative;
