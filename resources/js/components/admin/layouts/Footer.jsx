import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
           
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <script>document.write(new Date().getFullYear())</script> © Hyper - Coderthemes.com
                        </div>
                        <div class="col-md-6">
                            <div class="text-md-end footer-links d-none d-md-block">
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