// Testimonials.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const testimonials = [
    {
        quote: 'Working with LPH has transformed our business!',
        author: 'Jane Doe, CEO of XYZ Inc.',
    },
    {
        quote: 'Outstanding experience from start to finish.',
        author: 'John Smith, Founder of ABC LLC',
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials py-20 bg-gray-900 text-center">
            <div className="max-w-3xl mx-auto space-y-10">
                {testimonials.map((testimonial, index) => (
                    <Card
                        key={index}
                        className="animate-fadeIn transition-all transform hover:scale-105"
                        style={{ backgroundColor: '#1f2937' }}
                    >
                        <CardContent>
                            <Typography variant="h6" className="text-green-500 font-semibold">
                                "{testimonial.quote}"
                            </Typography>
                            <Typography variant="body2" className="text-gray-400 mt-2">
                                - {testimonial.author}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
