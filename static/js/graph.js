
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
// Enrollment Comparison 
console.log(dataJon2)
var trace5 = {
    x: dataJon2.map(row => row.four_year),
    y: dataJon2.map(row => row.four_public_enrollment),
    text: dataJon2.map(row => row.four_year),
    name: "Four Year(Public Enrollment)",
    type: "bar"
};


var trace6 = {
    x: dataJon2.map(row => row.two_year),
    y: dataJon2.map(row => row.two_public_enrollment),
    text: dataJon2.map(row => row.two_year),
    name: "Two Year(Public Enrollment)",
    type: "bar"
};
var trace7 = {
    x: dataJon2.map(row => row.four_year),
    y: dataJon2.map(row => row.four_public_enrollment),
    text: dataJon2.map(row => row.four_year),
    name: "Four Year(Private Enrollment)",
    type: "bar"
};


var trace8 = {
    x: dataJon2.map(row => row.two_year),
    y: dataJon2.map(row => row.two_private_enrollment),
    text: dataJon2.map(row => row.two_year),
    name: "Two Year(Private Enrollment)",
    type: "bar"
};


// Combining both traces
var traceData2 = [trace5, trace6, trace7, trace8];

// Apply the group barmode to the layout
var layout2 = {
    title: "Public & Private Enrollment",
    barmode: "group"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plotJon2", traceData2, layout2);