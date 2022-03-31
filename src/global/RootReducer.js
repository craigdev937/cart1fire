import { configureStore } from "@reduxjs/toolkit";
import { UIReducer } from "./UISlice";
import { AuthReducer } from "./AuthSlice";

export const RootReducer = configureStore({
    reducer: {
        ui: UIReducer,
        auth: AuthReducer,
    },
});



