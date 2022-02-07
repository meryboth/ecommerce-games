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

  return <div className="flex items-center mt-4">
      <div className="px-2 text-xs bg-slate-200" onClick={handleDecrement}>
          <i className="text-grey-darker fas fa-minus"></i>
      </div>
        <div className="px-2 text-xs">
          {count}
        </div>
        <div className="px-2 text-xs bg-slate-200" onClick={handleIncrement}>
            <i className="text-grey-darker fas fa-plus"></i>
        </div>
    </div>;
}

export default Counter;
