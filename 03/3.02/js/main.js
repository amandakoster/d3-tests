/*
*    main.js
*    Mastering Data Visualization with D3.js
*    3.2 - Linear scales
*    https://d3indepth.com/scales/
*/

var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", "400")
    .attr("height", "400");

d3.json("data/buildings.json").then(function (data) {

    data.forEach(d => {
        d.height = +d.height;
    });

    var x = d3.scaleBand() //use raw data values to create scale band
        .domain(["Burj Khalifa", "Shanghai Tower", 
        "Abraj Al-Bait Clock Tower", "Ping An Finance Centre", 
        "Lotte World Tower", "One World Trade Center",
        "Guangzhou CTF Finance Center"])
        .range([0, 400]) //range for svg canvas
        .paddingInner(0.3)
        .paddingOuter(0.3);

        console.log(x("Burj Khalifa"))

    var y = d3.scaleLinear()
        .domain([0, 828]) //raw range: height values
        .range([0, 400]); //svg range

    var rects = svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("y", 20)
        .attr("x", function (d) {
            return x(d.name); //value of each building to set scale ~ console.log(x("Burj Khalifa"))
        })
        .attr("width", 40)
        .attr("height", function (d) {
            return y(d.height); // add scale here
        })
        .attr("fill", function (d) {
            return "turquoise";
        });

});



