import React from 'react';
import { FaFacebookF, FaPaw, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer>
            <div className="footer sm:footer-horizontal bg-slate-900 text-white p-10 px-4 lg:px-20">
                <aside className='max-w-sm'>
                    <FaPaw className="text-4xl text-secondary" />

                    <p className='font-bold text-primary text-3xl'>
                        PawMart
                    </p>
                    <p className='opacity-70'>“PawMart connects local pet owners and buyers for adoption and pet care products.”</p>
                </aside>
                <nav>
                    <h6 className="footer-title text-lg">Quick Links</h6>
                    <Link to="/" className="link link-hover">Home</Link>
                    <Link to="/services" className="link link-hover">Pets & Supplies</Link>

                </nav>

                <nav>
                    <h6 className="footer-title text-lg">Contact info</h6>
                    <a className="link link-hover">pawMart@mail.com</a>
                    <a className="link link-hover">+880-123456789</a>
                    <a className="link link-hover">Chittagong, Bangladesh</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-lg">Social</h6>
                    <div className="grid grid-flow-col gap-4 justify-center items-center">
                        <a className="link link-hover">
                            <FaXTwitter className='text-2xl' />
                        </a>
                        <a className="link link-hover">
                            <FaFacebookF className='text-2xl' />
                        </a>
                        <a className="link link-hover">
                            <FaYoutube className='text-2xl'/>
                        </a>
                    </div>
                </nav>

            </div>
            <div className="footer sm:footer-horizontal footer-center bg-slate-900 text-white py-8 border-t border-gray-500">

                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by PawMart.</p>
                </aside>
            </div>

        </footer>
    );
};

export default Footer;