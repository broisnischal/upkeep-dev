import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<div>App</div>}></Route>
            </Routes>
            <p>Hello </p>
            <Link to={'profile'}>Profile</Link>
        </>
    );
};

export default App;
