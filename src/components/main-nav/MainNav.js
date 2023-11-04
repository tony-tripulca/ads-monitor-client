import { AppBar, Box, Container, Typography } from "@mui/material";

import "./MainNav.scss";

function MainNav() {
  return (
    <AppBar position="fixed" className="main-nav-holder" color="plain">
      <Container maxWidth="false">
        <Box className="main-menu-holder">
          <Typography>{window.location.pathname}</Typography>
        </Box>
      </Container>
    </AppBar>
  );
}

export default MainNav;
