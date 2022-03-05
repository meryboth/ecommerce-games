import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //función que agrega items al carrito
  const addToCart = (item, quantity) => {
    isInCart(item.id)
      ? sumarCantidad(item, quantity)
      : setCart([...cart, { ...item, quantity }]);
  };

  //función que chequea si está en el carrito
  const isInCart = (id) => {
    return cart.some((producto) => producto.id === id);
  };

  //función que agrega cantidad
  const sumarCantidad = (item, quantity) => {
    const newProducts = cart.map((prod) => {
      if (prod.id === item.id) {
        const newProduct = {
          ...prod,
          quantity: prod.quantity + quantity,
        };
        return newProduct;
      } else {
        return prod;
      }
    });
    setCart(newProducts);
  };

  //funcion remover item del carrito

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  //funcion limpiar todo el carrito

  const clearCart = () => {
    setCart([]);
  };

  //funcion subtotal

  const subTotal = (price, quantity) => {
    return price * quantity;
  };

  // Suma cantidad de productos
  const sumQuantity = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.quantity;
    });
    return sum;
  };

  //función total

  const total = () => {
    let suma = 0;
    cart.forEach((producto) => {
      suma += subTotal(producto.price, producto.quantity);
    });
    return suma;
  };

  const valuesCartContext = {
    cart: cart,
    addToCart: addToCart,
    sumQuantity: sumQuantity,
    isInCart: isInCart,
    sumarCantidad: sumarCantidad,
    removeItem: removeItem,
    clearCart: clearCart,
    subTotal: subTotal,
    total: total,
  };

  return (
    <CartContext.Provider value={valuesCartContext}>
      {children}
    </CartContext.Provider>
  );
};
