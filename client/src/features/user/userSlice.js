import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './userAction';

const userToken = localStorage.getItem('userToken') ?? null;

const initialState = {
    id: null,
    loading: false,
    success: false,
    vendor: false,
    admin: false,
    role: 0,
};

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {},
    extraReducers: {
        [getUser.loading]: (state) => {
            state.error = false;
            state.loading = true;
            state.success = false;
        },
        [getUser.fulfilled]: (state, { payload }) => {
            state.error = false;
            state.loading = false;
            state.success = false;
            state.vendor = payload.vendorAccess || false;
            state.admin = payload.role === 3 ? true : false;
            state.role = payload.role;
        },
        [getUser.rejected]: (state, { payload }) => {
            state.error = payload;
            state.loading = false;
            state.success = false;
        },
    },
});

export default userSlice.reducer;
