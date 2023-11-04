import React, { useCallback, useEffect, useState } from "react";

import { Box, Container, Grid, Snackbar, Typography } from "@mui/material";

import "./Ads.scss";

function Ads() {
  return (
    <React.Fragment>
      <Box component="section" id="ads-section">
        <Container maxWidth="false">
          <Typography className="section-title">Trade Ads</Typography>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Ads;
