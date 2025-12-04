import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { AiOutlinePicture } from 'react-icons/ai';
import { FiCalendar } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddListing = () => {
    const { user } = useContext(AuthContext);



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
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

        console.log(formData);

        axios.post('http://localhost:3000/services',
            formData)
            .then(res => {
                console.log(res);
                toast.success("New Listing added Successfully")
            })

    };


    return (
        <div className="min-h-screen bg-base-300 py-12 px-4">
            <div className="max-w-2xl mx-auto bg-base-100 py-10 px-10 lg:px-20 rounded-2xl shadow-xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content">
                        Add New <span className="text-primary">Listing</span>
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="label text-secondary font-semibold text-xl">Product/Pet Name</label>
                        <input
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

                    <button className="btn btn-primary w-full text-lg rounded-xl py-6">Submit Listing</button>
                </form>

            </div>
        </div>
    );
};

export default AddListing;