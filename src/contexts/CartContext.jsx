import { createContext, useState, useEffect } from 'react';

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([]);

    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 }
        // Check if item is already in the cart
        const cartItem = cart.find(item => item?.id === id);
        if (cartItem) {
            const newCart = [ ...cart ].map((item) => {
                if (item?.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([ ...cart, newItem ]);
        }
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => item?.id !== id);
        setCart(newCart);
    }

    const decreaseAmount = (product, id) => {
        const cartItem = cart.find(item => item?.id === id);
        if (cartItem) {
            const newCart = [ ...cart ].map((item) => {
                if (item?.id === id) {
                    return { ...item, amount: cartItem.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
        if (cartItem.amount < 2) {
            removeFromCart(id);
        }
    }

        const clearCart = () => {
            setCart([]);
        }

        return (
            <CartContext.Provider value={{
                cart, addToCart, removeFromCart, clearCart, decreaseAmount
            }}>
                {children}
            </CartContext.Provider>
        )
    }

    export default CartContext;