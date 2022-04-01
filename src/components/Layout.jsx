import React from "react";
import "./Layout.css";
import { useSelector } from "react-redux";
import { Header } from "./Header";
import { CartItems } from "../cart/CartItems";
import { Products } from "../data/Products";

export const Layout = () => {
    let total = 100;
    const showCart = useSelector(
        (state) => state.cart.showCart);
    const itemsList = useSelector(
        (state) => state.cart.itemsList);
    
    itemsList.forEach((item) => {
        total += item.totalPrice;
    });    

    return (
        <main className="layout">
            <Header />
            <Products />
            {showCart && <CartItems />}
            <aside className="total-price">
                <h3>Total: ${total}</h3>
                <button 
                    className="orderBtn"
                    >Place Order
                </button>
            </aside>
        </main>
    );
};


