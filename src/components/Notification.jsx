import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UIActions } from "../global/UISlice";

export const Notification = () => {
    const dispatch = useDispatch();
    const notification = useSelector(
        (state) => state.ui.notification);

    const handleClose = () => {
        dispatch(UIActions.showNotification({
            open: false,
        }))
    };

    return (
        <React.Fragment>
            {notification.open && (
                <h1 
                    onClose={handleClose}
                    severity={type}
                    >{message}
                </h1>
            )}
        </React.Fragment>
    );
};




