import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";
import { AppBar, Avatar, Box, Container, IconButton, Menu, Paper, Toolbar, Typography, styled } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const renderCustomLink = (route: { title: string; path: string }) => {
    return (
      <Link style={{ textDecoration: "none", color: "black", fontWeight: "bold" }} to={route.path}>
        {route.title}
      </Link>
    );
  };

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent" sx={{ marginBottom: "1.5rem" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            sx={{ display: { xs: "none", md: "flex" }, justifyContent: "space-between", mr: 1 }}
            alt="User Avatar"
            src="https://cdn.icon-icons.com/icons2/2622/PNG/512/scifi_starwars_imperial_icon_158236.png"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Star Wars
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {routes.map((route, index) => (
                <Item key={index}>{renderCustomLink(route)}</Item>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Star Wars
          </Typography>
          <Avatar
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            alt="User Avatar"
            src="https://cdn.icon-icons.com/icons2/2622/PNG/512/scifi_starwars_imperial_icon_158236.png"
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end", gap: "1rem" }}>
            {routes.map((route, index) => (
              <Item key={index}>{renderCustomLink(route)}</Item>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
