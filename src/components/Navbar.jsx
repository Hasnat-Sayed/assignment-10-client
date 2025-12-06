import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { FaPaw } from 'react-icons/fa';

const Navbar = () => {

    const { user, setUser, loading } = useContext(AuthContext);
    const [isChecked, setIsChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false)

    const handleThemeChange = () => {
        setIsChecked(prev => !prev);
    };

    useEffect(() => {
        const theme = isChecked ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [isChecked]);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success("Signout successful");
                setUser(null);
            })
            .catch((e) => {
                toast.error(e.message);
            });
    }

    return (
        <div className="navbar bg-base-100 backdrop-blur-xl shadow-xl px-2 lg:px-20 border-b border-white/20  z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0 pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/all-services">Pets & Supplies</NavLink></li>
                        {
                            user && (<>
                                <li><NavLink to="/add-services">Add Listing</NavLink></li>
                                <li><NavLink to="/my-services">My Listings</NavLink></li>
                                <li><NavLink to="/my-orders">My Orders</NavLink></li>
                            </>)
                        }

                    </ul>
                </div>
                <div className='flex items-center justify-center gap-1'>
                    <FaPaw className="text-lg md:text-xl text-secondary" />
                    <p className="text-xl md:text-2xl font-bold tracking-wide bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">PawMart</p>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/all-services">Pets & Supplies</NavLink></li>
                    {
                        user && (<>
                            <li><NavLink to="/add-services">Add Listing</NavLink></li>
                            <li><NavLink to="/my-services">My Listings</NavLink></li>
                            <li><NavLink to="/my-orders">My Orders</NavLink></li>
                        </>)
                    }
                </ul>
            </div>

            {
                loading ? (<div className="navbar-end flex gap-3">
                    <span className="loading loading-spinner loading-xl"></span>
                </div>) : (<div className="navbar-end flex items-center gap-2 md:gap-3">
                    {/*theme*/}
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input onClick={handleThemeChange} type="checkbox" className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>

                    {user && (
                        <>
                            <div>
                                <img
                                    src={user?.photoURL}
                                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-primary cursor-pointer"
                                    alt={user?.displayName}
                                    referrerPolicy="no-referrer"
                                />
                            </div>

                            <button onClick={handleSignOut} className="btn btn-sm md:btn-md btn-primary rounded-full">
                                Logout
                            </button>
                        </>
                    )}

                    {!user && (
                        <>
                            <Link to="/login" className="btn btn-sm md:btn-md btn-primary rounded-full">Login</Link>
                            <Link to="/register" className="btn btn-sm md:btn-md btn-secondary rounded-full">Register</Link>
                        </>
                    )}

                </div>
                )
            }



        </div>
    );
};

export default Navbar;