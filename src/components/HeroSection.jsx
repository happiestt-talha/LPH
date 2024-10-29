// Hero.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundImage: 'url("https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                textAlign: 'center',
            }}
        >
            {/* Overlay for Darker Effect */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 55, 0, 0.6)', // Dark overlay
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <Box sx={{ position: 'relative', zIndex: 2, px: 3 }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Welcome to Launch Point Holdings
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
                        Empowering Your Business with Advanced IT Solutions and Services
                    </Typography>
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                        component={motion.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn More
                    </Button>
                </motion.div>
            </Box>
        </Box>
    );
};

export default Hero;
