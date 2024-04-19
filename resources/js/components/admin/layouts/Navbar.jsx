import React from 'react';
import { Link } from 'react-router-dom';
import avtar1 from '../../../../../public/assets/images/users/avatar-1.jpg'
function Navbar() {
    return (
        <div className="navbar-custom">
            <ul className="list-unstyled topbar-menu float-end mb-0">
                <li className="dropdown notification-list d-lg-none">
                    <Link
                        className="nav-link dropdown-toggle arrow-none "
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="false"
                        aria-expanded="false"
                    >
                        <i className="dripicons-search noti-icon" />
                    </Link>
                </li>
              
                <li className="dropdown notification-list">
                    <Link
                        className="nav-link dropdown-toggle nav-user arrow-none me-0"
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="false"
                        aria-expanded="false"
                    >
                        <span className="account-user-avatar">
                            <img
                                src="assets/images/users/avatar-1.jpg"
                                alt="user-image"
                                className="rounded-circle"
                            />
                        </span>
                        <span>
                            <span className="account-user-name">Dominic Keller</span>
                            <span className="account-position">Founder</span>
                        </span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                        <Link href="javascript:void(0);" className="dropdown-item notify-item">
                            <i className="mdi mdi-account-circle me-1" />
                            <span>My Account</span>
                        </Link>
                        {/* item*/}
                        <Link href="javascript:void(0);" className="dropdown-item notify-item">
                            <i className="mdi mdi-account-edit me-1" />
                            <span>Settings</span>
                        </Link>
                        {/* item*/}
                        
                        {/* item*/}
                        <Link href="javascript:void(0);" className="dropdown-item notify-item">
                            <i className="mdi mdi-logout me-1" />
                            <span>Logout</span>
                        </Link>
                    </div>
                </li>
            </ul>
            <button className="button-menu-mobile open-left">
                <i className="mdi mdi-menu" />
            </button>
            
        </div>
    );
}

export default Navbar;