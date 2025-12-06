import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const MeetHeros = () => {
    {
        const heroes = [
            {
                name: "Sarah Johnson",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
                petImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
                petName: "Max",
                story: "Adopting Max from PawMart was the best decision I ever made. He was shy at first, but now he's the most loving companion. We go on adventures every weekend!",
                adoptedDate: "Adopted: March 2025"
            },
            {
                name: "Michael Chen",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
                petImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
                petName: "Luna",
                story: "Luna came into my life when I needed her most. She's not just a pet; she's family. The team at PawMart made the adoption process so smooth and supportive.",
                adoptedDate: "Adopted: January 2025"
            },
            {
                name: "Emily Rodriguez",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
                petImage: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop",
                petName: "Bella",
                story: "I volunteer at PawMart and ended up adopting two amazing dogs! Seeing these animals transform with love and care inspired me to give them a forever home.",
                adoptedDate: "Adopted: August 2025"
            },
            {
                name: "David Thompson",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                petImage: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop",
                petName: "Charlie",
                story: "Fostering Charlie showed me the true meaning of unconditional love. After three weeks, I knew I couldn't let him go. He's now a permanent member of our family!",
                adoptedDate: "Adopted: September 2025"
            }
        ];

        return (
            <section className=" bg-base-100">
                <div className="container mx-auto mt-16 mb-16 px-4 lg:px-20">
                    <div className="text-center mb-12">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content">
                                Meet Our <span className="text-pink-500">Pet Heroes</span>
                            </h2>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {heroes.map((hero, index) => (
                            <div
                                key={index}
                                className="bg-linear-to-b from-primary/30 to-base-100 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 hover:shadow-primary/40"
                            >
                                <div className="h-60 overflow-hidden">
                                    <img
                                        src={hero.image}
                                        alt={hero.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                                    />
                                </div>

                                <div className="flex justify-center -mt-12 relative z-10">
                                    <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-2xl">
                                        <img
                                            src={hero.petImage}
                                            alt={hero.petName}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>


                                <div className="p-6 pt-2">
                                    <div className="text-center mb-4">
                                        <p className="text-xl font-bold text-primary">{hero.name}</p>
                                        <p className="text-md font-semibold text-secondary">
                                            With {hero.petName}
                                        </p>
                                        <p className="text-sm text-base-content/70">
                                            {hero.adoptedDate}
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <FaQuoteLeft className="text-md text-accent absolute -top-1 -left-1" />
                                        <p className="text-base-content/70 text-sm leading-relaxed pl-4 italic">
                                            {hero.story}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
        );
    };

};

export default MeetHeros;