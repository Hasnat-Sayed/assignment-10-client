import React from 'react';
import { Link } from 'react-router';

const Category = () => {
    const categories = [
        {
            name: "Pets",
            displayName: "🐶 Pets (Adoption)",
            image: "https://images.unsplash.com/photo-1760750258977-c73e1b7f39fb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Food",
            displayName: "🍖 Pet Food",
            image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Accessories",
            displayName: "🧸 Accessories",
            image: "https://images.unsplash.com/photo-1587559070757-f72a388edbba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Care Products",
            displayName: "💊 Pet Care Products",
            image: "https://images.unsplash.com/photo-1710322928695-c7fb49886cb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    return (
        <div className='container mx-auto mt-16 mb-16 px-4 lg:px-20'>
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content">
                    Browse by <span className='text-primary'>Categories</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <Link 
                        key={index}
                        to={`/category/${category.name}`}
                        className="card bg-base-100 image-full w-full shadow-sm hover:scale-105 transition-all transform duration-300 cursor-pointer "
                    >
                        <figure>
                            <img src={category.image} alt={category.displayName} />
                        </figure>
                        <div className="card-body flex items-center justify-center">
                            <h2 className="card-title font-extrabold text-2xl">{category.displayName}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Category;