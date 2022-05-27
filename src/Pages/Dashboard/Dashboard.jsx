import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const email = (user.email);
    const [adminRule, setAdminRule] = useState({})
    useEffect(() => {
        const allUser = async()=>{
            if(email){
                const { data } = await axios.get(
                `https://fathomless-beach-67972.herokuapp.com/user/${email}`
                );
                setAdminRule(data);
                // console.log(data);
            }
        }
        allUser();
    },[email]);

    return (

        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className="text-xl text-center md:text-2xl font-bold text-[#2BAAA9] mb-3">
                Welcome to your Dashboard
                </h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="bg-gray-200 space-y-3 menu p-4 overflow-y-auto  text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/review">Add a review</Link></li>
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                    {adminRule.rule &&  <>
                    <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
                    <li><Link to="/dashboard/addproduct">Add A Product</Link></li>
                    <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                    <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                   </> }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;