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
                    <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                        <form className="p-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search ..."
                                aria-label="Recipient's username"
                            />
                        </form>
                    </div>
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
            <div className="app-search dropdown d-none d-lg-block">
                <form>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control dropdown-toggle"
                            placeholder="Search..."
                            id="top-search"
                        />
                        <span className="mdi mdi-magnify search-icon" />
                        <button className="input-group-text btn-primary" type="submit">
                            Search
                        </button>
                    </div>
                </form>
                <div
                    className="dropdown-menu dropdown-menu-animated dropdown-lg"
                    id="search-dropdown"
                >
                    {/* item*/}
                    <div className="dropdown-header noti-title">
                        <h5 className="text-overflow mb-2">
                            Found <span className="text-danger">17</span> results
                        </h5>
                    </div>
                    {/* item*/}
                    <Link href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="uil-notes font-16 me-1" />
                        <span>Analytics Report</span>
                    </Link>
                    {/* item*/}
                    <Link href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="uil-life-ring font-16 me-1" />
                        <span>How can I help you?</span>
                    </Link>
                    {/* item*/}
                    <Link href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="uil-cog font-16 me-1" />
                        <span>User profile settings</span>
                    </Link>
                    {/* item*/}
                    <div className="dropdown-header noti-title">
                        <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                    </div>
                    <div className="notification-list">
                        {/* item*/}
                        <Link href="javascript:void(0);" className="dropdown-item notify-item">
                            <div className="d-flex">
                                <img
                                    className="d-flex me-2 rounded-circle"
                                    src="assets/images/users/avatar-2.jpg"
                                    alt="Generic placeholder image"
                                    height={32}
                                />
                                <div className="w-100">
                                    <h5 className="m-0 font-14">Erwin Brown</h5>
                                    <span className="font-12 mb-0">UI Designer</span>
                                </div>
                            </div>
                        </Link>
                        {/* item*/}
                        <Link href="javascript:void(0);" className="dropdown-item notify-item">
                            <div className="d-flex">
                                <img
                                    className="d-flex me-2 rounded-circle"
                                    src="assets/images/users/avatar-5.jpg"
                                    alt="Generic placeholder image"
                                    height={32}
                                />
                                <div className="w-100">
                                    <h5 className="m-0 font-14">Jacob Deo</h5>
                                    <span className="font-12 mb-0">Developer</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;