import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../store';

export const getUser = createAsyncThunk(
    'user/get',
    async ({ token }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`,
                },
            };

            const { data } = await axios.get(`${API}/auth/user`, config);

            console.log(data);

            return data;
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data.msg) {
                rejectWithValue(error.response.data.msg);
            } else if (error.response && error.response.data.message) {
                rejectWithValue(error.response.data.message);
            } else {
                rejectWithValue(error.response);
            }
        }
    },
);
