import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const StockDetails = ({ data }) => {
  const {
    companyName,
    symbol,
    currentPrice,
    change,
    previousClose,
    volume,
    marketCap,
    revenue,
    netIncome,
    operatingIncome,
    earningsGrowth,
    roe,
    debtToEquity,
    ev,
    evToEbitda,
    evToRevenue,
    evToEbit,
  } = data;

  return (
    <>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Price
          </Typography>
          <Typography variant="subtitle1">
            Current Price: ${currentPrice}
          </Typography>
          <Typography variant="subtitle1">Change: ${change}</Typography>
          <Typography variant="subtitle1">
            Previous Close: ${previousClose}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Volume
          </Typography>
          <Typography variant="subtitle1">Volume: {volume}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Market Cap
          </Typography>
          <Typography variant="subtitle1">Market Cap: {marketCap}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Financial Performance
          </Typography>
          <Typography variant="subtitle1">Revenue: {revenue}</Typography>
          <Typography variant="subtitle1">Net Income: {netIncome}</Typography>
          <Typography variant="subtitle1">
            Operating Income: {operatingIncome}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Ratios
          </Typography>
          <Typography variant="subtitle1">
            Earnings Growth: {earningsGrowth}
          </Typography>
          <Typography variant="subtitle1">ROE: {roe}</Typography>
          <Typography variant="subtitle1">
            Debt to Equity: {debtToEquity}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Valuation
          </Typography>
          <Typography variant="subtitle1">EV: {ev}</Typography>
          <Typography variant="subtitle1">
            EV to EBITDA: {evToEbitda}
          </Typography>
          <Typography variant="subtitle1">
            EV to Revenue: {evToRevenue}
          </Typography>
          <Typography variant="subtitle1">EV to EBIT: {evToEbit}</Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default StockDetails;
