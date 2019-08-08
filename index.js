var slider = document.getElementById("myRange");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");
var output = document.getElementById("demo");   // container of graph
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");

var keynesianTab = document.getElementById("Keynesian").style;
var neoclassicalTab = document.getElementById("Neoclassical").style;
var supplySideTab = document.getElementById("SupplySide").style;

// for tabs
function openKeynesian() {
    keynesianTab.display = "block";
    neoclassicalTab.display = "none";
    supplySideTab.display = "none";
}

function openNeoclassical() {
    keynesianTab.display = "none";
    neoclassicalTab.display = "block";
    supplySideTab.display = "none";
}

function openSupplySide() {
    keynesianTab.display = "none";
    neoclassicalTab.display = "none";
    supplySideTab.display = "block";
}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    // phillips curve
    output.innerHTML = "Current unemployment: " + this.value + "%" + '<br>' + "Current inflation rate: " + ((24 / this.value) - 3).toFixed(2) + "%";
    console.log(this.value);      // prints the value of the slider
    console.log((24 / this.value) - 3);

    // make graph
    var items = [
        {x: parseInt(this.value * 100), y: ((24 / this.value) - 3), label: "YOUR VALUE", group: 1},
        {x: 400, y: 3, group: 0},
        {x: 420, y: 2.7143, group: 0},
        {x: 440, y: 2.4545, group: 0},
        {x: 460, y: 2.2174, group: 0},
        {x: 480, y: 2, group: 0},
        {x: 500, y: 1.8, group: 0},
        {x: 520, y: 1.6154, group: 0},
        {x: 540, y: 1.4444, group: 0},
        {x: 560, y: 1.2857, group: 0},
        {x: 580, y: 1.1379, group: 0},
        {x: 600, y: 1, group:0}
    ]

    var dataset = new vis.DataSet(items)

    var options = {
        start: 400,
        end: 600,
        dataAxis : {
            left: {
                title: {
                    text: "Inflation rate (percentage)",
                }
            }
        }
    }

    var graph2d = new vis.Graph2d(output, dataset, options);

    document.getElementById("PhillipsAxisLabel").style.display = "block";

}

slider2.oninput = function() {
    // pareto principle
    percentNation = this.value;
    percentWealth = parseInt(((-1 / ((.2 * this.value) + 1.2)) + 1.05) * 100);
    console.log(percentNation)
    console.log(percentWealth)
    
    output2.innerHTML = "Percentile of the Nation: " + percentNation + "<br>" + "Percent of Nation's Wealth: " + percentWealth

    var items = [
        {x: 1, y: percentWealth, group: ": Percent of nation's wealth owned"},
        {x: 1, y: percentNation, group: ": Top percent of the nation"}
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
        },
        legend: {
            enabled: true,
        }
    }

    var graph2d = new vis.Graph2d(output2, dataset, options)
}

lc = [      // laffer curve
    [0, 0],
    [5, 49],
    [10, 95],
    [15, 127.5],
    [20, 140],
    [25, 135],
    [30, 120],
    [35, 105],
    [40, 88],
    [45, 76.5],
    [50, 65],
    [55, 55],
    [60, 48],
    [65, 45.5],
    [70, 42],
    [75, 37.5],
    [80, 32],
    [85, 25.5],
    [90, 18],
    [95, 9.5],
    [100, 0]
]

slider3.oninput = function() {
    output3.innerHTML = "Tax rate: " + this.value + "<br>" + "Revenue: $" + lc[this.value / 5][1]

    var items = [
        {x: parseInt(this.value), y: lc[this.value / 5][1], label: "your point", group: 1},
        {x: lc[0][0], y: lc[0][1], group: 0},
        {x: lc[2][0], y: lc[2][1], group: 0},
        {x: lc[4][0], y: lc[4][1], group: 0},
        {x: lc[6][0], y: lc[6][1], group: 0},
        {x: lc[8][0], y: lc[8][1], group: 0},
        {x: lc[10][0], y: lc[10][1], group: 0},
        {x: lc[12][0], y: lc[12][1], group: 0},
        {x: lc[14][0], y: lc[14][1], group: 0},
        {x: lc[16][0], y: lc[16][1], group: 0},
        {x: lc[18][0], y: lc[18][1], group: 0},
        {x: lc[20][0], y: lc[20][1], group: 0},
    ]

    var dataset = new vis.DataSet(items);
    var options = {
        start: 0,
        end: 100,
       dataAxis: {
            left: {
                range: {
                    min: 0,
                    max: 142
                }
            }
        },
    };
    var Graph2d = new vis.Graph2d(output3, dataset, options);

    document.getElementById("LafferAxis").style.display = "block";
}