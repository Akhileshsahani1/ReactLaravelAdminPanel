import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../../../public/assets/images/logo.png';
import logo_sm from '../../../../../public/assets/images/logo_sm.png';
import logo_dark from '../../../../../public/assets/images/logo-dark.png';
import logo_sm_dark from '../../../../../public/assets/images/logo_sm_dark.png';

function Sidebar() {
    return (
        <div className="leftside-menu">
            <NavLink to="index.html" className="logo text-center logo-light">
                <span className="logo-lg">
                    <img src={logo} alt="" height={16} />
                </span>
                <span className="logo-sm">
                    <img src={logo_sm} alt="" height={16} />
                </span>
            </NavLink>
            <NavLink to="index.html" className="logo text-center logo-dark">
                <span className="logo-lg">
                    <img src={logo_dark} alt="" height={16} />
                </span>
                <span className="logo-sm">
                    <img src={logo_sm_dark} alt="" height={16} />
                </span>
            </NavLink>
            <div className="h-100" id="leftside-menu-container" data-simplebar="">
                <ul className="side-nav">
                    <li className="side-nav-title side-nav-item">Navigation</li>
                    <li class="side-nav-item menuitem-active">
                        <NavLink to="/" class="side-nav-link active">
                            <i class="uil-home-alt"></i>
                            <span> Dashboards </span>
                        </NavLink>
                    </li>
                </ul>
                <div className="clearfix" />
            </div>

        </div>
    );
}

export default Sidebar;