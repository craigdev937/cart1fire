import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { CartActions } from "../global/CartSlice";

export const Cart = () => {
    const dispatch = useDispatch();
    const quantity = useSelector(
        (state) => state.cart.totalQuantity);
    
    const showCart = () => {
        dispatch(CartActions.setShowCart());
    };

    return (
        <main className="cartIcon">
            <h3 onClick={showCart}
                >Cart: {quantity} Items
            </h3>
        </main>
    );
};



