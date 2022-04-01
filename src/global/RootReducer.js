import { configureStore } from "@reduxjs/toolkit";
import { UIReducer } from "./UISlice";
import { AuthReducer } from "./AuthSlice";
import { CartReducer } from "./CartSlice";

export const RootReducer = configureStore({
    reducer: {
        ui: UIReducer,
        auth: AuthReducer,
        cart: CartReducer
    },
});



