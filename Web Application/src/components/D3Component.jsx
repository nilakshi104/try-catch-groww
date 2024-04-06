import React, { useEffect } from "react";
import * as d3 from "d3";

const D3Graph = ({ data }) => {
  const margin = { top: 5, right: 5, bottom: 5, left: 5 };
  const width = 100 - margin.left - margin.right;
  const height = 50 - margin.top - margin.bottom;

  const svgRef = React.useRef();

  React.useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d));

    const closingPrice = data[data.length - 1];
    const openingPrice = data[0];
    const strokeColor = closingPrice > openingPrice ? "green" : "red";

    svg
      .append("path")
      .datum(data)
      .attr("d", line)
      .attr("stroke", strokeColor)
      .attr("stroke-width", 1)
      .attr("fill", "none");
  }, [
    data,
    height,
    margin.bottom,
    margin.left,
    margin.right,
    margin.top,
    width,
  ]);

  return <svg ref={svgRef}></svg>;
};

export default D3Graph;
