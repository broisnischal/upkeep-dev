import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const VendorRequestForm = () => {
    const [vendorName, setVendorName] = useState('');
    const [vendorEmail, setVendorEmail] = useState('');
    const [vendorPhone, setVendorPhone] = useState('');
    const [vendorAddress, setVendorAddress] = useState('');
    const [vendorDescription, setVendorDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // send form data to server or do validation
    };

    return (
        <>
            <Navbar />
            <div className="flex min-h-screen">
                <div className="w-full  bg-white flex justify-center items-center">
                    <form className="px-8 py-6">
                        <h1 className="text-3xl font-bold mb-1">
                            Become Professional Vendor
                        </h1>
                        <h4 className="text-md mb-2 font-light">
                            Request a Vendor Account
                        </h4>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-bold mb-2"
                            > Full Name
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-[420px] border rounded-md border-gray-400 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border rounded-md border-gray-400 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Phone Number
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border rounded-md border-gray-400 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="citizenship"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Citizenship
                            </label>
                            <input
                                type="file"
                                id="citizenship"
                                name="citizenship"
                                accept=".pdf,.jpeg,.jpg,.png"
                                className="w-full border rounded-md border-gray-400 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Company Name
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-[420px] border rounded-md border-gray-400 p-2"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Service Category
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border rounded-md border-gray-400 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Address
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border rounded-md border-gray-400 p-2"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline hover:bg-green-600 w-full rounded-md"
                        >
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default VendorRequestForm;
