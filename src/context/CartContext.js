import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

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

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};