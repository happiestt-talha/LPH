import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import { FooterData } from '../data/Links-Data';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: '#333', color: '#fff', py: 5 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {FooterData.map((section, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Typography variant="h6" gutterBottom sx={{ color: '#4CAF50', fontWeight: 'bold' }}>
                                {section.title}
                            </Typography>
                            {section.subLinks.map((link, linkIndex) => (
                                <Link
                                    href={link.url}
                                    key={linkIndex}
                                    color="inherit"
                                    underline="hover"
                                    sx={{ display: 'block', py: 0.5, color: '#fff' }}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </Grid>
                    ))}
                </Grid>
                <Box textAlign="center" sx={{ mt: 4 }}>
                    <Typography variant="body2" color="textSecondary">
                        © {new Date().getFullYear()} Launch Point Holdings. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;