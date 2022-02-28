import React from 'react';
import { useState } from 'react';

function Counter({stock, onAdd}) {
 const [number, setNumber] = useState(0);
  
  const add = () =>{
  number < stock && setNumber(number + 1);
  };

  const decrece = () =>{
    number > 0 && setNumber(number - 1);
  };

  return <div className='w-full flex flex-col'>
    <div className="flex items-center mt-4">
        <div className="px-2 text-xs bg-slate-200" onClick={decrece}>
            <i className="text-grey-darker fas fa-minus"></i>
        </div>
          <div className="px-2 text-xs">
            {number}
          </div>
          <div className="px-2 text-xs bg-slate-200" onClick={add}>
              <i className="text-grey-darker fas fa-plus"></i>
          </div>
    </div>
    <button className="bg-slate-300 p-3 flex items-center justify-between transition hover:bg-slate-100 my-1"
    onClick={() => onAdd(number)}
    disabled={number === 0 || number > stock}
    >
      Buy now
      <i className="fas fa-chevron-right"></i>
    </button>
  </div>;
}

export default Counter;