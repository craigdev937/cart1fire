import React from "react";
import "./Cart.css";

export const Cart = () => {
    const quantity = 5;
    return (
        <main className="cartIcon">
            <h3>Cart: {quantity} Items</h3>
        </main>
    );
};



