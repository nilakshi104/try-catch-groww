"use client";
import React from "react";
import styles from "./page.module.css";
import DataTable from "@/components/DataTable";
import Sidebar from "@/components/Sidebar";
import { Typography } from "@mui/material";

const rootStyle = {
  display: "flex",
  background: "white",
};

const contentStyle = {
  flexGrow: 1,
  padding: "20px", // Adjust as needed
  color: "black",
};

export default function Home() {
  return (
    <div style={rootStyle}>
      <main style={contentStyle}>
        <Typography sx={{ fontSize: "48px" }}>Stock-Up</Typography>
        <div className={styles.main}>
          <Sidebar onFilterChange={() => {}} />
          <DataTable />
        </div>
      </main>
    </div>
  );
}
