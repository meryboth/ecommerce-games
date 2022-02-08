import React from 'react';

function Counter(props) {
 const [count, setCount] = React.useState(props.initial);

  function handleIncrement() {
    if (count < props.stock) {
      setCount(count + 1);
    }
  }  

  function handleDecrement(){
    if(count > props.initial){
      setCount(count - 1);
    }
  }

  const condicionAddOn = count < props.stock && count > props.initial;
  const onAddCondicion = condicionAddOn ? props.onAdd : null;


  return <div className='w-full flex flex-col'>
    <div className="flex items-center mt-4">
        <div className="px-2 text-xs bg-slate-200" onClick={handleDecrement}>
            <i className="text-grey-darker fas fa-minus"></i>
        </div>
          <div className="px-2 text-xs">
            {count}
          </div>
          <div className="px-2 text-xs bg-slate-200" onClick={handleIncrement}>
              <i className="text-grey-darker fas fa-plus"></i>
          </div>
    </div>
    <div className="bg-slate-300 p-3 flex items-center justify-between transition hover:bg-slate-100 my-1"
    onClick={onAddCondicion}>
      Buy now
      <i className="fas fa-chevron-right"></i>
    </div>
  </div>;
}

export default Counter;
