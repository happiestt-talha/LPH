// CompanyStats.js
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '200+', label: 'Successful Projects' },
    { value: '150+', label: 'Clients Worldwide' },
];

const CompanyStats = () => {
    return (
        <section className="stats py-20 text-center bg-black">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-green-500">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="transition-all transform hover:scale-110"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                    >
                        <h2 className="text-4xl font-bold mb-2">{stat.value}</h2>
                        <p>{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CompanyStats;
