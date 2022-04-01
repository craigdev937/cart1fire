import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { Item } from "./Item";

export const CartItems = () => {
    const cartItems = useSelector(
        (state) => state.cart.itemsList);

    return (
        <main className="cart-container">
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {" "}
                        <Item 
                            id={item.id}
                            item={item}
                        />
                        {" "}
                    </li>
                ))}
            </ul>
        </main>
    );
};



