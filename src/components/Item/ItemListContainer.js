import React from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';

function ItemListContainer() {
  return (
    <div className='container m-auto bg-slate-200'>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
