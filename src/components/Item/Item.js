import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <div>
      <div
        id='app'
        className='bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest m-3'
      >
        <Link to={`/detail/${props.id}`} className='w-1/2'>
          <img
            className='h-full rounded-l-sm overflow-hidden object-cover'
            src={props.img}
            alt='Room Image'
          />
        </Link>
        <div className='w-full flex flex-col'>
          <div className='p-4 pb-0 flex-1'>
            <h3 className='font-regular mb-1 text-grey-darkest'>
              {props.name}
            </h3>
            <div className='text-xs flex items-center mb-4'>
              <i className='fas fa-angle-right mr-1 text-grey-dark'></i>
              {props.version}
            </div>
            <span className='text-5xl text-grey-darkest'>
              {props.price}
              <span className='text-lg'>US</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
