/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.6 - Selections and data joins
*/
//+d.age makes numbners as strings into numbers as i
// var data = [25, 20, 10, 12, 15];
d3.json("data/ages.json").then(data =>  {
    data.forEach(d => {
        d.age = +d.age;
    });

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 600)
        .attr("height", 600);

    //sort of like mapping though data
    var circles = svg.selectAll("circle")
        .data(data);
    console.log(data, 'circle data')

    circles.enter()
        .append("circle")
        .attr("cx", (d, i) => (i * 100) + 25) //stagger distance from left
        .attr("cy", 100) //distance from top
        .attr("r", (d) => d.age * 2) //radius apart
        .attr("fill", d => {
            if (d.name === "Emily")
                return "blue"
            else return "red"

        });
});