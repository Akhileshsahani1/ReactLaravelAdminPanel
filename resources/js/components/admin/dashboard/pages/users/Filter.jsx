import React,{useState}from "react";
import { Link } from "react-router-dom";
function Filter() {
    const [name,setName] = useState([""]);
    const [email,setEmail] = useState([""]);

    const handleSubmit = (e)=>{
         e.preventDefault();
        
    }
    return (
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <form  onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-sm-5 mb-2">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            id="name"
                                            name="name"
                                            defaultValue=""
                                            onChange={(e)=>setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-sm-5 mb-2">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control form-control-sm"
                                            id="email"
                                            name="email"
                                            defaultValue=""
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-sm-2 mb-2 text-end">
                                        <button
                                            type="submit"
                                            className="btn btn-sm btn-secondary me-1"
                                            style={{ marginTop: 22 }}
                                        >
                                            Filter
                                        </button>
                                        <Link
                                            to=""
                                            className="btn btn-sm btn-dark ms-1"
                                            style={{ marginTop: 22 }}
                                        >
                                            Reset
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Filter;