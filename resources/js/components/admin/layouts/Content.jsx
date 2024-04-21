import React, { useEffect, useState } from "react";
import { Navigate, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Dashboard from "../dashboard/pages/Dashboard";
import User from "../dashboard/pages/User";
import { Layout } from "./Layout";
function Content() {
    return (
           <Layout>
                <Routes>
                    <Route  index element={<Dashboard />} />
                    <Route path="users" element={<User />} />
                </Routes>
            </Layout>  
    );
}

export default Content;