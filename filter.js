
//Select the onchange function from HTML
d3.selectAll("#selDataset").on("change", optionChanged);
function optionChanged(id) {
    // console.log(id)
    var dropdownMenu = d3.select("#selDataset");

    var inputValue = dropdownMenu.property("value");

    // console.log(inputValue);
    // Update bar function and passing input value
    demoBar(inputValue)

}

///Drop Down Filled with values  
d3.json("data_dump.json").then((importedData) => {
    datayears = importedData.years

    console.log(datayears)

    var id_list = d3.select("#selDataset");

    Object.entries(datayears).forEach(([key, value]) => {
        id_list.insert("option").text(value)


    });
})



////////Employment Info//////////
function demoBar(id_val) {
    d3.json("data_dump.json").then((data) => {

        //using D3 bring in metadata
        dataid = data.employment_status
        tuitiondata = data.tuition

        const subjectId = parseInt(id_val)

        const guageId = tuitiondata.filter(x => x.four_end === subjectId)[0];

        const freq = guageId.four_public_tuition;

        const sample = dataid.filter(x => x.year === subjectId)[0];


        /// array to replace keys with text 
        const arr = ['Year',
            'Unemployed with less highschool degree',
            'Unemployed with no college degree',
            'Unemployed with some college',
            'Unemployed with Associates degree',
            'Unemployed with Bachelors or Advance degree',
            'Employed with less highschool degree',
            'Employed with no college degree',
            'Employed with some college',
            'Employed with Associates degree',
            'Employed with Bachelors or Advance degree'];

        const obj = sample
        // replacekeys function to replace keys with text 
        const replaceKeys = (arr, obj) => {
            const keys = Object.keys(obj);
            const res = {};
            for (let a in arr) {
                res[arr[a]] = obj[keys[a]];
                obj[arr[a]] = obj[keys[a]];
                delete obj[keys[a]];
            };
        };
        replaceKeys(arr, obj);
        console.log(obj);



        // Fill in Demo chart with key and value 
        panel = d3.select(".panel-body")
        panel.html("")
        let demoFill = Object.entries(sample).forEach(([key, value]) => {

            panel.append("p").text(`${key}: ${value}`);

        });

        /////////Gauge Chart added///////////
        var data = [
            {
                value: freq,
                title: { text: "Four Year Public Tuition" },
                type: "indicator",
                mode: "gauge+number",
                delta: { reference: 0 },

                gauge: {
                    axis: { range: [null, 40000] },
                    steps: [
                        { range: [0, 9] }
                    ],


                }
            }
        ];
        // Display graph 
        var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
        Plotly.newPlot('gauge', data, layout);

    });

};

