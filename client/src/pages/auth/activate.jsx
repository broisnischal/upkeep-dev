import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../store.js';

const Activate = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState('');

    useEffect(() => {
        if (!token) {
            return navigate('/');
            // window.location.replace('/');
        }
        const activate = async () => {
            setLoading(true);
            try {
                const req = await axios.post(
                    `http://192.168.1.132:8000/api/v1/auth/${token}`,
                );
                console.log(req.data);
                setAlert('User activated Please login');
            } catch (error) {
                setAlert(
                    error.response.data.msg || error.response.data.message,
                );
                console.log(error);
            }
            setLoading(false);
        };
        activate();
    }, [token, navigate]);

    return (
        <div>
            <h3>
                <center>Activate Your Account</center>
            </h3>

            <br />
            <p>{alert}</p>
        </div>
    );
};

export default Activate;
