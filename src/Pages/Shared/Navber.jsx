import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Navber = () => {
    const [user] = useAuthState(auth);
  

    const logout = () => {
      signOut(auth);
      toast.success('Sign-out Successfully ')
      localStorage.removeItem("Access_token");
    };

    const menuItems = (
      <>
        <li className="">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
          {user && (
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          )}
        <li>
          <NavLink to="/myportfolio">My Portfolio</NavLink>
        </li>
      </>
    );

    return (
      <>
        <div className="navbar md:px-10 sticky top-0 z-[100] bg-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden pl-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <Link to="/" className="font-semibold text-[18px] md:text-xl">
              Manufactur's Care
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 space-x-5">{menuItems}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                {" "}
                <div className="dropdown dropdown-end">
                  <label tabIndex="0">
                    <div className="avatar online">
                      <div className="w-8 rounded-full">
                        <img
                          src={user.photoURL ? user.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
                          alt=""
                        />
                      </div>
                    </div>
                  </label>
                  <ul
                    tabIndex="0"
                    className="dropdown-content menu flex text-black  p-4  shadow bg-base-100 rounded-box md:w-96"
                  >
                    <div className="space-y-4">
                      <li className="border-b text-lg font-semibold">
                        Name: {user.displayName}
                      </li>
                      <li className="border-b text-lg font-semibold">
                        Email: {user.email}
                      </li>
                      <li className="border-b text-lg font-semibold">
                        Profile
                        <input type="file" id="" />
                      </li>
                      <li className="btn btn-outline" onClick={logout}>
                        Sign Out
                      </li>
                    </div>
                  </ul>
                </div>
                <label
                  htmlFor="dashboard-sidebar"
                  className=" drawer-button pl-4 lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </>
            ) : (
              <Link to="/signup" className="btn">
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </>
    );
};

export default Navber;