import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import ColorModeIconDropdown from "../assets/icons/ColorModeIconDropdown";
import { NavData } from "../data/Links-Data";
import { Fragment, useState } from "react";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: "blur(24px)",
    border: "1px solid",
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: theme.vars
        ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.6)`
        : alpha(theme.palette.background.default, 0.6),
    boxShadow: theme.shadows[1],
    padding: "8px 16px",
}));

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentSubLinks, setCurrentSubLinks] = useState([]);
    let closeTimeout;

    const handlePopoverOpen = (event, subLinks) => {
        clearTimeout(closeTimeout);
        setAnchorEl(event.currentTarget);
        setCurrentSubLinks(subLinks);
    };

    const handlePopoverClose = () => {
        closeTimeout = setTimeout(() => {
            setAnchorEl(null);
            setCurrentSubLinks([]);
        }, 100); // Delay for smoother transitions
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                boxShadow: 0,
                bgcolor: "transparent",
                mt: "calc(var(--template-frame-height, 0px) + 28px)",
            }}
        >
            <Container maxWidth="lg">
                {/* <Container> */}
                <StyledToolbar disableGutters>
                    <div className="flex items-center">

                        <Link to="/">
                            <span>
                                <img src="/favicon-32.png" alt="logo" />
                            </span>
                        </Link>

                        <div className="flex text-gray-900 cursor-pointer relative p-3">
                            {NavData.map((link) => (
                                <Box
                                    key={link.title}
                                    sx={{
                                        position: "relative",
                                        p: 2,
                                        mx: 1,
                                        // bgcolor: "deeppink",
                                        "&:hover .dropdownContent": { display: "block" },
                                    }}
                                >
                                    <div>{link.title}</div>
                                    <Box
                                        className="dropdownContent"
                                        sx={{
                                            display: "none",
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            backgroundColor: "background.paper",
                                            borderRadius: 1,
                                            boxShadow: 1,
                                            py: 1,
                                            zIndex: 10,
                                            "&:hover .dropdownContent": { display: "block" },
                                        }}
                                    >
                                        {link.subLinks.map((subLink) => (
                                            <MenuItem
                                                key={subLink.title}
                                                component={Link}
                                                to={subLink.url}
                                                sx={{
                                                    px: 2,
                                                    "&:hover ": {
                                                        backgroundColor: "#f5f5f5",
                                                        color: "#2e7d32",
                                                        // transform: "translateX(2px)",
                                                        paddingLeft: "24px",
                                                        transition: "all 0.3s ease",
                                                    },
                                                }}

                                            >
                                                {subLink.title}
                                            </MenuItem>
                                        ))}
                                    </Box>
                                </Box>
                            ))}
                        </div>

                        {/* <Box sx={{ display: { xs: "none", md: "flex" }, justifySelf: "flex-end", gap: 1 }}>
                            <ColorModeIconDropdown />
                        </Box> */}

                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ display: { md: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
                            <Box sx={{ p: 2, width: "100%", bgcolor: "background.paper" }}>
                                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                {NavData.map((link) => (
                                    <Fragment key={link.title}>
                                        <MenuItem onClick={(event) => handlePopoverOpen(event, link.subLinks)}>
                                            {link.title}
                                        </MenuItem>
                                        {link.subLinks?.length > 0
                                            ? link.subLinks?.map((subLink) => (
                                                <MenuItem
                                                    component={Link}
                                                    to={subLink.url}
                                                    key={subLink.title}
                                                    onClick={toggleDrawer(false)}
                                                    sx={{ pl: 4 }}
                                                >
                                                    {subLink.title}
                                                </MenuItem>
                                            ))
                                            // : null
                                            : <MenuItem
                                                component={Link}
                                                to={link.url}
                                                key={link.title}
                                                onClick={toggleDrawer(false)}
                                                sx={{ pl: 4 }}
                                            >
                                                {link.title}
                                            </MenuItem>
                                        }
                                    </Fragment>
                                ))}
                            </Box>
                        </Drawer>

                        <Popover
                            open={Boolean(anchorEl)}
                            anchorEl={anchorEl}
                            onClose={handlePopoverClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            sx={{
                                ".MuiPopover-paper": {
                                    borderRadius: 2,
                                    p: 1,
                                    mt: 1,
                                    boxShadow: 3,
                                },
                            }}
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
                    </div>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;