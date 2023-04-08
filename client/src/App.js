import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home.jsx';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import About from './pages/About.jsx';
import SingleService from './components/SingleService.jsx';
import OrderConfirm from './components/OrderConfirm';
import Layout from '../src/components/Admin/components/shared/Layout.jsx';
import Dashboard from './components/Admin/pages/Dashboard.jsx';
import TotalVendor from './components/Admin/pages/Dashboard.jsx';
import TotalCustomer from './components/Admin/pages/TotalCustomer';
import Approvals from './components/Admin/pages/TotalCustomer';
import Chat from './components/Admin/pages/Approvals';
import AdminLogin from './components/Admin/pages/AdminLogin';
import CheckoutForm from './components/CheckoutForm.jsx';
import ActivationSuccess from './pages/ActivationSuccess.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';
import Vendor from './pages/Vendor.jsx';
import Wrapper from './components/Admin/components/shared/Wrapper.jsx';
import Activate from './components/Auth/Activate.jsx';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from './features/user/userAction.js';

const App = () => {
    const { loading, success, vendor, admin, role } = useSelector(
        (state) => state.user,
    );

    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    useEffect(() => {
        dispatch(getUser({ token }));
    }, [token]);

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Landing />}></Route>
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/help" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route
                    path="/activation-success"
                    element={<ActivationSuccess />}
                />
                <Route path="/singleservice" element={<SingleService />} />
                <Route path="/order-confirm" element={<OrderConfirm />} />
                <Route path="/checkout" element={<CheckoutForm />} />
                <Route path="/vendor" element={<Vendor />} />

                {/* Admin */}

                <Route path="admin-login" element={<AdminLogin />} />
                <Route path="/admin-dashboard" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="totalcustomer" element={<TotalCustomer />} />
                    <Route path="totalvendor" element={<TotalVendor />} />
                    <Route path="approval" element={<Approvals />} />
                    <Route path="chat" element={<Chat />} />
                </Route>
                {/* Vendor */}

                <Route path="/vendor-dashboard" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="totalcustomer" element={<TotalCustomer />} />
                    <Route path="chat" element={<Chat />} />
                </Route>
                {/* <Route path="/auth/activate/:id" element={<div>asdf</div>} /> */}
                <Route path="/auth" element={<Wrapper />}>
                    <Route index element={<div>asdf</div>} />
                    <Route path="activate/:id" element={<Activate />} />
                </Route>
                <Route element={Error} />
            </Routes>
        </>
    );
};

export default App;
