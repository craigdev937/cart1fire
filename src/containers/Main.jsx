import React from "react";
import { useSelector } from "react-redux";
import { Auth } from "./Auth";
import { Layout } from "../components/Layout";

const URL = "https://redux-toolkit-http-c01a8-default-rtdb.firebaseio.com/cartItems.json";
export const Main = () => {
    const cart = useSelector((state) => state.cart);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);    
    
    React.useEffect(() => {
        fetch(URL, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(cart),
        })
    }, [cart]);

    return (
        <React.Fragment>
            {!isLoggedIn && <Auth />}
            {isLoggedIn && <Layout />}
        </React.Fragment>
    );
};



