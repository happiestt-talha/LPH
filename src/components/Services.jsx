// Services.js
import React from 'react';
import { motion } from 'framer-motion';

const services = [
    { title: 'Consulting', image: 'https://placehold.co/150', description: 'Expert business consulting services to accelerate growth.' },
    { title: 'Investment', image: 'https://placehold.co/150', description: 'Strategic investments for long-term success.' },
    { title: 'Tech Solutions', image: 'https://placehold.co/150', description: 'Cutting-edge technology solutions tailored for your business.' },
];

const Services = () => {
    return (
        <section className="services py-20 h-3/4 text-center bg-gray-900">
            <h2 className="text-4xl font-bold text-green-500 mb-10">Our Services</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 p-5 rounded-lg"
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={service.image} alt={service.title} className="w-full h-40 object-cover mb-5 rounded" />
                        <h3 className="text-2xl font-semibold text-green-500 mb-3">{service.title}</h3>
                        <p>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
