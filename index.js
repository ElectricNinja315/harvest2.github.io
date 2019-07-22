var slider = document.getElementById("myRange");
var output = document.getElementById("demo");   // container of graph
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    console.log(this.value);      // prints the value of the slider

    // make graph
    var items = [
        {x: 400, y: 300},
        {x: 422, y: 269},
        {x: 450, y: 233},
        {x: 500, y: 180},
        {x: 516, y: 165},
        {x: 537, y: 147},
        {x: 559, y: 129},
        {x: 575, y: 117},
        {x: 600, y: 100},
        {x: parseInt(this.value), y: Math.round(((2400 / this.value) - 3) * 100), label: "YOUR VALUE", group: 0}
    ]

    var dataset = new vis.DataSet(items)

    var options = {
        start: 400,
        end: 600,
    }

    var graph2d = new vis.Graph2d(output, dataset, options)
}