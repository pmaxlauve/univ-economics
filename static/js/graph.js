
//////////////////////////////////////////////
// Public tutition comparison 

var trace1 = {
    x: dataJon.map(row => row.four_end),
    y: dataJon.map(row => row.four_public_tuition),
    text: dataJon.map(row => row.four_end),
    name: "Four Year(Public Tuition)",
    type: "bar"
};


var trace2 = {
    x: dataJon.map(row => row.two_end),
    y: dataJon.map(row => row.two_public_tuition),
    text: dataJon.map(row => row.two_end),
    name: "Two Year(Public Tuition)",
    type: "bar"
};
var trace3 = {
    x: dataJon.map(row => row.four_end),
    y: dataJon.map(row => row.four_private_tuition),
    text: dataJon.map(row => row.four_end),
    name: "Four Year(Private Tuition)",
    type: "bar"
};


var trace4 = {
    x: dataJon.map(row => row.two_end),
    y: dataJon.map(row => row.two_private_tuition),
    text: dataJon.map(row => row.two_end),
    name: "Two Year(Private Tuition)",
    type: "bar"
};


// Combining both traces
var traceData = [trace1, trace2, trace3, trace4];

// Apply the group barmode to the layout
var layout = {
    title: "Public & Private Tuition",
    barmode: "group"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plotJon", traceData, layout);

//////////////////////////////////////////////
// Private tutition comparison 

// var trace3 = {
//     x: data.map(row => row.four_end),
//     y: data.map(row => row.four_private_tuition),
//     text: data.map(row => row.four_end),
//     name: "Four Year",
//     type: "bar"
// };


// var trace4 = {
//     x: data.map(row => row.two_end),
//     y: data.map(row => row.two_private_tuition),
//     text: data.map(row => row.two_end),
//     name: "Two Year",
//     type: "bar"
// };

// // Combining both traces
// var traceData_1 = [trace3, trace4];

// // Apply the group barmode to the layout
// var layout_1 = {
//     title: "Private Tuition",
//     barmode: "group"
// };

// // Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot_2", traceData_1, layout_1);