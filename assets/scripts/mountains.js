//this file has locationsArray, nationalParksArray, and parkTypesArray available to it because 
//we included load_national_parks_data.js above it in the html file 

//this file has locationsArray, nationalParksArray, and parkTypesArray available to it because 
//we included load_national_parks_data.js above it in the html file 

// getting the dropdown list into the JS file for us to work with
let searchMtnDDL = document.querySelector("#searchMtnDDL");

//get the locations dropdown so we can work with it. Setting 
// let elevationDDL = document.querySelector("#elevationDDL");

// //get the types dropdown so we can work with it
// let namesDDL = document.querySelector("#names");

// Filter array for mountains
let mountains = document.querySelector("#mountains");

// pull in the search results table
let searchResults = document.querySelector("#searchResults");
let searchResultsBody = document.querySelector("#searchResults tbody");


searchMtnDDL.addEventListener("change", function (event) {
})

    //check which search type

    //if search type is location then show locations dropdown

    //if search type is type then show types dropdown

    //hide all the drop downs and then check which is supposed to show below
    // elevationDDL.classList.add 
    // namesDDL.classList.add("d-none")

    // if (event.target.value === "elevation") {
    //     generateElevationDDLOptions();
        // elevationDDL.classList.remove("d-none")
    // }

    // if (event.target.value === "type") {
    //     generateTypesDDLOptions()
    //     // namesDDL.classList.remove("d-none")
    // }

// })

searchMtnDDL.addEventListener("change", function (event) {

    searchResults.classList.add 

    let elevation = event.target.value;

    let filteredElev = mountainsArray.filter((mountains) => {
        return mountains.Elevation === elevation
    })

    console.log(filteredElev)

    generateTableRows(filteredElev)


    searchResults.classList.remove("d-none")

})

function generateTableRows(someArrayOfData) {

    //clear out the tables previous results
    searchResultsBody.innerHTML = ""


    //generate new table rows and append to the the tbody innerHTML
    someArrayOfData.forEach((mountains) => {
        let row = ""
        row += `<tr>`
        row += `    <td>${mountains.Name}</td>`
        row += `    <td>${mountains.Elevation}</td>`
        row += `    <td>${mountains.Effort}</td>`
        row += `    <td>${mountains.Desc}</td>`
        row += `</tr>`

        searchResultsBody.innerHTML += row
    })

}

function generateSearchMtnOptions() {

    mountains.innerHTML = `<option value="">Choose A Mountain</option>`

    mountainsArray.forEach((mountains) => {
        elevationsDDL.innerHTML += `<option value="${mountains}">${mountains}</option>`
    })

}

