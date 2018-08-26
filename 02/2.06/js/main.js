/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.6 - Selections and data joins
*/
//+d.age makes numbners as strings into numbers as i
// var data = [25, 20, 10, 12, 15];
d3.json("data/ages.json").then(function (data) {
    data.forEach(function (d) {
        d.age = +d.age;
    });

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 400)
        .attr("height", 400);

    //sort of like mapping though data
    var circles = svg.selectAll("circle")
        .data(data);
    console.log(data, 'circle data')

    circles.enter()
        .append("circle")
        .attr("cx", (d, i) => (i * 100) + 25) //stagger distance from left
        .attr("cy", 50) //distance from top
        .attr("r", (d) => d.age * 2) //radius apart
        .attr("fill", d => {
            if (d.name === "Tony")
                return "blue"
            else return "red"

        });
});