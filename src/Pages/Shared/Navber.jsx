import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navber = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
      signOut(auth);
    //   localStorage.removeItem('Access_token');
    };

    const menuItems = (
        <>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/appointment">Appointment</Link></li>
          <li><Link to="/review">Review</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
          }

        </>
      );

    return (
        <>
            <div class="navbar md:px-0 sticky top-0 z-50">
                <div class="navbar-start">
                    <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 4</a></li>
                        <li><a>Item 5</a></li>
                        <li><a>Item 6</a></li> */}
                        {
                            menuItems
                        }
                    </ul>
                    </div>
                    <a class="btn btn-ghost normal-case p-0 text-xl">daisyUI</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {/* <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 4</a></li>
                        <li><a>Item 5</a></li>
                        <li><a>Item 6</a></li> */}

                        {
                            menuItems
                        }
                    </ul>
                </div>
                <div class="navbar-end">
                <ul>
                    <li>
                        {user ? (
                            <button className="btn btn-ghost md:p-0" onClick={logout}>
                                Sign Out
                            </button>
                        ) : (
                            <Link to="/login" className="">Login</Link>
                        )}
                    </li>
                </ul>
                    {/* <Link to="/signup" class="btn" onClick={logout}>Sign-Up</Link> */}
                </div>
            </div>
        </>
    );
};

export default Navber;