import React from 'react';
import "./Item.css";
import Counter from './Counter';

function Item(props) {

function onAdd(){
    return alert("Item added to cart");
}

  return <div>
      <div id="app" className="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest m-3">
            <img className="w-1/2 h-full rounded-l-sm overflow-hidden object-cover" src={props.img} alt="Room Image"/>
            <div className="w-full flex flex-col">
                <div className="p-4 pb-0 flex-1">
                    <h3 className="font-regular mb-1 text-grey-darkest">{props.name}</h3>
                    <div className="text-xs flex items-center mb-4">
                        <i className="fas fa-angle-right mr-1 text-grey-dark"></i>
                        {props.version}
                    </div>
                    <span className="text-5xl text-grey-darkest">{props.price}<span className="text-lg">US</span></span>
                    <Counter initial={1} stock={7} onAdd={onAdd} />
                </div>
            </div>
        </div>

  </div>;
}

export default Item;
