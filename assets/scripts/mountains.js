// getting the dropdown list into the JS file for us to work with
let searchMtnDDL = document.querySelector("#searchMtnDDL");

// Filter array for mountains
let mountains = document.querySelector("#mountains");

// pull in the search results table
let searchResults = document.querySelector("#searchResults");
let searchResultsBody = document.querySelector("#searchResults tbody");


searchMtnDDL.addEventListener("change", function (event) {

    searchResults.classList.add 

    let elev = event.target.value;

    let filteredElev = mountainsArray.filter((mountains) => {
        return mountains.name.indexOf(type) >= 0

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
        row += `    <td>${mountains.name}</td>`
        row += `    <td>${mountains.elevation}</td>`
        row += `    <td>${mountains.effort}</td>`
        row += `    <td>${mountains.desc}</td>`
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

