import React from 'react'


function ItemDetail({ product }) {
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
            </div>
        </div>
    </div>
  )
}

export default ItemDetail