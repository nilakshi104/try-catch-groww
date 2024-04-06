import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Typography,
  Container,
  CircularProgress,
  Grid,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import LineGraph from "../../components/LineGraph";
import CandlestickChart from "../../components/CandlestickChart";
import StockDetails from "../../components/StockDetails";

const generateRandomData = () => {
  const startDate = new Date("2022-01-01");
  const endDate = new Date("2022-01-25"); // Assuming 25 days after the start date
  const data = [];

  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const open = Math.floor(Math.random() * (200 - 50 + 1)) + 50; // Random open price between 50 and 200
    const close = Math.floor(Math.random() * (200 - 50 + 1)) + 50; // Random close price between 50 and 200
    const high =
      Math.max(open, close) + Math.floor(Math.random() * (20 - 5 + 1)) + 5; // Random high price above open/close
    const low =
      Math.min(open, close) - Math.floor(Math.random() * (20 - 5 + 1)) - 5; // Random low price below open/close

    data.push({ date: new Date(date), open, high, low, close });
  }

  return data;
};

const data = generateRandomData();

const StockDetailPage = () => {
  const router = useRouter();
  const { symbol } = router.query;

  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPriceTrends, setShowPriceTrends] = useState(true);
  const [showMovingAverages, setShowMovingAverages] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=8HAS13HYZ76P26Wl`
        );
        const data = await response.json();
        setStockData(data["Global Quote"]);
        if (!data["Global Quote"]) {
          setStockData({
            "01. symbol": symbol,
            "05. price": "N/A",
            "09. change": "N/A",
            "08. previous close": "N/A",
            "06. volume": "N/A",
            "07. latest market cap": "N/A",
          });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    if (symbol) {
      fetchStockData();
    }
  }, [symbol]);

  const handlePriceTrendsChange = () => {
    setShowPriceTrends(!showPriceTrends);
  };

  const handleMovingAveragesChange = () => {
    setShowMovingAverages(!showMovingAverages);
  };

  if (loading) {
    return (
      <Container style={{ textAlign: "center", marginTop: "50px" }}>
        <CircularProgress />
      </Container>
    );
  }

  const companyName = stockData["01. symbol"];
  const currentPrice = parseFloat(stockData["05. price"]).toFixed(2);
  const change = parseFloat(stockData["09. change"]).toFixed(2);
  const previousClose = parseFloat(stockData["08. previous close"]).toFixed(2);
  const volume = stockData["06. volume"];
  const marketCap = stockData["07. latest market cap"];

  const priceTrends = [
    20, 48, 47, 12, 10, 11, 47, 37, 32, 5, 24, 46, 26, 42, 11, 32, 2, 1, 23, 8,
    37, 32, 11, 38, 21,
  ]; // Dummy data for the line graph

  const movingAverages = [
    47, 33, 3, 3, 19, 39, 16, 28, 19, 4, 42, 22, 28, 5, 19, 13, 41, 12, 7, 24,
    37, 23, 18, 45, 19,
  ];

  return (
    <>
      <Typography sx={{ fontSize: "48px" }}>Stock-Up</Typography>
      <Container style={{ marginTop: "50px" }}>
        <Head>
          <title>
            {companyName} ({symbol}) - Stock Details
          </title>
        </Head>

        <Typography sx={{ fontSize: "32px" }} gutterBottom>
          {companyName} ({symbol})
        </Typography>

        <Paper
          sx={{
            display: "flex",
            alignItems: "flex-start",
            padding: "20px",
            margin: "20px  0",
          }}
          elevation={3}
        >
          <Container sx={{ width: "min-content" }}>
            <LineGraph
              data={priceTrends}
              data2={showMovingAverages ? movingAverages : []}
            />

            <div style={{ marginBottom: "20px" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showPriceTrends}
                    onChange={handlePriceTrendsChange}
                  />
                }
                label="Price Trends"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showMovingAverages}
                    onChange={handleMovingAveragesChange}
                  />
                }
                label="Moving Averages"
              />
            </div>

            <CandlestickChart data={data} />
          </Container>

          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <StockDetails
              data={{
                companyName: "Apple Inc.",
                symbol,
                currentPrice: 145.67,
                change: -0.32,
                previousClose: 146.23,
                volume: 23456789,
                marketCap: "2.45T",
                revenue: "325B",
                netIncome: "86B",
                operatingIncome: "100B",
                earningsGrowth: "10%",
                roe: "30%",
                debtToEquity: "0.5",
                ev: "2.6T",
                evToEbitda: "20",
                evToRevenue: "8",
                evToEbit: "15",
              }}
            />
          </Container>
        </Paper>
      </Container>
    </>
  );
};

export default StockDetailPage;
