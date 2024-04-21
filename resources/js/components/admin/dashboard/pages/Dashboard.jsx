import React from "react";
import { NavLink } from "react-router-dom";
import { Layout } from "../../layouts/Layout.jsx";
function Dashboard() {
    return (
          
         <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <h4 className="page-title">Dashboard</h4>
                        </div>
                    </div>
                </div>
            </div>
           </Layout>
    );
}
export default Dashboard;