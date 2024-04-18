import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/admin/layouts/Navbar.jsx';
import Sidebar from './components/admin/layouts/Sidebar.jsx';
import Footer from './components/admin/layouts/Footer.jsx';
import Content from './components/admin/layouts/Content.jsx';

export default function Myapp() {
    return (
        <BrowserRouter>
            <Content />
        </BrowserRouter>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Myapp />);
