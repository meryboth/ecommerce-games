import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, subTotal, removeItem, total, sumQuantity, clearCart } =
    useContext(CartContext);

  return (
    <section className='text-gray-600 body-font'>
      <div className='flex flex-col text-center w-full mb-3'>
        <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900'>
          Cart
        </h1>
      </div>
      <div className='lg:w-2/3 w-full mx-auto overflow-auto'>
        <table className='table-auto w-full text-left whitespace-no-wrap'>
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
          {sumQuantity() > 0 ? (
            <tbody>
              {cart.map((prod) => {
                return (
                  <tr key={prod.id}>
                    <td className=''>
                      <img src={prod.img} alt={prod.name} className='w-20' />
                    </td>
                    <td className='px-4 py-3 text-sm text-gray-900 text-center'>
                      {prod.name}
                    </td>
                    <td className='px-4 py-3 text-sm text-gray-900 text-center'>
                      {prod.version}
                    </td>
                    <td className='px-4 py-3 text-sm text-gray-900'>
                      {prod.description}
                    </td>
                    <td className='px-4 py-3  text-gray-900 text-center'>
                      {prod.quantity}
                    </td>
                    <td className='px-4 py-3  text-gray-900 text-center'>
                      $ {subTotal(prod.price, prod.quantity).toFixed(2)}
                    </td>
                    <td className='px-4 py-3'>
                      <div onClick={() => removeItem(prod.id)}>
                        <button>
                          <img
                            src='https://icongr.am/feather/trash-2.svg?size=30&color=b41313'
                            alt=''
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <div className='flex flex-col text-center w-full bg-red-200'>
              <p>No hay productos en el carrito!</p>
              <Link to='/'>
                <a class='text-green-700 inline-flex items-center md:mb-2 lg:mb-0'>
                  Keep buying
                </a>
              </Link>
            </div>
          )}
        </table>
      </div>
      <div className='flex pl-4 mt-4 lg:w-2/3 w-full mx-auto bg-gray-100 justify-between p-3'>
        <h6 className='px-9'>Total</h6>
        <div className='flex'>
          <h6 className=''>{sumQuantity()}</h6>
          <h6 className='px-20 font-bold'>$ {total().toFixed(2)}</h6>
        </div>
      </div>
      <div class='flex pl-4 lg:w-2/3 w-full mx-auto p-3 justify-between'>
        <Link to='/'>
          <a class='text-green-700 inline-flex items-center md:mb-2 lg:mb-0'>
            Keep buying
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              class='w-4 h-4 ml-2'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </a>
        </Link>
        <div className='flex'>
          <button
            onClick={clearCart}
            className='mx-3 ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'
          >
            Clear Cart
          </button>
          <button className='flex ml-auto text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded'>
            Buy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
