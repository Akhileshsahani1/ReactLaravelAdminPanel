import React, { useEffect, useState } from "react";
import { Navigate, BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Navbar from './components/admin/layouts/Navbar.jsx';
import Sidebar from './components/admin/layouts/Sidebar.jsx';
import Footer from './components/admin/layouts/Footer.jsx';
import Login from './components/admin/auth/Login.jsx';
import Dashboard from './components/admin/dashboard/pages/Dashboard.jsx';
import Content from "./components/admin/layouts/Content.jsx";

export default function Myapp() {

    const [token, setToken] = useState("")
    const [userGetData, setUserGetData] = useState(null);

    function PrivateRoute({ children }) {
        const auth = localStorage.getItem("token");
        return auth ? children : <Navigate to="/" />;
    }

    function PublicRoute({ children }) {
        const auth = localStorage.getItem("token");
        return !auth ? children : <Navigate to="/dashboard" />;
    }

    const getToken = () => {
        setToken(localStorage.getItem("token"))
    }
    useEffect(() => {
        getToken()
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PublicRoute><Login setToken={setToken} /></PublicRoute>} />
                <Route path="/dashboard*" element={<PrivateRoute><Content /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );

    
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Myapp />);
