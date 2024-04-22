import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { REACT_APP_API } from "../../../schema";



function Filter({ setUsers }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
         e.prevent
        const token = localStorage.getItem('token');
        const headers = { 'Authorization': `Bearer ${token}` };
        
        axios.get(`${REACT_APP_API}/getUser?name=${name}&email=${email}`,{headers}).then((res) => {
            setUsers(res.data.users.data);
        });
    

    }

    const handelReset = ()=>{
           setName('');
           setEmail('');
           handleSubmit();
    }
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        
                            <div className="row">
                                <div className="col-sm-4 mb-2">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="col-sm-5 mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control form-control-sm"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="col-sm-3 mb-2 text-end">
                                    <button
                                        type=""
                                        className="btn btn-sm btn-secondary me-1"
                                        style={{ marginTop: 22 }}
                                        onClick={handleSubmit}
                                    >
                                        Filter
                                    </button>
                                    <button
                                        
                                        className="btn btn-sm btn-dark ms-1"
                                        style={{ marginTop: 22 }}
                                        onClick={handelReset}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;