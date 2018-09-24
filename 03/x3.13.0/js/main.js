/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

//margins
var margin = { left: 200, right: 20, top: 20, bottom: 200 };
var width = 600 - margin.left - margin.right;
height = 400 - margin.top - margin.bottom;

//chart area
var g = d3.select("#chart-area").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.bottom + margin.top)
.append("g")

// // x label
// g.append("g")
//   .attr("class", "x axis")
//   .call(xAxisCall)
//   .selectAll("text")
//     .attr("y", "10")
//     .attr("x", "-5")
//     .attr("text-anchor", "end")

//parse data
d3.json("data/revenues.json").then(data => {
  data.forEach(d => {
    d.revenue = +d.revenue
    console.log(data, 'data');
  })
  
  //x axis bands
  var x = d3
  .scaleBand()
  .domain(data.map(d => d.month))
  .range([0, width])
  .padding(0.2)
  
  //y axis band
  var y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.revenue)])
  .range([height, 0]);
  
  var xAxisCall = d3.axisBottom(x);
});
  
  //render g