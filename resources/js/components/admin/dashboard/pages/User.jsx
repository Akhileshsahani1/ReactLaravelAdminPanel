import React, { useState, useEffect } from "react";
import { Layout } from "../../layouts/Layout.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import { REACT_APP_API } from "../../schema/index.jsx";
import Filter from "./users/Filter.jsx";

function User() {
    const [user, setUsers] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const headers = { 'Authorization': `Bearer ${token}` };
        axios.get(`${REACT_APP_API}/getUser`, { headers }).then((res) => {

            console.log(res.data, "console");
            setUsers(res.data.users.data)
        }).catch((error) => {
            console.error('Error fetching user:', error);
        });;
    }, []);

    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <Link to="/dashboard/users/create" className="btn btn-sm btn-dark float-end">
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
                 <Filter />
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
                                                    <th>Enabled</th>
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody>
                                           
                                                {user.map((user) => (         
                                                       <tr key={user.id}>
                                                       <td>
                                                           <div class="form-check">
                                                               <input type="checkbox" class="form-check-input checkbox-row"
                                                                   name="rows" 
                                                                   value={user.id} />
                                                                   <label class="form-check-label">&nbsp;</label>
                                                           </div>
                                                       </td>
                                                       <td>{user.name}</td>
                                                       <td>{user.email}</td>
                                                   </tr>
                                            ))}
                                    
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default User;