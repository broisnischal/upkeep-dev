import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userRegister, activateUser } from './authActions';

// initialize userToken from local storage
const userToken = localStorage.getItem('token') ?? null;

const initialState = {
    loading: false,
    userInfo: null,
    logged: userToken ? true : false,
    userToken,
    error: null,
    success: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken');
            state.loading = false;
        },
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.userInfo = payload;
            state.userToken = payload.token;
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        // register user
        [userRegister.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [userRegister.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.success = true; // registration successful
        },
        [userRegister.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [activateUser.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [activateUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.success = true;
        },
        [activateUser.rejected]: (state, { payload }) => {
            state.error = payload;
            state.loading = false;
        },
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
