import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Handle form submission
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-white">
                    Forget Password
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            className="block font-bold mb-2 text-white"
                            htmlFor="email"
                        >
                            Enter Email Address
                        </label>
                        <input
                            className="w-full border-gray-300 p-2 rounded-md"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                            Send Link
                        </button>
                    </div>
                </form>
                <p className="text-center mt-4 text-white">
                    Remembered your password?{' '}
                    <Link to="/login" className="text-green-500">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgetPassword;
