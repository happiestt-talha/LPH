import React from 'react';
import { Box, Typography, Container, TextField, Button, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactUs = () => {
    return (
        <Box
            sx={{
                backgroundImage: 'url(https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 4,
            }}
        >
            <Container
                maxWidth="sm"
                sx={{
                    bgcolor: 'rgba(0, 0, 0, 0.8)',
                    p: 4,
                    borderRadius: 3,
                    boxShadow: 3,
                    backdropFilter: 'blur(5px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: 5,
                    },
                }}
            >
                <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#ffcc00' }}>
                    Contact Us
                </Typography>

                <Typography variant="body1" paragraph align="center" sx={{ mb: 3 }}>
                    Have questions? We’d love to hear from you! Reach out to us anytime, and we’ll get back to you shortly.
                </Typography>

                <Stack direction="column" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                    <Box display="flex" alignItems="center">
                        <EmailIcon sx={{ mr: 1, color: '#ffcc00' }} />
                        <Typography variant="body1">support@launchpointholdings.com</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <PhoneIcon sx={{ mr: 1, color: '#ffcc00' }} />
                        <Typography variant="body1">(123) 456-7890</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <LocationOnIcon sx={{ mr: 1, color: '#ffcc00' }} />
                        <Typography variant="body1">123 Launch Point Ave, Innovation City, Techland</Typography>
                    </Box>
                </Stack>

                {/* Contact Form */}
                <Box component="form" noValidate autoComplete="off">
                    <TextField
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        label="Your Name"
                        sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', borderRadius: 1 }}
                        InputLabelProps={{ style: { color: '#ffcc00' } }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        label="Your Email"
                        sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', borderRadius: 1 }}
                        InputLabelProps={{ style: { color: '#ffcc00' } }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        label="Message"
                        multiline
                        rows={4}
                        sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', borderRadius: 1 }}
                        InputLabelProps={{ style: { color: '#ffcc00' } }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 2,
                            bgcolor: '#ffcc00',
                            color: 'black',
                            '&:hover': {
                                bgcolor: '#ffbb00',
                            },
                        }}
                    >
                        Send Message
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactUs;
