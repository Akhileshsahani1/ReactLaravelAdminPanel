import React from "react";
import { Layout } from "../../../layouts/Layout";
import { Link } from "react-router-dom";

function AddUser() {
    return (
        <Layout>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box">
                                <div className="page-title-right">
                                    <Link to="/dashboard/users" className="btn btn-sm btn-dark me-1">
                                        <i className="mdi mdi-chevron-double-left me-1" />
                                        Back
                                    </Link>
                                    <button
                                        type="submit"
                                        className="btn btn-sm btn-success"
                                        form="accountUserForm"
                                    >
                                        <i className="mdi mdi-database me-1" />
                                        Save
                                    </button>
                                </div>
                                <h4 className="page-title">Create Account User</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <form encType="multipart/form-data">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 mb-2">
                                            <h4 className="text-dark">Personal Details</h4>
                                        </div>
                                        <div className="col-sm-6 mb-2">
                                            <label className="col-form-label" htmlFor="firstname">
                                                Firstname
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstname"
                                                name="firstname"
                                                placeholder="Enter First Name"
                                                defaultValue=""
                                            />
                                        </div>
                                        <div className="col-sm-6 mb-2">
                                            <label className="col-form-label" htmlFor="email">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Enter Email Address"
                                                defaultValue=""
                                            />
                                        </div>
                                        <div className="col-sm-6 mb-2">
                                            <label className="col-form-label" htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                placeholder="Enter Password"
                                                defaultValue=""
                                            />
                                        </div>
                                        <div className="col-sm-6 mb-2">
                                            <label
                                                className="col-form-label"
                                                htmlFor="password_confirmation"
                                            >
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                placeholder="Confirm Password"
                                                defaultValue=""
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="col-form-label" htmlFor="avatar">
                                                Profile Picture
                                            </label>
                                            <div className="input-group">
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="avatar"
                                                    name="avatar"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-footer text-end">
                                    <Link to="/dashboard/users" className="btn btn-sm btn-dark me-1">
                                        <i className="mdi mdi-chevron-double-left me-1" />
                                        Back
                                    </Link>
                                    <button
                                        type="submit"
                                        className="btn btn-sm btn-success"
                                        form="accountUserForm"
                                    >
                                        <i className="mdi mdi-database me-1" />
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </Layout>


    );
}

export default AddUser;