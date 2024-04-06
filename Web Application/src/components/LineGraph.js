import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const LineGraph = ({ data, data2 }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600; // Increased width
    const height = 400; // Increased height

    svg.selectAll("*").remove();

    const x = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([margin.left, width - margin.right]);
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data.concat(data2 || []))])
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line()
      .x((d, i) => x(i))
      .y((d) => y(d));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    if (data2) {
      const line2 = d3
        .line()
        .x((d, i) => x(i))
        .y((d) => y(d));

      svg
        .append("path")
        .datum(data2)
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 1.5)
        .attr("d", line2);
    }

    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y));
  }, [data, data2]);

  return <svg ref={svgRef} width={600} height={400}></svg>; // Updated width and height
};

export default LineGraph;
