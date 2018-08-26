/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.6 - Selections and data joins
*/

var data = [25, 20, 10, 12, 15];

var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

var circles = svg.selectAll("circle")
    .data(data);

circles.enter()
    .append("circle")
        .attr("cx", (d, i) => (i * 100) + 25) //stagger distance from left
        .attr("cy", 100) //distance from top
        .attr("r", (d) => d) //radius
        .attr("fill", "purple");