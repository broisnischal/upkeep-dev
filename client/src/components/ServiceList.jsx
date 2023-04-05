import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css"


const ServiceList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('/api/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Dummy data
    const dummyProducts = [
        {
            id: 1,
            name: 'Plumber',
            description:
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            price: 1099,
            image: 'https://www.britishgas.co.uk/aem6/content/dam/britishgas/images/home-services/engineer-plumbing-tap-360.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            description:
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            price: 19.99,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
        {
            id: 3,
            name: 'Product 3',
            description:
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1657664066042-c59e5f84b7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        },
        {
            id: 4,
            name: 'Product 4',
            description:
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            price: 39.99,
            image: 'https://images.unsplash.com/photo-1553051021-9f94520a6cad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
            id: 1,
            name: 'Plumber',
            description:
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            price: 1099,
            image: 'https://www.britishgas.co.uk/aem6/content/dam/britishgas/images/home-services/engineer-plumbing-tap-360.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            description:
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            price: 19.99,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
        {
            id: 3,
            name: 'Product 3',
            description:
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1657664066042-c59e5f84b7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        },
        {
            id: 4,
            name: 'Product 4',
            description:
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            price: 39.99,
            image: 'https://images.unsplash.com/photo-1553051021-9f94520a6cad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto py-7 sm:px-6 lg:px-8">
                <h1 className="text-6xl  mt-16 font-bold text-center text-green-600">
                    Service List
                </h1>
            </div>
            {/* Service List */}
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-wrap -mx-4">
                    {products.length > 0
                        ? products.map((product) => (
                            <div
                                key={product.id}
                                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
                            >
                                <div className="bg-white rounded-sm shadow-md overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover hover:scale-[1.1]"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold text-gray-900">
                                            {product.name}
                                        </h2>
                                        <p className="text-gray-700">
                                            {product.description}
                                        </p>
                                        <p className="mt-2 text-gray-900 font-bold">
                                            Rs.{product.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                        : dummyProducts.map((product) => (
                            <div
                                key={product.id}
                                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
                            >
                                <div className="bg-white rounded-sm shadow-md overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover hover:scale-[1.1]"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold text-gray-900">
                                            {product.name}
                                        </h2>
                                        <p className="text-gray-700">
                                            {product.description}
                                        </p>
                                        <p className="mt-2 text-gray-900 font-bold">
                                            Rs.{product.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceList;
