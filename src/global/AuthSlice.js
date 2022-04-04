import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: true
    },
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        },
    },
});

export const AuthActions = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;


