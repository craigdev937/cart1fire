import React from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";

export const Item = 
({ name, quantity, total, price, id }) => {
    const dispatch = useDispatch();
    return (
        <main className="cartItem">
            <h2>{name}</h2>
            <p>${price} /-</p>
            <p>x{quantity}</p>
            <article>Total ${total}</article>
            <button 
                className="cart-actions"
                onClick={() => {}}>
                -
            </button>
            <button 
                className="cart-actions"
                onClick={() => {}}>
                +
            </button>
        </main>
    );
};




