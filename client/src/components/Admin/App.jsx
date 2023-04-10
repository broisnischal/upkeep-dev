import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import TotalCustomer from './pages/TotalCustomer.jsx'
import TotalVendor from './pages/TotalVendor.jsx'
import VendorApproval from './pages/VendorApproval.jsx'
import Chat from './pages/Chat.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import CreateCategory from './pages/CreateCategory.jsx'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="admin-login" element={<AdminLogin />} />
                <Route path="/admin" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="totalcustomer" element={<TotalCustomer />} />
                    <Route path="totalvendor" element={<TotalVendor />} />
                    <Route path="vendor-approval" element={<VendorApproval />} />
                    <Route path="create-category" element={<CreateCategory />} />
                    <Route path="chat" element={<Chat />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
