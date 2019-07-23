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
    percentNation = this.value;
    percentWealth = parseInt(((-1 / ((.2 * this.value) + 1.2)) + 1.05) * 100);
    console.log(percentNation)
    console.log(percentWealth)
    
    output2.innerHTML = "Percentile of the Nation: " + percentNation + "<br>" + "Percent of Nation's Wealth: " + percentWealth

    var items = [
        {x: 1, y: percentNation, group: 1},
        {x: 1, y: percentWealth, group: 0}
    ]

    var dataset = new vis.DataSet(items);
    var options = {
        style: 'bar',
        stack: false,
        barChart: {
            sideBySide: true
        },
        drawPoints: false,
        start: 1,
        end: 1,
        dataAxis: {
            left: {
                range: {
                    min: 0,
                    max: 100
                }
            }
        }
    }

    var graph2d = new vis.Graph2d(output2, items, options)
}