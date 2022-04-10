import React from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../global/CartSlice";

export const Item = 
({ name, quantity, total, price, id }) => {
    const dispatch = useDispatch();
    const incrementCartItem = () => {
        dispatch(CartActions.addToCart({
            name, id, price
        }))
    };

    const decrementCartItems = () => {
        dispatch(CartActions.removeFromCart(id));
    };

    return (
        <main className="cartItem">
            <h2>{name}</h2>
            <p>${price} /-</p>
            <p>x{quantity}</p>
            <article>Total ${total}</article>
            <button 
                className="cart-actions"
                onClick={decrementCartItems}>
                -
            </button>
            <button 
                className="cart-actions"
                onClick={incrementCartItem}>
                +
            </button>
        </main>
    );
};




