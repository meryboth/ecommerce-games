import React from 'react'
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';


function ItemDetail({ product }) {
    const [showCounter, setShowCounter] = React.useState(true);

    function onAdd(){
        setShowCounter(!showCounter);
    }

  return (
    <div className='container m-auto bg-white rounded shadow-md mb-3 p-10 w-1/2'>
        <div className='flex'>
            <img src={product?.img} alt="" className='w-1/4 h-full'/>
            <div className='p-5 flex flex-col justify-center' >
                <h1 className='font-bold text-4xl mb-3'>{product?.name}</h1>
                <p>
                 {product?.description}
                </p>
                <h4 className='font-regular text-3xl mb-3 mt-3 text-slate-500'>
                    Price: {product?.price}US
                </h4>
                <h6 className='text-slate-500'>
                    Plataforms: {product?.plataforms}
                </h6>
                <h6 className='text-slate-500'>
                    Mode: {product?.mode}
                </h6>
                {showCounter && <Counter initial={1} stock={product?.stock} onAdd={onAdd} />}
                {showCounter === false &&
                <div className='mt-3'>
                    <Link to={"/"}><button className='btn bg-slate-200 py-2 px-5 rounded'>Keep buying</button></Link>
                    <Link to={"/cart"}><button className='btn bg-slate-200 py-2 px-5 rounded mx-1'>My shop bag</button></Link>
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail