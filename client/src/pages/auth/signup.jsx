import React from 'react';
import './index.scss';

const SignUp = () => {
    return (
        <div id="signup">
            <div className="top">
                <h1>Sign Up</h1>
            </div>

            <div className="input">
                <div className="input-container">
                    <label htmlFor="name">Enter Your FirstName</label>
                    <input type="name" id="name" className="form-label" />
                </div>
            </div>
            <div className="input">
                <div className="input-container">
                    <label htmlFor="name">Enter your email</label>
                    <input type="name" id="name" className="form-label" />
                </div>
            </div>
            <div className="input">
                <div className="input-container">
                    <label htmlFor="name">Street Addresss 1</label>
                    <input type="name" id="name" className="form-label" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
