import React, { createContext, useState, useContext } from 'react';

 const CartContext = createContext();

 export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);   

     const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);

            if (existingItem) {
                 const updatedCart = prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
                console.log("Carrinho atualizado:", updatedCart);
                return updatedCart;
            } else {
                
                const updatedCart = [...prevCart, { ...product, qty: 1 }];
                console.log("Item adicionado ao carrinho:", updatedCart);
                return updatedCart;
            }
        });
    };

     
    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === productId);

            if (existingItem && existingItem.qty > 1) {
               
                const updatedCart = prevCart.map((item) =>
                    item.id === productId
                        ? { ...item, qty: item.qty - 1 }
                        : item
                );
                console.log("Quantidade decrementada:", updatedCart);
                return updatedCart;
            } else {
               
                const updatedCart = prevCart.filter((item) => item.id !== productId);
                console.log("Item removido do carrinho:", updatedCart);
                return updatedCart;
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {
    return useContext(CartContext);
};
