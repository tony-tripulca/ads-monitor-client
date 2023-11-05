import React, { useCallback, useEffect, useState } from "react";

import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import "./Ads.scss";
import AdService from "../../services/AdService";

function Ads() {
  const [ads, setAds] = useState([]);

  const listAds = useCallback(() => {
    AdService.list({})
      .then((response) => {
        let temp = response.data
          .filter((i, iKey) => i.adv.tradableQuantity <= 5000)
          .filter((j, jKey) => j.adv.tradeType === "SELL")
          .sort(
            (a, b) =>
              parseFloat(b.adv.tradableQuantity) -
              parseFloat(a.adv.tradableQuantity)
          );
        setAds(temp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    let minutes = 0.1;

    let interval = setInterval(() => {
      listAds();
    }, minutes * 60 * 1000);

    listAds();
  }, [listAds]);

  return (
    <React.Fragment>
      <Box component="section" id="ads-section">
        <Container maxWidth="false">
          <Typography className="section-title">Trade Ads</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Ads No.</TableCell>
                  <TableCell align="left">Merchant</TableCell>
                  <TableCell align="left">Asset</TableCell>
                  <TableCell align="left">Fiat Unit</TableCell>
                  <TableCell align="left">price</TableCell>
                  <TableCell align="left">Volume</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ads.map((i, iKey) => (
                  <TableRow
                    key={iKey}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{i.adv.advNo}</TableCell>
                    <TableCell align="left">{i.advertiser.nickName}</TableCell>
                    <TableCell align="left">{i.adv.asset}</TableCell>
                    <TableCell align="left">{i.adv.fiatUnit}</TableCell>
                    <TableCell align="left">{i.adv.price}</TableCell>
                    <TableCell align="left">
                      {parseFloat(i.adv.tradableQuantity).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Ads;
