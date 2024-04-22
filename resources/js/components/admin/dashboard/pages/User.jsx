import React, { useState, useEffect } from "react";
import { Layout } from "../../layouts/Layout.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import { REACT_APP_API } from "../../schema/index.jsx";
import Filter from "./users/Filter.jsx";
import avtar1 from '../../../../../../public/assets/images/users/avatar-1.jpg';
// import { UserPagination } from "./users/Userpagination.jsx";



function User() {
    const [user, setUsers] = useState([]);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        const headers = { 'Authorization': `Bearer ${token}` };
        axios.get(`${REACT_APP_API}/getUser`, { headers }).then((res) => {
            setUsers(res.data.users.data);
        }).catch((error) => {
            console.error('Error fetching user:', error);
        });
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
                                    to=""
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
                 <Filter setUsers={setUsers}/>
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
                                                    <th>Avtar</th>
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody>
                                           
                                                {user.map((user) => (         
                                                       <tr key={user.id}>
                                                       <td>
                                                           <div className="form-check">
                                                               <input type="checkbox" className="form-check-input checkbox-row"
                                                                   name="rows" 
                                                                   value={user.id} />
                                                                   <label className="form-check-label">&nbsp;</label>
                                                           </div>
                                                       </td>
                                                       <td>{user.name}</td>
                                                       <td>{user.email}</td>
                                                       <td> <img src={avtar1} alt="" height={24} className="rounded-circle"/></td>
                                                   </tr>
                                            ))}
                                    
                                            </tbody>
                                               
                                        </table>
                                        {/* <UserPagination user={user}/> */}
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