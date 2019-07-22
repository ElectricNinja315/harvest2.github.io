var slider = document.getElementById("myRange");
var slider2 = document.getElementById("myRange2");
var output = document.getElementById("demo");   // container of graph
var output2 = document.getElementById("demo2");
output.innerHTML = slider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = "Current unemployment: " + this.value + "%" + '<br>' + "Current inflation rate: " + ((24 / this.value) - 3).toFixed(2) + "%";
    console.log(this.value);      // prints the value of the slider
    console.log((24 / this.value) - 3);

    // make graph
    var items = [
        // TODO: redo this so that the interval is every .2 or something clean, make the x-values strings, redo numbers


        // TODO: so
        // we hide the x-axis
        // so the only way to know what's on the x-axis is the number above the graph
        {x: parseInt(this.value * 100), y: ((24 / this.value) - 3), label: "YOUR VALUE", group: 0},
        {x: 400, y: 3, group: 1},
        {x: 420, y: 2.7143, group: 1},
        {x: 440, y: 2.4545, group: 1},
        {x: 460, y: 2.2174, group: 1},
        {x: 480, y: 2, group: 1},
        {x: 500, y: 1.8, group: 1},
        {x: 520, y: 1.6154, group: 1},
        {x: 540, y: 1.4444, group: 1},
        {x: 560, y: 1.2857, group: 1},
        {x: 580, y: 1.1379, group: 1},
        {x: 600, y: 1, group: 1}
    ]

    var dataset = new vis.DataSet(items)

    var options = {
        start: 400,
        end: 600
    }

    var graph2d = new vis.Graph2d(output, dataset, options)
}

slider2.oninput = function() {
    output2.innerHTML = this.value;
}