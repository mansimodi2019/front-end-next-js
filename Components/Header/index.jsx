import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { useRouter } from "next/router";

const pages = [
  {
    navName: "SHOP",
    navLink: "/shop",
  },
  {
    navName: "RECIPES",
    navLink: "/recipes",
  },
  {
    navName: "LEARN",
    navLink: "/learn",
  },
  {
    navName: "ABOUT",
    navLink: "/about",
  },
  {
    navName: "BLOG",
    navLink: "/blog",
  },
];

const pages2 = [
  {
    navName: "CATEGORIES",
    navLink: "/categories",
  },
  {
    navName: "COLLECTIONS",
    navLink: "/collections",
  },
  {
    navName: "RESOURCES",
    navLink: "/resources",
  },
];

const resPages = [
  {
    navName: "SHOP",
    navLink: "/shop",
  },
  {
    navName: "RECIPES",
    navLink: "/recipes",
  },
  {
    navName: "LEARN",
    navLink: "/learn",
  },
  {
    navName: "ABOUT",
    navLink: "/about",
  },
  {
    navName: "BLOG",
    navLink: "/blog",
  },
  {
    navName: "CATEGORIES",
    navLink: "/categories",
  },
  {
    navName: "COLLECTIONS",
    navLink: "/collections",
  },
  {
    navName: "RESOURCES",
    navLink: "/resources",
  },
];

function Header() {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar disableGutters sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              position: "absolute",
              zIndex: "1",
              fontSize: "120px",
              color: "brown",
            }}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
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
              {resPages.map((page, index) => (
                <>
                  <Link href={page?.navLink}>
                    <MenuItem
                      onClick={handleCloseNavMenu}
                      key={index}
                      className={
                        router.pathname === page?.navLink ? "active" : ""
                      }
                      sx={{
                        "&.active": {
                          backgroundColor: "#00000014",
                        },
                      }}
                    >
                      <Typography textAlign="center">
                        {page?.navName}
                      </Typography>
                    </MenuItem>
                  </Link>
                </>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              ml: "100px",
            }}
          >
            {pages.map((page, index) => (
              <>
                <Link href={page?.navLink}>
                  <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    className={
                      router.pathname === page?.navLink ? "active" : ""
                    }
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      color: "black",
                      fontWeight: "bold",
                      borderRadius: "0px",
                      "&.active": {
                        borderBottom: "2px solid brown",
                      },
                    }}
                  >
                    {page?.navName}
                  </Button>
                </Link>
              </>
            ))}
          </Box>
        </Container>
      </Toolbar>

      <Toolbar
        disableGutters
        sx={{
          backgroundColor: "#F8F5F0",
          display: { xs: "none", md: "block" },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", flexGrow: 1, ml: "100px" }}>
            {pages2.map((page, index) => (
              <>
                <Link href={page?.navLink}>
                  <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    className={
                      router.pathname === page?.navLink ? "active" : ""
                    }
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      color: "black",
                      fontWeight: "bold",
                      borderRadius: "0px",
                      "&.active": {
                        borderBottom: "2px solid brown",
                      },
                    }}
                  >
                    {page?.navName}
                  </Button>
                </Link>
              </>
            ))}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
