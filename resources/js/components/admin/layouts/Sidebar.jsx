import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../../public/assets/images/logo.png';
import logo_sm from '../../../../../public/assets/images/logo_sm.png';
import logo_dark from '../../../../../public/assets/images/logo-dark.png';
import logo_sm_dark from '../../../../../public/assets/images/logo_sm_dark.png';
import "../../../../../public/assets/css/app.min.css";
import "../../../../../public/assets/css/vendor/jquery-jvectormap-1.2.2.css";
import "../../../../../public/assets/css/icons.min.css";
import "../../../../../public/assets/css/app-dark.min.css";


function Sidebar() {
    return (
        <div className="leftside-menu">
            <Link to="/dashboard" className="logo text-center logo-light">
                <span className="logo-lg">
                    <img src={logo} alt="" height={16} />
                </span>
                <span className="logo-sm">
                    <img src={logo_sm} alt="" height={16} />
                </span>
            </Link>
            <Link to="//dashboard" className="logo text-center logo-dark">
                <span className="logo-lg">
                    <img src={logo_dark} alt="" height={16} />
                </span>
                <span className="logo-sm">
                    <img src={logo_sm_dark} alt="" height={16} />
                </span>
            </Link>
            <div className="h-100" id="leftside-menu-container" data-simplebar="">
                <ul className="side-nav">
                    <li className="side-nav-item">
                        <Link to="/dashboard" className="side-nav-link nav-link">
                            <i className="uil-home-alt"></i>
                            <span> Dashboard </span>
                        </Link>
                    </li>
                    <li className="side-nav-item">
                        <Link to="/dashboard/users" className="side-nav-link nav-link">
                            <i className="uil-user"></i>
                            <span> Users </span>
                        </Link>
                    </li>
                </ul>
                <div className="clearfix" />
            </div>
        </div>
    );
}

export default Sidebar;