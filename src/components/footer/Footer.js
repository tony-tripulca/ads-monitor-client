import { Box, Container, Typography } from "@mui/material";

import "./Footer.scss";

function Footer() {
  return (
    <Box className="footer-holder" position="fixed">
      <Container maxWidth="false">
        <Typography>&#169; RMC Solomon | {new Date().getFullYear()}</Typography>
      </Container>
    </Box>
  );
}

export default Footer;
