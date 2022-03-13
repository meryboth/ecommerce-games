import React, { useContext, useState, useRef } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import OrderForm from '../OrderForm/OrderForm';
import Togglable from './Togglable';
import {
  writeBatch,
  getDoc,
  doc,
  addDoc,
  collection,
  Timestamp,
} from 'firebase/firestore';
import { firestoresDb } from '../../services/firebase/firebase';

const Cart = () => {
  const { cart, subTotal, removeItem, total, sumQuantity, clearCart } =
    useContext(CartContext);

  const [processingOrder, setProcessingOrder] = useState(false);
  const [contact, setContact] = useState({
    name: '',
    phone: '',
    address: '',
    comment: '',
  });
  const contactFormRef = useRef();

  const confirmOrder = () => {
    if (
      contact.phone !== '' &&
      contact.address !== '' &&
      contact.comment !== '' &&
      contact.name !== ''
    ) {
      setProcessingOrder(true);

      const objOrder = {
        buyer: contact,
        items: cart,
        total: total(),
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(firestoresDb);
      const outOfStock = [];

      objOrder.items.forEach((prod) => {
        getDoc(doc(firestoresDb, 'products', prod.id)).then((response) => {
          if (response.data().stock >= prod.quantity) {
            batch.update(doc(firestoresDb, 'products', response.id), {
              stock: response.data().stock - prod.quantity,
            });
          } else {
            outOfStock.push({ id: response.id, ...response.data() });
          }
        });
      });

      if (outOfStock.length === 0) {
        addDoc(collection(firestoresDb, 'orders'), objOrder)
          .then(({ id }) => {
            batch.commit().then(() => {
              clearCart();
              alert(
                `La orden se genero exitosamente, su numero de orden es: ${id}`
              );
            });
          })
          .catch((error) => {
            console.log('error', error);
          })
          .finally(() => {
            setProcessingOrder(false);
          });
      } else {
        outOfStock.forEach((prod) => {
          alert('error', `El producto ${prod.name} no tiene stock disponible`);
          removeItem(prod.id);
        });
      }
    } else {
      alert('Debe completar los datos de contacto para generar la orden');
    }
  };

  /* termina la función de confirmar Orden */

  if (processingOrder) {
    return <h1>Se esta procesando su orden</h1>;
  }

  if (cart.length === 0) {
    return (
      <div className='flex flex-col text-center w-full items-center'>
        <p>There are no items in your cart</p>
        <Link
          to='/'
          className='text-green-700 inline-flex items-center md:mb-2 lg:mb-0 text-center '
        >
          Go buy something!
        </Link>
      </div>
    );
  }

  return (
    <section className='text-gray-600 body-font bg-slate-200'>
      <div className='flex flex-col text-center w-full mb-3'>
        <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900'>
          Cart
        </h1>
      </div>
      <div className='lg:w-2/3 w-full mx-auto overflow-auto'>
        {sumQuantity() > 0 ? (
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
          </table>
        ) : (
          <div className='flex flex-col text-center w-full items-center'>
            <p>There are no items in your cart</p>
            <Link
              to='/'
              className='text-green-700 inline-flex items-center md:mb-2 lg:mb-0 text-center '
            >
              Go buy something!
            </Link>
          </div>
        )}
      </div>
      <div className='flex pl-4 mt-4 lg:w-2/3 w-full mx-auto bg-gray-100 justify-between p-3'>
        <h6 className='px-9'>Total</h6>
        <div className='flex'>
          <h6 className=''>{sumQuantity()}</h6>
          <h6 className='px-20 font-bold'>$ {total().toFixed(2)}</h6>
        </div>
      </div>
      <div className='flex pl-4 lg:w-2/3 w-full mx-auto p-3 justify-between'>
        <Link
          to='/'
          className='text-green-700 inline-flex items-center md:mb-2 lg:mb-0'
        >
          Keep buying
        </Link>
        <div className='flex'>
          <button
            onClick={clearCart}
            className='mx-3 ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'
          >
            Clear Cart
          </button>
          <button
            onClick={confirmOrder}
            className='flex ml-auto text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded'
          >
            Confirm buy
          </button>
        </div>
      </div>
      {contact.phone !== '' &&
        contact.address !== '' &&
        contact.comment !== '' &&
        contact.name !== '' && (
          <div className='flex flex-col justify-center items-center m-3'>
            <h4>Nombre: {contact.name}</h4>
            <h4>Telefono: {contact.phone}</h4>
            <h4>Direccion: {contact.address}</h4>
            <h4>Comentario: {contact.comment}</h4>
            <button
              onClick={() =>
                setContact({ phone: '', address: '', comment: '' })
              }
              style={{ backgroundColor: '#db4025' }}
              className='text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded m-3'
            >
              Borrar datos de contacto
            </button>
          </div>
        )}
      <Togglable
        buttonLabelShow={
          contact.phone !== '' &&
          contact.address !== '' &&
          contact.comment !== '' &&
          contact.name !== ''
            ? 'Edit Contact'
            : 'Add Contact'
        }
        ref={contactFormRef}
      >
        <OrderForm toggleVisibility={contactFormRef} setContact={setContact} />
      </Togglable>
    </section>
  );
};

export default Cart;
