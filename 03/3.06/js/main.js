/*
*    main.js
*    Mastering Data Visualization with D3.js
*    3.6 - Band scales
*/


var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", "400")
    .attr("height", "400");

d3.json("data/buildings.json").then(function(data){

    data.forEach(function(d) {
        d.height = +d.height;
    });

    var x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, 400])
        .paddingInner(0.3)
        .paddingOuter(0.3);
        
    var y = d3.scaleLinear()
    .domain([
        d3.min(data, (data, d => d.value)),
        d3.max(data, (data, d => d.value)) 
    ])
    .range([0, 400]);
    
    var y = d3.scaleLinear()
    .domain([d3.extent(data, d => d.value)])
    .range([0, 400])


    var rects = svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("y", 10)
            .attr("x", function(d, i){
                return x(i * 60);
            })
            .attr("width", x.bandwidth)
            .attr("height", function(d){
                return y(d.height);
            })
            .attr("fill", function(d) {
                return "grey";
            });

})