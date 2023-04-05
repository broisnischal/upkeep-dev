import React, { useState } from 'react';

const CheckoutForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerTime, setCustomerTime] = useState('');

    const handleAddressSelect = (address) => {
        setCustomerAddress(address);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // send form data to server or do validation
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">
                        Customer Checkout Form
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="customer-name"
                                className="font-medium"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="customer-name"
                                value={customerName}
                                onChange={(e) =>
                                    setCustomerName(e.target.value)
                                }
                                className="form-input block w-full mt-1"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="customer-address"
                                className="font-medium"
                            >
                                Address
                            </label>
                            <Map handleAddressSelect={handleAddressSelect} />
                            {/* Map component should go inside a div or container */}
                        </div>
                        <div>
                            <label
                                htmlFor="customer-time"
                                className="font-medium"
                            >
                                Time
                            </label>
                            <input
                                type="datetime-local"
                                id="customer-time"
                                value={customerTime}
                                onChange={(e) =>
                                    setCustomerTime(e.target.value)
                                }
                                className="form-input block w-full mt-1"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                            >
                                Place Order
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CheckoutForm;
