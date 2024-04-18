import React from 'react';
import { NavLink } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">© Hyper - Coderthemes.com</div>
                    <div className="col-md-6">
                        <div className="text-md-end footer-NavLinks d-none d-md-block">
                           <NavLink to="javascript: void(0);">About</NavLink>
                           <NavLink to="javascript: void(0);">Support</NavLink>
                           <NavLink to="javascript: void(0);">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;