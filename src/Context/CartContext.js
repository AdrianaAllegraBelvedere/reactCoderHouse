import React, { createContext, useState} from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {

    const [context, setContext] = useState({carrito:[], cantidadProductos:0});

    const addItem = (item,cuantity) =>{
        setContext({
            "carrito":[...context.carrito,item],
            "cantidadProductos": context.cantidadProductos+ cuantity
        });
    }

    const removeItem = (item,cuantity) =>{
        const carritoActual = context.carrito.filter(x=> x.price == item.price && x.title == item.title);
        setContext({
            "carrito":[carritoActual],
            "cantidadProductos": context.cantidadProductos - cuantity
        });
    }
    
    const clearCarrito = () =>{
        setContext({carrito:[], cantidadProductos:0});
    }
    let values = {addItem,
        removeItem,
        clearCarrito,
        context,
        setContext
    }
    
    return (
            <CartContext.Provider
                value={values}
            >
                {props.children}
            </CartContext.Provider>
    )
}
export default CartProvider;