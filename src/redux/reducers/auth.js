import { createReducer, createSlice } from "@reduxjs/toolkit";


const initalState = {
    token: null,
    userData: {},
    error: null,
};


const authReducer = createSlice({
    name: "auth",
    initalState,
    reducers: {
        setLoginSuccessful(state, action) {
            state.token = action.payload.token;

            state.userData = action.payload.data;

            

        },
        setLoginFailed(state, action) {
            state.error = action.payload;
        }
    }
} );

export const { setLoginSuccessful, setLoginFailed } = authReducer.actions;

export default authReducer.reducer;