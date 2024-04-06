import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Slider,
  Grid,
  Box,
  MenuItem,
  Container,
} from "@mui/material";

interface SidebarProps {
  onFilterChange: (filters: any) => void; // Callback function to pass filters to parent component
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<any>({
    symbol: "",
    price: [0, 1000],
    marketCap: [0, 1000],
    volume: 0,
    sector: "",
    industry: "",
    dividendYield: [0, 10],
    earningsGrowth: [0, 100],
    peRatio: [0, 50],
    // Add more filter options as needed
  });

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    const target = event.target as HTMLInputElement;
    setFilters({ ...filters, [key]: target.value });
  };

  const handleSliderChange = (
    event: Event,
    newValue: number | number[],
    key: string
  ) => {
    setFilters({ ...filters, [key]: newValue });
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <Box
      bgcolor="#f8f9fa"
      p={2}
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ margin: "20px" }}
    >
      <Typography variant="h6" mb={2} sx={{ color: "black" }}>
        Filters
      </Typography>
      <TextField
        label="Stock Symbol"
        variant="outlined"
        fullWidth
        value={filters.symbol}
        onChange={(e) => handleFilterChange(e, "symbol")}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            id="price-range-slider"
            sx={{ color: "black" }}
            gutterBottom
          >
            Price Range
          </Typography>
          <Slider
            value={filters.price}
            onChange={(e, newValue) =>
              handleSliderChange(e, newValue as number[], "price")
            }
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            aria-labelledby="price-range-slider"
          />
          <Typography
            id="market-cap-range-slider"
            sx={{ color: "black" }}
            gutterBottom
          >
            Market Cap Range
          </Typography>
          <Slider
            value={filters.price}
            onChange={(e, newValue) =>
              handleSliderChange(e, newValue as number[], "price")
            }
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            aria-labelledby="price-range-slider"
          />
          <Container
            sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <TextField
              label="Volume"
              type="number"
              variant="outlined"
              fullWidth
              value={filters.volume}
              onChange={(e) => handleFilterChange(e, "volume")}
            />
            <TextField
              label="Dividend Yield Range"
              variant="outlined"
              fullWidth
              value={filters.dividendYield}
              onChange={(e) => handleFilterChange(e, "dividendYield")}
            />
            <TextField
              label="Earnings Growth Range"
              variant="outlined"
              fullWidth
              value={filters.earningsGrowth}
              onChange={(e) => handleFilterChange(e, "earningsGrowth")}
            />
            <TextField
              label="P/E Ratio Range"
              variant="outlined"
              fullWidth
              value={filters.peRatio}
              onChange={(e) => handleFilterChange(e, "peRatio")}
            />
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container
            sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <TextField
              select
              label="Sector"
              variant="outlined"
              fullWidth
              value={filters.sector}
              onChange={(e) => handleFilterChange(e, "sector")}
            >
              <MenuItem value="">All Sectors</MenuItem>
              {/* Add options for sectors */}
            </TextField>
            <TextField
              select
              label="Industry"
              variant="outlined"
              fullWidth
              value={filters.industry}
              onChange={(e) => handleFilterChange(e, "industry")}
            >
              <MenuItem value="">All Industries</MenuItem>
              {/* Add options for industries */}
            </TextField>
          </Container>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={applyFilters}
        fullWidth
        sx={{ margin: "10px 0" }}
      >
        Apply Filters
      </Button>
    </Box>
  );
};

export default Sidebar;
