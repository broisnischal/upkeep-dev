import React from 'react';

const TotalOrders = () => {
    const orders = [
        {
            id: 1,
            customer: 'John Doe',
            Service: 'iPhone 12 Pro',
            status: 'Delivered'
        },
        {
            id: 2,
            customer: 'Jane Doe',
            Service: 'MacBook Pro',
            status: 'Pending'
        },
        {
            id: 3,
            customer: 'Jack Smith',
            Service: 'AirPods Pro',
            status: 'Delivered'
        },
        {
            id: 4,
            customer: 'Jill Smith',
            Service: 'iPad Air',
            status: 'Pending'
        },
    ];

    return (
        <div className="bg-white  rounded my-6">
            <table className="min-w-max w-full table-auto">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">ID</th>
                        <th className="py-3 px-6 text-left">Customer</th>
                        <th className="py-3 px-6 text-left">Service</th>
                        <th className="py-3 px-6 text-left">Status</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {orders.map(order => (
                        <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">{order.id}</td>
                            <td className="py-3 px-6 text-left">{order.customer}</td>
                            <td className="py-3 px-6 text-left">{order.Service}</td>
                            <td className="py-3 px-6 text-left">
                                <span className={`bg-${order.status === 'Delivered' ? 'green' : 'yellow'}-200 text-${order.status === 'Delivered' ? 'green' : 'yellow'}-600 py-1 px-3 rounded-full text-xs`}>{order.status}</span>
                            </td>
                            <td className="py-3 px-6 text-center">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TotalOrders;
