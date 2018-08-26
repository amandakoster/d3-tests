/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 1000)
	.attr("height", 1500);

var circle = svg.append("circle")
	.attr("cx", 100)
	.attr("cy", 250)
	.attr("r", 70)
	.attr("fill", "red");

var rect = svg.append("rect")
	.attr("x", 20)
	.attr("y",20)
	.attr("width", 100)
	.attr("height", 100)
	.attr("stroke", "green")
	.attr("stroke-width", 3)
	.attr("fill", "pink")

