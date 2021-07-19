// from data.js (console.log used throughout to log output/results)
var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");

// Build table -console log sightings (for reference), then add to the tbody row by row
tableData.forEach(function(etSighting) {
    console.log(etSighting);

        var row = tbody.append("tr");
        // console.log each UFO Sighting key, value and append the data "td" cells
        Object.entries(etSighting).forEach(function([key, value]) {
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });


// use d3 to call the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    //clear the table prior to each filter
    tbody.html("");

    // use d3 to get the selected item, and the value (etc) of the item
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // create filter of the input value based on datetime value
    var inputFilter = tableData.filter(sighting => sighting.datetime == inputValue);
    console.log(inputFilter);


    inputFilter.forEach(function(selections) {
    console.log(selections);

    // add to the table row
    var row = tbody.append("tr");
    
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        
        // call details based on the filter to add to the table cells
        var cell = row.append("td");
        cell.text(value);
    });
});
});
