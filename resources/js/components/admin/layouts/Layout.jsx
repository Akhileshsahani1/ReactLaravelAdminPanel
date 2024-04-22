// @flow 
import * as React from 'react';
import Sidebar from './Sidebar.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
    
    return (
        <div className="wrapper">
            <Sidebar />
            <div className="content-page">
                <div className="content">
                    <Navbar />
                   {children}
                </div>
                <Footer />
            </div>
        </div>
    );
};