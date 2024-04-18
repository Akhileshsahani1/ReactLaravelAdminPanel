import React from 'react';
import { NavLink } from 'react-router-dom';
import avtar1 from '../../../../../public/assets/images/users/avatar-1.jpg'
function Navbar() {
    return (
            <div className="navbar-custom">
                <ul className="list-unstyled topbar-menu float-end mb-0">
                    <li className="dropdown notification-list">
                        <NavLink
                            className="nav-Link dropdown-toggle nav-user arrow-none me-0"
                            data-bs-toggle="dropdown"
                            to="#"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                        >
                            <span className="account-user-avatar">
                                <img
                                    src={avtar1}
                                    alt="user-image"
                                    className="rounded-circle"
                                />
                            </span>
                            <span>
                                <span className="account-user-name">Dominic Keller</span>
                                <span className="account-position">Founder</span>
                            </span>
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                        
                            <div className=" dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>
                            <NavLink to="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-account-circle me-1" />
                                <span>My Account</span>
                            </NavLink>
                            <NavLink to="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-logout me-1" />
                                <span>Logout</span>
                            </NavLink>
                        </div>
                    </li>
                </ul>
            </div>

    );
}

export default Navbar;