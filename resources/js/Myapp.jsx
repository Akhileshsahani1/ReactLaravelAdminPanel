import React, { useEffect, useState } from "react";
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/admin/auth/Login.jsx';
import Dashboard from './components/admin/dashboard/pages/Dashboard.jsx';
import { Layout } from "./components/admin/layouts/Layout.jsx";
import User from "./components/admin/dashboard/pages/User.jsx";
import Content from "./components/admin/layouts/Content.jsx";
import { createRoot } from 'react-dom/client'; 

export default function Myapp(props) {
    const [token, setToken] = useState("");

    useEffect(() => {
        getToken();
    }, []);

    const getToken = () => {
        setToken(localStorage.getItem("token"));
    }

    function PrivateRoute({ children }) {
        const auth = localStorage.getItem("token");
        return auth ? children : <Navigate to="/" />;
    }

    function PublicRoute({ children }) {
        const auth = localStorage.getItem("token");
        return !auth ? children : <Navigate to="/dashboard" />;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<PublicRoute><Login setToken={setToken} /></PublicRoute>} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/dashboard/users" element={<PrivateRoute><User /></PrivateRoute>} />
            </Routes>
        </Router>
    );
}

const container = document.createElement('div');
document.body.appendChild(container); 
const root = createRoot(container); 
root.render(<Myapp />); // Render your app into the container
