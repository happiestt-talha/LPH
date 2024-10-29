// ContactUs.js
import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <motion.section
            className="contact py-20 text-center bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-green-500 mb-10">Get in Touch</h2>
            <p className="max-w-xl mx-auto mb-10">
                Reach out to us for business inquiries or more information on our services.
            </p>
            <motion.a
                href="mailto:info@lph.com"
                className="bg-green-500 text-white py-2 px-6 rounded-lg transition-all transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Contact Us
            </motion.a>
        </motion.section>
    );
};

export default ContactUs;
