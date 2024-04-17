import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">© Hyper - Coderthemes.com</div>
                    <div className="col-md-6">
                        <div className="text-md-end footer-links d-none d-md-block">
                           <Link to="javascript: void(0);">About</Link>
                           <Link to="javascript: void(0);">Support</Link>
                           <Link to="javascript: void(0);">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;