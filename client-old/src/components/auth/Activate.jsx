import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

const Activate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');

    console.log(id);

    useEffect(() => {
        async function activate() {
            try {
                const data = await axios.get(`/api/v1/auth/activate/${id}`);

                if (data) {
                    setMsg(data.data.msg);
                    navigate('/');
                }
            } catch (error) {
                setMsg(error.response.data.msg);
            }
        }
        activate();
    }, [id]);

    return (
        <div>
            Activate <br /> {msg}{' '}
        </div>
    );
};

export default Activate;
