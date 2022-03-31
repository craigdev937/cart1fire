import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
    name: "ui",
    initialState: { notification: null },
    reducers: {
        showNotification(state, action) {
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open,
            }
        },
    },
});

export const UIReducer = UISlice.reducer;


