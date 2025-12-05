import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Loading from '../components/Loading';
import { Link } from 'react-router';
import { motion } from "motion/react"
import { FaLocationDot } from 'react-icons/fa6';


const Services = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [])
    return (
        <div className='container bg-base-200 mx-auto pt-8 pb-16 px-4 lg:px-20 min-h-screen'>
            <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content">All <span className='text-primary'>Pets</span> & <span className='text-secondary'>Supplies</span></h3>
            </div>
            {
                loading ? (<Loading></Loading>) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            services.map(service => (
                                <motion.div initial={{ scale: 0.9 }} animate={{
                                    scale: 1,
                                    transition: { duration: 0.2 }
                                }} key={service.serviceId} className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl">
                                    <figure>
                                        <img
                                            src={service?.image}
                                            className="h-80 w-full object-cover" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-2xl text-primary">{service?.name}</h2>
                                         <div className="badge badge-secondary text-md px-3 py-2 font-semibold rounded-full">{service?.category}</div>
                                        <div className='flex justify-between items-center w-full py-2'>
                                            <div className='flex gap-1 items-center font-semibold text-accent text-lg '>
                                                <FaLocationDot  className='text-accent text-xl' />
                                                <span className='text-primary font-semibold'> {service?.location}</span>
                                            </div>
                                            <div className='font-semibold text-accent text-lg' >
                                                Price:
                                                <span className='text-primary  font-semibold'> ৳{service?.price}</span></div>
                                        </div>

                                        <div className="card-actions w-full">
                                            <Link to={`/details/${service?._id}`} className="w-full"><button className="btn btn-primary w-full rounded-xl shadow-2xl hover:scale-105 transition-all transform duration-200">See Details</button></Link>

                                        </div>
                                    </div>
                                </motion.div>
                            )
                            )
                        }
                    </div>
                )
            }


        </div>
    );
};

export default Services;