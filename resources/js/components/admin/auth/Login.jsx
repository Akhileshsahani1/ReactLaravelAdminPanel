import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { LoginSchema, REACT_APP_API } from "../schema/index.jsx";

const InitialValue = {
    email: "",
    password: "",

}
function Login({ setToken }) {

    const navigate = useNavigate();

    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: InitialValue,
        validationSchema: LoginSchema,
        onSubmit: (values, action) => {
            axios.post(`${REACT_APP_API}/login`, values).then((res) => {
                localStorage.setItem('token', res.data.access_token);
                setToken(res.data.access_token)
                const token = localStorage.getItem('token')

                if (!token) {
                    alert('Unable to login. Please try after some time.');
                    localStorage.clear();
                    navigate('/');
                } else {
                    setTimeout(() => {
                        navigate('/dashboard');
                    }, 500);
                }
            }).catch((error) => {
                console.error(error);
            });
            action.resetForm();
        }

    });
    return (
        <>
            <meta charSet="utf-8" />
            <title>Log In | Hyper - Responsive Bootstrap 5 Admin Dashboard</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta
                content="A fully featured admin theme which can be used to build CRM, CMS, etc."
                name="description"
            />
            <meta content="Coderthemes" name="author" />
            <link rel="shortcut icon" href="assets/images/favicon.ico" />
            <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
            <link
                href="assets/css/app.min.css"
                rel="stylesheet"
                type="text/css"
                id="light-style"
            />
            <link
                href="assets/css/app-dark.min.css"
                rel="stylesheet"
                type="text/css"
                id="dark-style"
            />
            <div className="auth-fluid">
                <div className="auth-fluid-form-box">
                    <div className="align-items-center d-flex h-100">
                        <div className="card-body">
                            <div className="auth-brand text-center text-lg-start">
                                <a href="index.html" className="logo-dark">
                                    <span>
                                        <img src="assets/images/logo-dark.png" alt="" height={18} />
                                    </span>
                                </a>
                                <a href="index.html" className="logo-light">
                                    <span>
                                        <img src="assets/images/logo.png" alt="" height={18} />
                                    </span>
                                </a>
                            </div>
                            <h4 className="mt-0">Sign In</h4>
                            <p className="text-muted mb-4">
                                Enter your email address and password to access account.
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="emailaddress" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="emailaddress"
                                        name="email"
                                        onChange={handleChange}
                                        value={values.email}
                                        placeholder="Enter your email"
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email ? <div className="text-danger">{errors.email}</div> : null}
                                </div>
                                <div className="mb-3">
                                    <a href="pages-recoverpw-2.html" className="text-muted float-end">
                                        <small>Forgot your password?</small>
                                    </a>
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        id="password"
                                        autocomplete="current-password"
                                        onChange={handleChange}
                                        value={values.password}
                                        onBlur={handleBlur}
                                    />

                                    {errors.password && touched.password ? <div className="text-danger">{errors.password}</div> : null}
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="checkbox-signin"
                                        />
                                        <label className="form-check-label" htmlFor="checkbox-signin">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <div className="d-grid mb-0 text-center">
                                    <button className="btn btn-primary" type="submit">
                                        <i className="mdi mdi-login" /> Log In
                                    </button>
                                </div>
                                <div className="text-center mt-4">
                                    <p className="text-muted font-16">Sign in with</p>
                                    <ul className="social-list list-inline mt-3">
                                        <li className="list-inline-item">
                                            <a
                                                href="javascript: void(0);"
                                                className="social-list-item border-primary text-primary"
                                            >
                                                <i className="mdi mdi-facebook" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a
                                                href="javascript: void(0);"
                                                className="social-list-item border-danger text-danger"
                                            >
                                                <i className="mdi mdi-google" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a
                                                href="javascript: void(0);"
                                                className="social-list-item border-info text-info"
                                            >
                                                <i className="mdi mdi-twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a
                                                href="javascript: void(0);"
                                                className="social-list-item border-secondary text-secondary"
                                            >
                                                <i className="mdi mdi-github" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                            <footer className="footer footer-alt">
                                <p className="text-muted">
                                    Don't have an account?
                                    <a href="pages-register-2.html" className="text-muted ms-1">
                                        <b>Sign Up</b>
                                    </a>
                                </p>
                            </footer>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
}

export default Login;