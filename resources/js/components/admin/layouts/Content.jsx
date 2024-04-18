import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "../dashboard/pages/Dashboard";
import Login from "../auth/Login";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Content() {

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
    console.log(token, "token")
    useEffect(() => {
        getToken()
    }, [])
    return (
        <Routes>
            <Route path="/" element={<PublicRoute><Login setToken={setToken} /></PublicRoute>} />
            <Route element={
                <div className="wrapper">
                    <Sidebar />
                    <div className="content-page">
                        <div className="content">
                            <Navbar />
                            <Route exact path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                        </div>
                        <Footer />
                    </div>
                </div>
            } />
        </Routes>



    );
}

export default Content;