import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../../../clientNew/src/store';

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
