import { configureStore } from "@reduxjs/toolkit";
import { UIReducer } from "./UISlice";

export const RootReducer = configureStore({
    reducer: {
        ui: UIReducer,
    },
});



