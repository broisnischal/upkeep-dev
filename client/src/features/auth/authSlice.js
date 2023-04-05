import { createSlice } from '@reduxjs/toolkit';

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null;

const initialState = {
    loading: false,
    userInfo: null,
    logged: false,
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
    extraReducers: {},
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
