import React from 'react';

function CheckoutHeader() {
  return (
    <thead>
      <tr>
        <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'></th>
        <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
          Product
        </th>
        <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
          Version
        </th>
        <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
          Description
        </th>
        <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
          Quantity
        </th>
        <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
          Subtotal
        </th>
        <th className='w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-br text-center px-3'>
          Remove
        </th>
      </tr>
    </thead>
  );
}

export default CheckoutHeader;
