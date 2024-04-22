import React from "react";
import { Link } from "react-router-dom";
import {}
function UserList() {

    return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <Link href="" className="btn btn-sm btn-dark float-end">
                                    <i className="mdi mdi-plus" /> Add Account User
                                </Link>
                                <Link
                                    href="javascript:void(0)"
                                    className="btn btn-sm btn-danger float-end me-1"
                                    style={{ display: "none" }}
                                    id="delete-all"
                                >
                                    <i className="mdi mdi-delete" /> Delete
                                
                                </Link>
                            </div>
                            <h4 className="page-title">Account Users</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 table-responsive">
                                        <table
                                            id="basic-datatable"
                                            className="table table-striped dt-responsive nowrap w-100"
                                        >
                                            <thead className="bg-dark">
                                                <tr>
                                                    <th className="all" width="3%">
                                                        <div className="form-check">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                id="all-rows"
                                                            />
                                                            <label className="form-check-label">&nbsp;</label>
                                                        </div>
                                                    </th>
                                                    <th>Account User</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>Enabled</th>
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default UserList;