import { CartActions } from "./CartSlice";
import { UIActions } from "./UISlice";

const URL = "https://redux-toolkit-http-c01a8-default-rtdb.firebaseio.com/cartItems.json";
export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch(URL);
            const data = await res.json();
            return data;
        };

        try {
            const cartData = await fetchHandler();
            console.log(cartData);
            dispatch(CartActions.replaceData(cartData));
        } catch (error) {
            dispatch(UIActions.showNotification({
                open: true,
                message: "Sending Request Failed",
                type: "error"
            }))
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(UIActions.showNotification({
            open: true,
            message: "Sending Request to Database!",
            type: "warning",
        }));

        const sendRequest = async () => {
            const res = await fetch(URL, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(cart)
            });
            const data = await res.json();
            dispatch(UIActions.showNotification({
                open: true,
                message: "Request Sent Successfully!",
                type: "success"
            }))
        };

        try {
            await sendRequest();
        } catch (error) {
            dispatch(UIActions.showNotification({
                open: true,
                message: "Sending Request Failed!",
                type: "error"
            }))
        }
    };
};



