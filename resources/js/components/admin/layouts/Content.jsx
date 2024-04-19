import React, { useEffect, useState } from "react";
import { Navigate, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Dashboard from "../dashboard/pages/Dashboard";
import Login from "../auth/Login";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import User from "../dashboard/pages/User";
function Content() {
    return (
        <div className="wrapper">
            <Sidebar />
            <div className="content-page">
                <div className="content">
                    <Navbar />
                    <Routes>
                        <Route index element={<Dashboard />} />
                        <Route path="/dashboard/users" element={<User />} />
                        
                    </Routes>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Content;