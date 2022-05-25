import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (

        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className="text-2xl text-center md:text-3xl font-bold text-[#2BAAA9]">
                Welcome to your Dashboard
                </h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/review">Add a review</Link></li>
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                    <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
                    <li><Link to="/dashboard/addproduct">Add a Product</Link></li>
                    <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                    <li><Link to="/dashboard/manageproduct">Manage Products</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;