import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';
import Loading from '../components/Loading';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyListings = () => {

    const [myServices, setMyServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://pawmart-pi.vercel.app/my-services?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyServices(data);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [user?.email])
    // console.log(myServices);



    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://pawmart-pi.vercel.app/delete/${id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount == 1) {
                            const filterData = myServices.filter(service => service._id != id)
                            setMyServices(filterData)

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        });


    }


    return (
        <div className='container bg-base-200 mx-auto pt-10 pb-16 px-4 lg:px-20 min-h-screen'>
            <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content">My <span className='text-primary'>Pets</span> & <span className='text-secondary'>Supply </span>Listings</h3>
            </div>

            {
                loading ? (<Loading></Loading>) : (
                    <div className="overflow-x-auto border border-neutral-300 rounded-2xl shadow-2xl">
                        <table className="table">
                            <thead className='text-primary text-xl bg-base-300'>
                                <tr>
                                    <th>Name & Description</th>
                                    <th>Category</th>
                                    <th>Pick Up Date</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myServices.map(service =>
                                        <tr key={service?._id} className='bg-base-100 '>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={service?.image}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{service?.name}</div>
                                                        <p className='text-base-content/60'>{service?.description}</p>

                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge badge-outline text-base-content/70 badge-neutral font-semibold">{service?.category}</span>
                                            </td>
                                            <td><p>{service?.date}</p></td>
                                            <td><p className='font-bold'>৳{service?.price}</p></td>
                                            <td>
                                                <div className='flex gap-3'>
                                                    <button onClick={() => handleDelete(service?._id)} className="btn btn-error btn-sm rounded-lg">Delete</button>

                                                    <Link to={`/update-services/${service?._id}`}><button className="btn btn-accent btn-sm rounded-lg">Update</button></Link>

                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>

                        </table>
                    </div>
                )
            }



        </div>
    );
};

export default MyListings;