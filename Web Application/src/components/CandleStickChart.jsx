// components/CandlestickChart.js

import { useEffect, useRef } from "react";
import * as d3 from "d3";

const CandlestickChart = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);

    const xScale = d3
      .scaleBand()
      .range([margin.left, width - margin.right])
      .padding(0.1)
      .domain(data.map((d) => d.date));

    const yScale = d3
      .scaleLinear()
      .range([height - margin.bottom, margin.top])
      .domain([d3.min(data, (d) => d.low), d3.max(data, (d) => d.high)]);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.date))
      .attr("y", (d) => yScale(Math.max(d.open, d.close)))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => Math.abs(yScale(d.open) - yScale(d.close)))
      .attr("fill", (d) => (d.open > d.close ? "red" : "green"));

    svg
      .selectAll("line")
      .data(data)
      .enter()
      .append("line")
      .attr("x1", (d) => xScale(d.date) + xScale.bandwidth() / 2)
      .attr("y1", (d) => yScale(d.high))
      .attr("x2", (d) => xScale(d.date) + xScale.bandwidth() / 2)
      .attr("y2", (d) => yScale(d.low))
      .attr("stroke", "black");
  }, [data]);

  return <svg ref={svgRef} width="800" height="400"></svg>;
};

export default CandlestickChart;
