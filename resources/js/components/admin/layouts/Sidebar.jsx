import React from 'react';
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
            <div className="leftside-menu">
                <Link to="index.html" className="logo text-center logo-light">
                    <span className="logo-lg">
                        <img src="assets/images/logo.png" alt="" height={16} />
                    </span>
                    <span className="logo-sm">
                        <img src="assets/images/logo_sm.png" alt="" height={16} />
                    </span>
                </Link>
                <Link to="index.html" className="logo text-center logo-dark">
                    <span className="logo-lg">
                        <img src="assets/images/logo-dark.png" alt="" height={16} />
                    </span>
                    <span className="logo-sm">
                        <img src="assets/images/logo_sm_dark.png" alt="" height={16} />
                    </span>
                </Link>
                <div className="h-100" id="leftside-menu-container" data-simplebar="">
                    <ul className="side-nav">
                        <li className="side-nav-title side-nav-item">Navigation</li>
                        <li className="side-nav-item">
                            <Link
                                data-bs-toggle="collapse"
                                to="#sidebarDashboards"
                                aria-expanded="false"
                                aria-controls="sidebarDashboards"
                                className="side-nav-link"
                            >
                                <i className="uil-home-alt" />
                                <span className="badge bg-success float-end">4</span>
                                <span> Dashboards </span>
                            </Link>
                        </li>
                       
                    </ul>

                  
                    <div className="clearfix" />
                </div>

            </div>
        );
}

export default Sidebar;