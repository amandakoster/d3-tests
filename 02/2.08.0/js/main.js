/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("data/buildings.json").then(data => {
  data.forEach( d => {  
    d.height = +d.height;
  });

  var svg = d3.select("chart-area").append("svg")
    .attr("width", 700)
    .attr("height", 700)

    var rectangles = svg.selectAll("rectangle")
    .data(data)
    console.log(data, "d.height")
});