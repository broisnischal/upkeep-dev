import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
import { useGetDetailsQuery } from './app/services/auth/authService.js';
import { setCredentials } from './features/user/userSlice.js';
import ProtectedRoute from './routes/ProtectedRoute.js';

const App = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { email, username, vendorAccess, role } = useSelector(
        (state) => state.user,
    );
    const { loading, logged, userInfo, error } = useSelector(
        (state) => state.auth,
    );

    const { data, isFetching } = useGetDetailsQuery('userDetails', {
        pollingInterval: 900000,
    }); // 15 minute

    useEffect(() => {
        if (data && !isFetching) {
            dispatch(setCredentials(data));
        }
    }, [data, dispatch]);

    // useEffect(() => {
    //     dispatch(getUser({ userToken }));
    // }, [token]);

    /**
     *todo fix this routes and each particular routes must be wrapped with the outlet component
     *?todo fix the all code with the key props and remove the div class with the class but insted rename it to className
     *todo create the form for vendor to submit the new service
     *?todo create the form and page where admin can create the category
     *todo create the admin total vendor page, activated vendor page, users page, and inside users page there should be button in the user table or the field where admin can abondan/restrict the   vendor or user
     *todo Create the vendor approval page where admin can approve the vendors
     *todo Create the product uploading id and get the key of either other service provider or cloudinary
     *todo create the api to upload the image in the api
     *todo create the order or checkout popup for the vendor when they add services
     *todo Manage the folder strucutre properly,
     *todo Create user profile page and the form if in case needed to update the user profile
     *todo Create the footers page
     *todo enwrap the folder inside the proper folder and create cusom error popup
     */

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Landing />}></Route>
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/help" element={<Contact />} />
                </Route>
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
