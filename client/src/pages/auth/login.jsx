import React from 'react';
import './index.scss';

const Login = () => {
    return (
        <div id="signup">
            <div className="top">
                <h1>Login</h1>
            </div>

            <div className="input">
                <div className="input-container">
                    <label htmlFor="name">Username/email</label>
                    <input
                        type="name"
                        id="name"
                        placeholder="neeswebservices"
                        className="form-label"
                    />
                </div>
            </div>
            <div className="input">
                <div className="input-container">
                    <label htmlFor="name">Password</label>
                    <input type="name" id="name" className="form-label" />
                </div>
            </div>
        </div>
    );
};

export default Login;
