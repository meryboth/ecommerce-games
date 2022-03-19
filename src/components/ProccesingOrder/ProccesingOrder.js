import React from 'react';

function ProccesingOrder() {
  return (
    <div className='w-full text-center'>
      <h1>We are proccesing your order</h1>
      <div className='flex justify-center items-center'>
        <div
          className='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full'
          role='status'
        >
          <span className='visually-hidden'>
            <img
              src='https://icongr.am/jam/chevron-circle-down-left.svg?size=29&color=1f570a'
              alt=''
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProccesingOrder;
