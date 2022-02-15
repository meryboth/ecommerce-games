import React from 'react';
import ItemList from './ItemList';
import "./ItemListContainer.css";
import IdemDetailContainer from './ItemDetail/ItemDetailContainer';

function ItemListContainer() {

  return <div className='container m-auto'>
    <ItemList/>
    <IdemDetailContainer/>
  </div>;
}

export default ItemListContainer;
