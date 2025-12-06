import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { AiOutlinePicture } from 'react-icons/ai';
import { FiCalendar } from 'react-icons/fi';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import Loading from '../components/Loading';
import Swal from 'sweetalert2';

const UpdateService = () => {


    const { user } = useContext(AuthContext);
    const { id } = useParams()
    const [service, setService] = useState()
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(service?.category)
    const navigation = useNavigate()



    useEffect(() => {
        axios.get(`http://localhost:3000/services/${id}`)
            .then(res => {
                setService(res.data)
                setLoading(false)
                setCategory(res.data.category)
            })
    }, [id])


    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;
        const date = form.date.value;
        const email = form.email.value;

        const formData = {
            name,
            category,
            price,
            location,
            description,
            image,
            date,
            email,
        }
        // console.log(formData)

        axios.put(`http://localhost:3000/update/${id}`, formData)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    title: "Listing Updated Successfully!",
                    icon: "success",
                    draggable: true
                });
                navigation('/my-services')
            })
            .catch(err => {
                console.log(err);
            })


    }
    return (
        <div className="min-h-screen bg-base-300 py-12 px-4">
            <div className="max-w-2xl mx-auto bg-base-100 py-10 px-10 lg:px-20 rounded-2xl shadow-xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content">
                        Update Your<span className="text-primary"> Listing</span>
                    </h1>
                </div>

                {
                    loading ? (<Loading></Loading>) : (
                        <form onSubmit={handleUpdate} className="space-y-4">
                            <div>
                                <label className="label text-secondary font-semibold text-xl">Product/Pet Name</label>
                                <input
                                    defaultValue={service?.name}
                                    type="text"
                                    name="name"
                                    className="input input-bordered w-full rounded-xl bg-base-200"
                                    placeholder="Enter name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label text-secondary font-semibold text-xl">Category</label>
                                <select
                                    name="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="select select-bordered w-full rounded-xl bg-base-200"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Pets">Pets</option>
                                    <option value="Food">Food</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Care Products">Care Products</option>
                                </select>
                            </div>

                            <div>
                                <label className="label text-secondary font-semibold text-xl">Price</label>
                                <input
                                    defaultValue={service?.price}
                                    type="number"
                                    name="price"
                                    // value={form.category === "Pets" ? 0 : form.price}
                                    className="input input-bordered w-full rounded-xl bg-base-200"
                                    placeholder="Price"

                                />
                            </div>

                            <div>
                                <label className="label text-secondary font-semibold text-xl">Location</label>
                                <input
                                    type="text"
                                    defaultValue={service?.location}
                                    name="location"
                                    className="input input-bordered w-full rounded-xl bg-base-200"
                                    placeholder="Dhaka, Bangladesh"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label text-secondary font-semibold text-xl">Description</label>
                                <textarea
                                    name="description"
                                    defaultValue={service?.description}
                                    className="textarea textarea-bordered w-full rounded-xl bg-base-200"
                                    placeholder="Write details..."
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <label className="label text-secondary font-semibold text-xl">Image URL</label>
                                <div className="input input-bordered rounded-xl flex w-full items-center gap-2 bg-base-200">
                                    <AiOutlinePicture className="text-xl opacity-70" />
                                    <input
                                        type="text"
                                        defaultValue={service?.image}
                                        name="image"
                                        className="grow"
                                        placeholder="https://example.com/photo.jpg"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="label text-secondary font-semibold text-xl">Pick Up Date</label>
                                <div className="input input-bordered rounded-xl w-full flex items-center gap-2 bg-base-200">
                                    <FiCalendar className="text-lg opacity-70" />
                                    <input
                                        type="date"
                                        defaultValue={service?.date}
                                        name="date"
                                        className="grow"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="label text-secondary font-semibold text-xl">Email (Read Only)</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user?.email}
                                    readOnly
                                    className="input input-bordered w-full bg-base-200 rounded-xl cursor-not-allowed"
                                />
                            </div>

                            <button className="btn btn-secondary w-full text-lg rounded-xl py-6">Update Listing</button>
                        </form>
                    )
                }



            </div>
        </div>
    );
};

export default UpdateService;