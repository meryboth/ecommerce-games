import React, { useContext, useState, useRef } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import OrderForm from '../OrderForm/OrderForm';
import Togglable from '../Togglable/Togglable';
import ProccesingOrder from '../ProccesingOrder/ProccesingOrder';
import CheckoutHeader from '../CheckoutHeader/CheckoutHeader';
import NoItemsInCart from '../NoItemsInCart/NoItemsInCart';
import CheckoutTitle from '../CheckoutTitle/CheckoutTitle';
import {
  writeBatch,
  getDoc,
  doc,
  addDoc,
  collection,
  Timestamp,
} from 'firebase/firestore';
import { firestoresDb } from '../../services/firebase/firebase';
import { useNotificationServices } from '../../services/notification/notificationServices';

const Cart = () => {
  const { cart, subTotal, removeItem, total, sumQuantity, clearCart } =
    useContext(CartContext);

  const setNotification = useNotificationServices();

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
              setNotification(
                'success',
                `✅ ✈️ You order is on his way! You order number is ${id}`
              );
            });
          })
          .catch((error) => {
            setNotification('error', error);
          })
          .finally(() => {
            setProcessingOrder(false);
          });
      } else {
        outOfStock.forEach((prod) => {
          setNotification(
            'error',
            `🔴 The item ${prod.name} is not avaliable in stock`
          );
          removeItem(prod.id);
        });
      }
    } else {
      setNotification(
        'error',
        `🎮🦄 You have to complete the profile form to order!. Go to Add Contact`
      );
    }
  };

  /* termina la función de confirmar Orden */

  if (processingOrder) {
    return <ProccesingOrder />;
  }

  if (cart.length === 0) {
    return <NoItemsInCart />;
  }

  return (
    <section className='text-gray-600 body-font bg-slate-200'>
      <CheckoutTitle />
      <div className='lg:w-2/3 w-full mx-auto overflow-auto'>
        {sumQuantity() > 0 ? (
          <table className='table-auto w-full text-left whitespace-no-wrap'>
            <CheckoutHeader />
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
          <NoItemsInCart />
        )}
      </div>
      <div className='flex pl-4 mt-4 lg:w-2/3 w-full mx-auto bg-gray-100 justify-between p-3'>
        <h6 className='px-9'>Total</h6>
        <div className='flex'>
          <h6 className=''>{sumQuantity()}</h6>
          <h6 className='px-20 font-bold'>$ {total().toFixed(2)}</h6>
        </div>
      </div>
      {contact.phone !== '' &&
        contact.address !== '' &&
        contact.comment !== '' &&
        contact.name !== '' && (
          <div className='w-full'>
            <div className='flex flex-col p-5 justify-center items-center '>
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
    </section>
  );
};

export default Cart;
