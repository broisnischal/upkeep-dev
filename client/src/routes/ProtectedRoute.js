import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import '../styles/unauthorized.css';

const ProtectedRoute = () => {
    const { id } = useSelector((state) => state.user);

    if (!id) {
        return (
            <div className="unauthorized">
                <h1>Unauthorized</h1>
                <span></span>
            </div>
        );
    }
    return <Outlet />;
};

export default ProtectedRoute;
