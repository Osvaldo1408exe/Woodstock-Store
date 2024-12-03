// context/CarrinhoContext.js
import React, { createContext, useState, useContext } from 'react';

// Cria o contexto
const CartContext = createContext();

// Provedor do contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);  // Estado para armazenar os itens

    // adiciona um item ao carrinho
    const addToCart = (product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            console.log("Item adicionado ao carrinho:", updatedCart); 
            return updatedCart;  // Retorna o estado atualizado
        });
    };
    

    // remove um item do carrinho 
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
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
