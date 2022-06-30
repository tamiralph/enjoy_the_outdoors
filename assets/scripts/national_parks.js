//this file has locationsArray, nationalParksArray, and parkTypesArray available to it because 
//we included load_national_parks_data.js above it in the html file 

// getting the dropdown list into the JS file for us to work with
let searchTypeDDL = document.querySelector("#searchTypeDDL");

//get the locations dropdown so we can work with it. Setting 
let locationsDDL = document.querySelector("#locations");

//get the types dropdown so we can work with it
let typesDDL = document.querySelector("#types");

// Filter array for states 
let nationalParks = document.querySelector("#nationalParks");

// pull in the search results table
let searchResults = document.querySelector("#searchResults");
let searchResultsBody = document.querySelector("#searchResults tbody");


searchTypeDDL.addEventListener("change", function (event) {

    //check which search type

    //if search type is location then show locations dropdown

    //if search type is type then show types dropdown

    //hide all the drop downs and then check which is supposed to show below
    locationsDDL.classList.add("d-none")
    typesDDL.classList.add("d-none")

    if (event.target.value === "location") {
        generateLocationsDDLOptions();
        locationsDDL.classList.remove("d-none")
    }

    if (event.target.value === "type") {
        generateTypesDDLOptions()
        typesDDL.classList.remove("d-none")
    }

})

locationsDDL.addEventListener("change", function (event) {

    searchResults.classList.add("d-none")

    let location = event.target.value;

    let filteredParks = nationalParksArray.filter((nationalPark) => {
        return nationalPark.State === location
    })

    console.log(filteredParks)

    generateTableRows(filteredParks)


    searchResults.classList.remove("d-none")

})

typesDDL.addEventListener("change", function (event) {

    searchResults.classList.add("d-none")

    let type = event.target.value;

    let filteredTypes = nationalParksArray.filter((park) => {
        return park.LocationName.indexOf(type) >= 0


    })

    // console.log(filteredTypes)

    generateTableRows(filteredTypes)

    searchResults.classList.remove("d-none")

})


function generateTableRows(someArrayOfData) {
    console.log(someArrayOfData)
    //clear out the tables previous results
    searchResultsBody.innerHTML = ""


    //generate new table rows and append to the the tbody innerHTML
    someArrayOfData.forEach((park) => {
        let row = ""
        row += `<tr>`
        row += `    <td>${park.LocationID}</td>`
        row += `    <td>${park.LocationName}</td>`
        row += `    <td>${park.Address}</td>`
        row += `    <td>${park.City}</td>`
        row += `    <td>${park.State}</td>`
        row += `    <td>${park.ZipCode}</td>`
        row += `    <td>${park.Phone}</td>`
        row += `    <td>${park.Fax}</td>`
        row += `</tr>`

        searchResultsBody.innerHTML += row
    })

}

function generateLocationsDDLOptions() {

    locationsDDL.innerHTML = `<option value="">Choose A Location</option>`

    locationsArray.forEach((location) => {
        locationsDDL.innerHTML += `<option value="${location}">${location}</option>`
    })

}

function generateTypesDDLOptions() {

    typesDDL.innerHTML = `<option value="">Choose A Type</option>`

    parkTypesArray.forEach((parkTypes) => {
        typesDDL.innerHTML += `<option value="${parkTypes}">${parkTypes}</option>`
    })

}
