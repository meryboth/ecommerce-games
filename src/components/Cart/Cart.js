import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <> 
            <table className='table-auto w-1/2 m-auto'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='m-auto'>
                        {/* <td>
                        {cart.map((prod) => (
                        <li key={prod.id}>
                        <img src={prod.img} alt="" className='w-20 mx-2'/>    
                        </li>
                        ))}
                        </td>  */}    
                        <td>
                        {cart.map((prod) => (
                        <li key={prod.id}>{prod.name}</li>
                        ))}
                        </td>
                        <td>
                        {cart.map((prod) => (
                        <li key={prod.id}>{prod.quantity}</li>
                        ))}
                        </td>
                        <td>
                        {cart.map((prod) => (
                        <li key={prod.id}>{prod.price}</li>
                        ))}
                        </td>
                        <td>
                         Función subtotal
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </>
    );
};

export default Cart;
