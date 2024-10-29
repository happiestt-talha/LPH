import React, { useState, useEffect } from 'react';
import { CircularProgress, Typography, Box, Grid } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
    { label: 'Projects Completed', value: 100 },
    { label: 'Happy Clients', value: 85 },
    { label: 'Team Members', value: 50 },
    { label: 'Global Partners', value: 20 },
];

const CompanyStats = () => {
    const [progressValues, setProgressValues] = useState([0, 0, 0, 0]);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            const timer = setInterval(() => {
                setProgressValues((prevValues) => {
                    return prevValues.map((value, index) => {
                        if (value < stats[index].value) {
                            return Math.min(value + 1, stats[index].value);
                        }
                        return value;
                    });
                });
            }, 20); // Adjust this value for speed of animation

            return () => clearInterval(timer);
        }
    }, [inView]);

    return (
        <Box ref={ref} sx={{ py: 8, textAlign: 'center', backgroundColor: '#1f2937' }} >
            <Typography variant="h4" gutterBottom>Company Stats</Typography>
            <Grid container spacing={4} justifyContent="center">
                {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={3} key={stat.label}>
                        <Box position="relative" display="inline-flex">
                            <CircularProgress
                                variant="determinate"
                                value={progressValues[index]}
                                size={120}
                                thickness={4}
                                sx={{
                                    color: '#4CAF50',
                                    transition: 'value 2s ease',
                                }}
                            />
                            <Box
                                top={0}
                                left={0}
                                bottom={0}
                                right={0}
                                position="absolute"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography variant="h6" component="div" color="">
                                    {progressValues[index]}%
                                </Typography>
                            </Box>
                        </Box>
                        <Typography variant="body1" mt={2} >
                            {stat.label}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CompanyStats;
