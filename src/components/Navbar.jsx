import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { FaPaw } from 'react-icons/fa';

const Navbar = () => {

    const { user, setUser, loading } = useContext(AuthContext);

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
        <div className="navbar bg-base-100 backdrop-blur-xl shadow-xl px-2 lg:px-20 border-b border-white/20">
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
                                <li><NavLink to="/">My Listings</NavLink></li>
                                <li><NavLink to="/">My Orders</NavLink></li>
                            </>)
                        }

                    </ul>
                </div>
                <div className='flex items-center justify-center gap-1'>
                    <FaPaw className="text-xl text-secondary" />
                    <p className="text-2xl font-bold tracking-wide bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">PawMart</p>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/all-services">Pets & Supplies</NavLink></li>
                    {
                        user && (<>
                            <li><NavLink to="/add-services">Add Listing</NavLink></li>
                            <li><NavLink to="/">My Listings</NavLink></li>
                            <li><NavLink to="/">My Orders</NavLink></li>
                        </>)
                    }
                </ul>
            </div>

            {
                loading ? (<div className="navbar-end flex gap-3">
                    <span className="loading loading-spinner loading-xl"></span>
                </div>) : user ?
                    (<div className="navbar-end flex gap-3">
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <img
                                src={user?.photoURL}
                                className='w-10 h-10 rounded-full object-cover ring-2 ring-primary cursor-pointer'
                                alt={user?.displayName}
                                referrerPolicy="no-referrer"
                            />
                        </div>

                        <button onClick={handleSignOut} className="btn btn-primary rounded-full">Logout</button>
                    </div>)
                    : (<div className="navbar-end flex gap-2">
                        <Link to={'/login'} className="btn btn-primary rounded-full">Login</Link>
                        <Link to={'/register'} className="btn btn-secondary rounded-full">Register</Link>
                    </div>)
            }



        </div>
    );
};

export default Navbar;