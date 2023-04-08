import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../store';

export const userLogin = createAsyncThunk(
    'user/login',
    async ({ emailorusername, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axios.post(
                `${API}/auth/login`,
                { emailorusername, password },
                config,
            );

            console.log(data);

            // set to localstorage
            localStorage.setItem('token', data.token);

            return data;
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data.token) {
                return rejectWithValue(error.response.data.token);
            } else if (error.response && error.response.data.msg) {
                return rejectWithValue(error.response.data.msg);
            } else {
                return rejectWithValue(error.message);
            }
        }
    },
);

export const userRegister = createAsyncThunk(
    'user/register',
    async (
        { fullName, username, address, email, password },
        { rejectWithValue },
    ) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const { data } = await axios.post(
                `${API}/auth`,
                { fullName, username, address, email, password },
                config,
            );
            console.log(data);
            // return data;
        } catch (error) {
            if (error.response && error.response.data.msg) {
                return rejectWithValue(error.response.data.msg);
            } else {
                return rejectWithValue(error.msg);
            }
        }
    },
);

export const activateUser = createAsyncThunk(
    'user/activate',
    async ({ id }, { rejectWithValue }) => {
        try {
            console.log(id + ' activate user');
            const { data } = await axios.get(`${API}/auth/activate/${id}`);
            return data;
        } catch (error) {
            if (error.response && error.response.data.msg) {
                return rejectWithValue(error.response.data.msg);
            } else {
                return rejectWithValue(error.message);
            }
        }
    },
);
