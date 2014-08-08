var rnd = Math.random;

var update = function(){
    
    var radius = 15;
    var data = []
    for(var i = 0; i < 5; i++) {
        
        var x = rnd() * 300;
        var y = rnd() * 300;

        data.push([x,y]);
    }
    
    console.log("doing d3");
    var svg = d3.select("svg");
    var circle = svg.selectAll("circle")
        .data(data, function(d,i){ return i; });
    var circleEnter = circle.enter().append("circle");

    circleEnter.style("fill", "steelblue");
    circleEnter.attr("r", radius);
    circleEnter.attr("cx", function(d) { return 0; });    
    circleEnter.attr("cy", function(d) { return 0; });    
    
    circle.style("fill", "steelblue");
//    circle.attr("r", radius);

    circle.transition()
    .duration(function(){ return (rnd() + 1) * 1300})
    .delay(function(){ return rnd() * 1300})
    .attr("transform", function(d) { return "translate("+ d[0] +","+ d[1] +")"; });
//    .style("left", function(d,i){ 
//        return d; 
//    });
}

//update();

//var interval = setInterval(function(){
//
//    update();
//
//},9500)


