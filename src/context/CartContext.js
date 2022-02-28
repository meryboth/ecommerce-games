import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        if( isInCart (product.id) ){
         sumarItemRepetido(product, quantity);
        } else {
        setCart([...cart, { ...product, quantity }]);
        }
    }

    /* evitar repetición de producto en el carrito */
    const isInCart = (id) => {
        const validacion = cart.some((producto) => producto.id === id);
        return validacion;
    }

    /* funcion para sumar un item que ya está en el carrito */

    const sumarItemRepetido = (id, quantity) => {
        const copia = [...cart];
        copia.forEach((producto) =>  producto.id === id && (producto.quantity += quantity));
    }

    /* limpiar todos los items del carrito */

    const clearItems = () => {
        setCart([]);
    }

    /* borrar un item del carrito */

    const removeItem = (id) => {
        const itemFiltrados = cart.filter((producto) => producto.id !== id);
        setCart(itemFiltrados);
    }

    
    return(
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}