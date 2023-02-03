import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            App <Link to={'profile'}>Profile</Link>
                        </div>
                    }
                ></Route>
                <Route
                    path="/profile"
                    element={
                        <div>
                            My Profile <br />
                            <Link to={'/'}>Home</Link>
                        </div>
                    }
                ></Route>
            </Routes>
        </>
    );
};

export default App;
