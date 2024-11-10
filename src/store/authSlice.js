import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}


const authSlice = {
    name : "auth",
    initialState,
    reducers: {
        // inside reducers, login and logout are two types of actions to be performed
        login: (state, action) => {
            state.status = true,
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false,
            state.userData = null;
        }
    }
}

export const {login, logout} = authSlice.reducers
export default authSlice.reducers;