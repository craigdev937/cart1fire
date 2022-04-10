import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Auth } from "./Auth";
import { Layout } from "../components/Layout";
import { Notification } from "../components/Notification";
import { fetchData, sendCartData } from "../global/FetchAPI";

export const Main = () => {
    let isFirstRender = true;
    const dispatch = useDispatch();
    const notification = useSelector(
        (state) => state.ui.notification);
    const cart = useSelector((state) => state.cart);
    const isLoggedIn = useSelector(
        (state) => state.auth.isLoggedIn);

    React.useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    React.useEffect(() => {
        if (isFirstRender) {
            isFirstRender = false;
            return;
        };
        if (cart.changed) {
            dispatch(sendCartData(cart));
        };
    }, [cart, dispatch]);

    return (
        <React.Fragment>
            {notification && (
                <Notification 
                    type={notification.type} 
                    message={notification.message}
                />
            )}
            {!isLoggedIn && <Auth />}
            {isLoggedIn && <Layout />}
        </React.Fragment>
    );
};



