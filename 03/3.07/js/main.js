``; /*
*    main.js
*    Mastering Data Visualization with D3.js
*    3.7 - D3 min, max, and extent
*/
var margin = { left: 100, right: 10, top: 10, bottom: 150 };

var width = 600 - margin.left - margin.right;
height = 400 - margin.top - margin.bottom;

var g = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

d3.json("data/buildings.json").then(function(data) {
  console.log(data);

  data.forEach(d => {
    d.height = +d.height;
  });

  var x = d3
    .scaleBand()
    .domain(
      data.map(function(d) {
        return d.name;
      })
    )
    .range([0, width])
    .paddingInner(0.3)
    .paddingOuter(0.3);

  var y = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.height)])
    .range([0, height]);

  var xAxisCall = d3.axisBottom(x);
  g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxisCall)
    .selectAll("text")
    .attr("y", "10")
    .attr("x", "-5")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-40)");

  var yAxisCall = d3
    .axisLeft(y)
    .ticks(3)
    .tickFormat(d => d + "m");
  g.append("g")
    .attr("class", "y-axis")
    .call(yAxisCall);

  var rects = g.selectAll("rect").data(data);

  rects.enter()
    .append("rect")
    .attr("y", 20)
    .attr("x", function(d) {
      return x(d.name);
    })
    .attr("width", x.bandwidth)
    .attr("height", function(d) {
      return y(d.height);
    })
    .attr("fill", "pink");
});
