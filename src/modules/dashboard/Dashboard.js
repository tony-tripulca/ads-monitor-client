import React, { useCallback, useEffect, useState } from "react";

import { Box, Container, Grid, Snackbar, Typography } from "@mui/material";

import "./Dashboard.scss";

function Dashboard() {
  return (
    <React.Fragment>
      <Box component="section" id="dashboard">
        <Container maxWidth="false">
          <Typography className="section-title">Dashboard</Typography>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Dashboard;
