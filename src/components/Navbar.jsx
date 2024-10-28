import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../assets/icons/ColorModeIconDropdown';
import { NavData } from '../data/Nav-Data';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: theme.vars
        ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
        : alpha(theme.palette.background.default, 0.4),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
}));

const navbarData = NavData;

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [currentSubLinks, setCurrentSubLinks] = React.useState([]);
    let closeTimeout;

    const handlePopoverOpen = (event, subLinks) => {
        clearTimeout(closeTimeout); // Clear any closing timer
        setAnchorEl(event.currentTarget);
        setCurrentSubLinks(subLinks);
    };

    const handlePopoverClose = () => {
        closeTimeout = setTimeout(() => {
            setAnchorEl(null);
            setCurrentSubLinks([]);
        }, 150); // Delay to allow smooth transition
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: 'calc(var(--template-frame-height, 0px) + 28px)',
            }}
        >
            <Container maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <img src="./favicon-32.png" alt="Logo" />

                        {/* Desktop links */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
                            {navbarData.map((link) => (
                                <Button
                                    key={link.title}
                                    onMouseEnter={(event) => handlePopoverOpen(event, link.subLinks)}
                                    onMouseLeave={handlePopoverClose}
                                    color="info"
                                    variant="text"
                                    size="small"
                                >
                                    {link.title}
                                </Button>
                            ))}
                        </Box>
                    </Box>

                    {/* Authentication and Color Mode Icons */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
                        <ColorModeIconDropdown />
                    </Box>

                    {/* Drawer for Mobile */}
                    <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
                        <Box sx={{ p: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <IconButton onClick={toggleDrawer(false)}>
                                    <CloseRoundedIcon />
                                </IconButton>
                            </Box>
                            {navbarData.map((link) => (
                                <React.Fragment key={link.title}>
                                    <MenuItem onClick={(event) => handlePopoverOpen(event, link.subLinks)}>
                                        {link.title}
                                    </MenuItem>
                                    {link.subLinks.map((subLink) => (
                                        <MenuItem
                                            component={Link}
                                            to={subLink.url}
                                            key={subLink.title}
                                            onClick={toggleDrawer(false)}
                                            sx={{ pl: 4 }}
                                        >
                                            {subLink.title}
                                        </MenuItem>
                                    ))}
                                </React.Fragment>
                            ))}
                        </Box>
                    </Drawer>

                    {/* Popover for Dropdown Menu */}
                    <Popover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={handlePopoverClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        onMouseEnter={() => clearTimeout(closeTimeout)} // Prevent closing when entering popover
                        onMouseLeave={handlePopoverClose} // Close when leaving popover
                    >
                        <Box sx={{ p: 1 }}>
                            {currentSubLinks.map((subLink) => (
                                <MenuItem
                                    component={Link}
                                    to={subLink.url}
                                    key={subLink.title}
                                    onClick={handlePopoverClose}
                                >
                                    {subLink.title}
                                </MenuItem>
                            ))}
                        </Box>
                    </Popover>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}
