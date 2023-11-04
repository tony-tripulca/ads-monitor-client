import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { Box, IconButton, ThemeProvider, createTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import MainNav from "./components/main-nav/MainNav";
import SideNav from "./components/side-nav/SideNav";
import Footer from "./components/footer/Footer";

import AppRouter from "./AppRouter";

import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";

import "./App.scss";

function App() {
  const [sideNavActive, setSideNavActive] = useState(true);

  let path = window.location.pathname.split("/");

  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={customTheme()}>
          {!path.includes("login") ? (
            <React.Fragment>
              <Box id="main-nav" className={sideNavActive ? "active" : ""}>
                <IconButton
                  className="menu-button"
                  onClick={() => setSideNavActive(!sideNavActive)}
                >
                  {sideNavActive ? <MenuOpenIcon /> : <MenuIcon />}
                </IconButton>
                <MainNav />
              </Box>
              <Box id="side-nav" className={sideNavActive ? "active" : ""}>
                <SideNav />
              </Box>
              <Box id="main-content" className={sideNavActive ? "active" : ""}>
                <AppRouter />
              </Box>
              <Box id="footer" className={sideNavActive ? "active" : ""}>
                <Footer />
              </Box>
            </React.Fragment>
          ) : (
            <AppRouter />
          )}
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

function customTheme() {
  return createTheme({
    typography: {
      fontFamily: `"Ubuntu", "Poppins", "Quicksand","Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
      },
    },
    palette: {
      primary: {
        light: "#c6a0d2",
        main: "#c88bdb",
        dark: "#bd63d8",
        contrastText: "white",
      },
      secondary: {
        light: "#280457",
        main: "#160230",
        dark: "#160230",
        contrastText: "white",
      },
      plain: {
        light: "#fff",
        main: "#fff",
        dark: "#fff",
        contrastText: "black",
      },
    },
  });
}

export default App;
