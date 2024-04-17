import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
            <div className="navbar-custom">
                <ul className="list-unstyled topbar-menu float-end mb-0">
                    <li className="dropdown notification-list d-lg-none">
                        <Link
                            className="nav-link dropdown-toggle arrow-none"
                            data-bs-toggle="dropdown"
                            to="#"
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
                    <li className="dropdown notification-list topbar-dropdown">
                        <Link
                            className="nav-link dropdown-toggle arrow-none"
                            data-bs-toggle="dropdown"
                            to="#"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                        >
                            <img
                                src="assets/images/flags/us.jpg"
                                alt="user-image"
                                className="me-0 me-sm-1"
                                height={12}
                            />
                            <span className="align-middle d-none d-sm-inline-block">English</span>
                            <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">
                        
                            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                <img
                                    src="assets/images/flags/germany.jpg"
                                    alt="user-image"
                                    className="me-1"
                                    height={12}
                                />
                                <span className="align-middle">German</span>
                            </Link>
                        
                            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                <img
                                    src="assets/images/flags/italy.jpg"
                                    alt="user-image"
                                    className="me-1"
                                    height={12}
                                />
                                <span className="align-middle">Italian</span>
                            </Link>
                        
                            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                <img
                                    src="assets/images/flags/spain.jpg"
                                    alt="user-image"
                                    className="me-1"
                                    height={12}
                                />
                                <span className="align-middle">Spanish</span>
                            </Link>
                        
                            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                <img
                                    src="assets/images/flags/russia.jpg"
                                    alt="user-image"
                                    className="me-1"
                                    height={12}
                                />
                                <span className="align-middle">Russian</span>
                            </Link>
                        </div>
                    </li>
                    <li className="dropdown notification-list">
                        <Link
                            className="nav-link dropdown-toggle arrow-none"
                            data-bs-toggle="dropdown"
                            to="#"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                        >
                            <i className="dripicons-bell noti-icon" />
                            <span className="noti-icon-badge" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">
                        
                            <div className="dropdown-item noti-title">
                                <h5 className="m-0">
                                    <span className="float-end">
                                        <Link to="javascript: void(0);" className="text-dark">
                                            <small>Clear All</small>
                                        </Link>
                                    </span>
                                    Notification
                                </h5>
                            </div>
                            <div style={{ maxHeight: 230 }} data-simplebar="">
                            
                                <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-primary">
                                        <i className="mdi mdi-comment-account-outline" />
                                    </div>
                                    <p className="notify-details">
                                        Caleb Flakelar commented on Admin
                                        <small className="text-muted">1 min ago</small>
                                    </p>
                                </Link>
                            
                                <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-info">
                                        <i className="mdi mdi-account-plus" />
                                    </div>
                                    <p className="notify-details">
                                        New user registered.
                                        <small className="text-muted">5 hours ago</small>
                                    </p>
                                </Link>
                            
                                <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon">
                                        <img
                                            src="assets/images/users/avatar-2.jpg"
                                            className="img-fluid rounded-circle"
                                            alt=""
                                        />
                                    </div>
                                    <p className="notify-details">Cristina Pride</p>
                                    <p className="text-muted mb-0 user-msg">
                                        <small>Hi, How are you? What about our next meeting</small>
                                    </p>
                                </Link>
                            
                                <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-primary">
                                        <i className="mdi mdi-comment-account-outline" />
                                    </div>
                                    <p className="notify-details">
                                        Caleb Flakelar commented on Admin
                                        <small className="text-muted">4 days ago</small>
                                    </p>
                                </Link>
                            
                                <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon">
                                        <img
                                            src="assets/images/users/avatar-4.jpg"
                                            className="img-fluid rounded-circle"
                                            alt=""
                                        />{" "}
                                    </div>
                                    <p className="notify-details">Karen Robinson</p>
                                    <p className="text-muted mb-0 user-msg">
                                        <small>Wow ! this admin looks good and awesome design</small>
                                    </p>
                                </Link>
                            
                                <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-info">
                                        <i className="mdi mdi-heart" />
                                    </div>
                                    <p className="notify-details">
                                        Carlos Crouch liked
                                        <b>Admin</b>
                                        <small className="text-muted">13 days ago</small>
                                    </p>
                                </Link>
                            </div>
                        
                            <Link
                                to="javascript:void(0);"
                                className="dropdown-item text-center text-primary notify-item notify-all"
                            >
                                View All
                            </Link>
                        </div>
                    </li>
                    <li className="dropdown notification-list d-none d-sm-inline-block">
                        <Link
                            className="nav-link dropdown-toggle arrow-none"
                            data-bs-toggle="dropdown"
                            to="#"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                        >
                            <i className="dripicons-view-apps noti-icon" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
                            <div className="p-2">
                                <div className="row g-0">
                                    <div className="col">
                                        <Link className="dropdown-icon-item" to="#">
                                            <img src="assets/images/brands/slack.png" alt="slack" />
                                            <span>Slack</span>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <Link className="dropdown-icon-item" to="#">
                                            <img src="assets/images/brands/github.png" alt="Github" />
                                            <span>GitHub</span>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <Link className="dropdown-icon-item" to="#">
                                            <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                                            <span>Dribbble</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col">
                                        <Link className="dropdown-icon-item" to="#">
                                            <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                                            <span>Bitbucket</span>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <Link className="dropdown-icon-item" to="#">
                                            <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                                            <span>Dropbox</span>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <Link className="dropdown-icon-item" to="#">
                                            <img src="assets/images/brands/g-suite.png" alt="G Suite" />
                                            <span>G Suite</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="notification-list">
                        <Link className="nav-link end-bar-toggle" to="javascript: void(0);">
                            <i className="dripicons-gear noti-icon" />
                        </Link>
                    </li>
                    <li className="dropdown notification-list">
                        <Link
                            className="nav-link dropdown-toggle nav-user arrow-none me-0"
                            data-bs-toggle="dropdown"
                            to="#"
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
                        
                            <div className=" dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>
                        
                            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-account-circle me-1" />
                                <span>My Account</span>
                            </Link>
                        
                            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-account-edit me-1" />
                                <span>Settings</span>
                            </Link>
                        
                            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-lifebuoy me-1" />
                                <span>Support</span>
                            </Link>
                        
                            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-lock-outline me-1" />
                                <span>Lock Screen</span>
                            </Link>
                        
                            <Link to="javascript:void(0);" className="dropdown-item notify-item">
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
                    
                        <div className="dropdown-header noti-title">
                            <h5 className="text-overflow mb-2">
                                Found <span className="text-danger">17</span> results
                            </h5>
                        </div>
                    
                        <Link to="javascript:void(0);" className="dropdown-item notify-item">
                            <i className="uil-notes font-16 me-1" />
                            <span>Analytics Report</span>
                        </Link>
                    
                        <Link to="javascript:void(0);" className="dropdown-item notify-item">
                            <i className="uil-life-ring font-16 me-1" />
                            <span>How can I help you?</span>
                        </Link>
                    
                        <Link to="javascript:void(0);" className="dropdown-item notify-item">
                            <i className="uil-cog font-16 me-1" />
                            <span>User profile settings</span>
                        </Link>
                    
                        <div className="dropdown-header noti-title">
                            <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                        </div>
                        <div className="notification-list">
                        
                            <Link to="javascript:void(0);" className="dropdown-item notify-item">
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
                        
                            <Link to="javascript:void(0);" className="dropdown-item notify-item">
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