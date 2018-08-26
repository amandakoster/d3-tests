/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.6 - Selections and data joins
*/
//+d.age makes numbers as strings into numbers as integers
// var data = [25, 20, 10, 12, 15];
d3.json("data/ages.json").then(data => data.forEach(d => d.age = +d.age,
    console.log(data))
);

// var svg = d3.select("#chart-area").append("svg")
//     .attr("width", 400)
//     .attr("height", 400);

// //sort of like mapping though data
// var circles = svg.selectAll("circle")
//     .data(data);

// circles.enter()
//     .append("circle")
//         .attr("cx", (d, i) => (i * 100) + 25) //stagger distance from left
//         .attr("cy", 100) //distance from top
//         .attr("r", (d) => d) //radius apart
//         .attr("fill", "purple");