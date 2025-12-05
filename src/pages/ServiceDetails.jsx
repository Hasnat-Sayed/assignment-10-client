import React, { useEffect, useState } from 'react';
import { FaCalendarDays, FaLocationDot } from 'react-icons/fa6';
import { IoIosPricetags } from "react-icons/io";
import { useParams } from 'react-router';
import Loading from '../components/Loading';

const ServiceDetails = () => {
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [id])



    return (

        <div className='bg-base-200 px-4 lg:px-20 py-4 md:py-8 lg:py-16'>
            {
                loading ? (<Loading></Loading>) : (
                    <div className='md:flex gap-x-10 pb-6'>

                        <div className=' bg-base-100 p-6 rounded-2xl shadow-2xl'>
                            <img src={service?.image} className='rounded-xl h-96 w-96 object-cover' alt="" />
                        </div>

                        <div className='flex-1'>
                            <div className='border-b pb-5 border-accent'>
                                <h1 className='text-4xl text-primary text-center md:text-left font-bold mt-8 md:mt-0'>
                                    {service?.name}
                                </h1>
                                <p className='mt-4 text-center md:text-left text-xl font-semibold text-primary '>Category: <span className='bg-secondary text-neutral px-2 py-1 rounded-lg'>{service?.category}</span></p>
                            </div>

                            <div className='border-b pb-5 border-accent'>

                                <p className='mt-5 text-center md:text-left text-2xl font-semibold text-accent'>
                                    <span className='text-neutral'>Owners Email: </span>
                                    {service?.email}
                                </p>
                            </div>

                            <div className='md:flex md:gap-20 gap-10 my-5 md'>

                                <div className='text-center md:text-left md:mt-0 mt-8'>
                                    <IoIosPricetags className='mx-auto md:m-0 text-3xl text-secondary' />
                                    <h2 className='text-2xl mt-3 text-primary font-semibold'>৳{service?.price}</h2>
                                </div>

                                <div className='text-center md:text-left md:mt-0 mt-8'>
                                    <FaLocationDot className='mx-auto md:m-0 text-3xl text-secondary' />
                                    <h2 className='text-2xl mt-3 text-primary font-semibold'>{service?.location}</h2>
                                </div>
                                <div className='text-center md:text-left md:mt-0 mt-8'>
                                    <FaCalendarDays className='mx-auto md:m-0 text-3xl text-secondary' />

                                    <h2 className='text-2xl mt-3 text-primary font-semibold'>{service?.date}  </h2>
                                </div>

                            </div>

                            <p className='pt-5 border-t border-accent text-center md:text-left text-2xl font-bold text-secondary'>
                                Description

                            </p>
                            <p className='text-center md:text-left text-accent-content font-medium'>{service?.description}</p>

                            <div className='flex  justify-center md:justify-start'>
                                <button className='btn mt-4 btn-primary mb-0 rounded-xl shadow-xl hover:scale-105 transition duration-200 text-xl py-6 px-18'>Adopt / Order Now</button>
                            </div>


                        </div>
                    </div>
                )
            }



        </div >
    );
};

export default ServiceDetails;