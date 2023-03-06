import React, { useState } from 'react';
import './index.scss';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [hidden, setHidden] = useState(true);

    return (
        <div id="signup">
            <div className="top">
                <h1>Signup</h1>
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
                <div className="input-container password">
                    <label htmlFor="name">Password</label>
                    <input
                        type={hidden ? 'password' : 'text'}
                        placeholder={hidden && 'neeswebservices'}
                        id="name"
                        className="form-label"
                    />
                    <button className="show" onClick={() => setHidden(!hidden)}>
                        {!hidden ? (
                            <AiOutlineEye className="icon" />
                        ) : (
                            <AiOutlineEyeInvisible className="icon" />
                        )}
                    </button>
                </div>
            </div>
            <div className="input links">
                <div className="custom">
                    <Link to={'/auth/login'} className="link">
                        Already a user?
                    </Link>
                </div>
                <div className="agree">
                    <label htmlFor="agree">
                        I accept Terms of service and Privacy policy.
                    </label>
                    <input type="checkbox" id="agree" />
                </div>
            </div>

            <div className="input button">
                <button type="submit" className="auth-main-button" id="submit">
                    Signup
                </button>
            </div>
        </div>
    );
};

export default Signup;
