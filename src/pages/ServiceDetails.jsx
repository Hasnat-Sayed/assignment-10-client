import React, { useContext, useEffect, useState } from 'react';
import { FaCalendarDays, FaLocationDot } from 'react-icons/fa6';
import { IoIosPricetags } from "react-icons/io";
import { useParams } from 'react-router';
import Loading from '../components/Loading';
import { FiCalendar } from 'react-icons/fi';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://pawmart-pi.vercel.app/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [id])


    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const buyerName = form.buyerName.value
        const buyerEmail = form.buyerEmail.value
        const productId = form.productId.value
        const productName = form.productName.value
        const quantity = service?.category === "Pets" ? 1 : parseInt(form.quantity.value);
        const price = parseInt(form.price.value)
        const address = form.address.value
        const phone = form.phone.value
        const date = form.date.value
        const note = form.note.value

        const formData = {
            buyerName,
            buyerEmail,
            productId,
            productName,
            quantity,
            price,
            address,
            phone,
            date,
            note,
        }
        // console.log(formData)
        axios.post('https://pawmart-pi.vercel.app/orders', formData)
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: "Order placed successfully!",
                    icon: "success",
                    draggable: true
                });
                document.getElementById('my_modal_3').close();
            })
            .catch(err => {
                console.log(err);
            })

    }


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
                                    <span className='text-base-content'>Owners Email: </span>
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
                            <p className='text-center md:text-left text-base-content/70 font-medium'>{service?.description}</p>

                            <div className='flex  justify-center md:justify-start'>


                                <button className="btn mt-4 btn-primary mb-0 rounded-xl shadow-xl hover:scale-105 transition duration-200 text-xl py-6 px-18" onClick={() => document.getElementById('my_modal_3').showModal()}>Adopt / Order Now</button>


                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box bg-base-300 max-h-[700px]">
                                        <form method="dialog ">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                                onClick={() => document.getElementById('my_modal_3').close()}
                                            >
                                                ✕
                                            </button>

                                        </form>

                                        <form onSubmit={handleOrder} className="fieldset bg-base-300  w-full">
                                            <legend className="fieldset-legend text-primary font-bold text-3xl">Order Details</legend>

                                            <label className="label text-secondary font-semibold text-base">Buyer Name</label>
                                            <input type="text" readOnly defaultValue={user?.displayName} className="input w-full rounded-xl" placeholder="Buyer Name" name="buyerName" />

                                            <label className="label text-secondary font-semibold text-base">Buyer Email</label>
                                            <input type="email" readOnly defaultValue={user?.email} className="input w-full rounded-xl" placeholder="Buyer Email" name="buyerEmail" />

                                            <label className="label text-secondary font-semibold text-base">Product/Listing ID</label>
                                            <input type="text" readOnly defaultValue={service?._id} className="input w-full rounded-xl" placeholder="Product/Listing ID" name="productId" />

                                            <label className="label text-secondary font-semibold text-base">Product/Listing Name</label>
                                            <input type="text" readOnly defaultValue={service?.name} className="input w-full rounded-xl" placeholder="Product/Listing Name" name="productName" />

                                            <label className="label text-secondary font-semibold text-base">Quantity</label>
                                            {service?.category === "Pets" ? (
                                                <input
                                                    type="number"
                                                    name="quantity"
                                                    value={1}
                                                    readOnly
                                                    className="input w-full rounded-xl"
                                                />
                                            ) : (
                                                <input
                                                    type="number"
                                                    name="quantity"
                                                    required
                                                    className="input w-full rounded-xl"
                                                    placeholder="Quantity"
                                                />
                                            )}
                                            {/* <input type="number" className="input w-full rounded-xl" placeholder="Quantity" name="quantity" required /> */}

                                            <label className="label text-secondary font-semibold text-base">Price</label>
                                            <input type="number" readOnly defaultValue={service?.price} className="input w-full rounded-xl" placeholder="Price" name="price" />

                                            <label className="label text-secondary font-semibold text-base">Address</label>
                                            <input type="text" className="input w-full rounded-xl" placeholder="Address" name="address" required />

                                            <label className="label text-secondary font-semibold text-base">Phone</label>
                                            <input type="number" className="input w-full rounded-xl" placeholder="Phone Number" name="phone" required />

                                            <label className="abel text-secondary font-semibold text-base">Pick Up Date</label>
                                            <div className="input input-bordered rounded-xl w-full flex items-center gap-2 bg-base-200">
                                                <FiCalendar className="text-lg opacity-70" />
                                                <input
                                                    type="date"
                                                    name="date"
                                                    className="grow"
                                                    required
                                                />
                                            </div>

                                            <label className="abel text-secondary font-semibold text-base">Additional Notes</label>
                                            <textarea
                                                name="note"
                                                className="textarea textarea-bordered w-full rounded-xl bg-base-200"
                                                type="text"
                                                placeholder="Write Your notes..."

                                            ></textarea>

                                            <button type="submit" className="btn btn-primary rounded-2xl">Place Order</button>
                                        </form>
                                    </div>
                                </dialog>

                            </div>



                        </div>
                    </div>
                )
            }



        </div >
    );
};

export default ServiceDetails;