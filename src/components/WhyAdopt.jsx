import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { FaHeart, FaHome } from 'react-icons/fa';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { IoPeople } from 'react-icons/io5';


const WhyAdopt = () => {
    const tips = [
        {
            id:  1,
            icon: <FaHeart className="w-12 h-12 text-primary" />,
            title: "Save a Life",
            description: "Every adoption saves a life and opens up space for another animal in need. You're giving a second chance to a deserving pet."
        },
        {
            id: 2,
            icon: <FaHome  className="w-12 h-12 text-primary"/>,
            title: "Find Your Perfect Match",
            description: "Our shelters have pets of all ages, sizes, and personalities. From playful puppies to calm seniors, there's a perfect companion waiting for you."
        },
        {
            id: 3,
            icon: <FaBangladeshiTakaSign className="w-12 h-12 text-primary"/>,
            title: "Affordable & Responsible",
            description: "Adoption fees are significantly lower than buying from breeders. Plus, most pets are already vaccinated, spayed/neutered, and health-checked."
        },
        {
            id: 4,
            icon: <IoPeople className="w-12 h-12 text-primary"/>,
            title: "Support Animal Welfare",
            description: "By adopting, you're taking a stand against puppy mills and unethical breeding. You're supporting humane treatment of all animals."
        }
    ];

    return (
        <div className='bg-linear-to-b from-base-200 to-base-300 py-16'>
            <div className="container mx-auto px-4 lg:px-20">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content">
                        Why Adopt from <span className='text-blue-800'>PawMart</span>?
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tips.map(tip => (
                        <div
                            key={tip.id}
                            className="card bg-linear-to-b from-base-100 to-base-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            <div className="card-body items-center text-center">
                                <div className="mb-3">
                                    {tip.icon}
                                </div>
                                <p className="text-xl font-bold text-secondary">
                                    {tip.title}
                                </p>
                                <p className="text-gray-600">
                                    {tip.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyAdopt;