//this file has locationsArray, nationalParksArray, and parkTypesArray available to it because 
//we included load_national_parks_data.js above it in the html file 

//getting the dropdown list into the JS file for us to work with
let searchTypeDDL = document.querySelector("#searchTypeDDL");

//get the locations dropdown so we can work with it
let locationsDDL = document.querySelector("#locations");

//get the locations dropdown so we can work with it
let typesDDL = document.querySelector("#types");

searchTypeDDL.addEventListener("change", function(event){

    //check which search type

    //if search type is location then show locations dropdown

    //if search type is type then show types dropdown

    //hide all the drop downs and then check which is supposed to show below
    locationsDDL.classList.add("d-none")
    typesDDL.classList.add("d-none")

    if(event.target.value === "location"){
        generateLocationsDDLOptions();
        locationsDDL.classList.remove("d-none")
        typesDDL.classList.add("d-none")
    }

    if(event.target.value === "type"){
        generateTypesDDLOptions()
        typesDDL.classList.remove("d-none")
        locationsDDL.classList.add("d-none")
    }

})

locationsDDL.addEventListener("change", function(event){
    alert(event.target.value)
})

function generateLocationsDDLOptions(){

    locationsDDL.innerHTML = `<option value="">Choose A Location</option>`

    locationsArray.forEach((location) => {
        locationsDDL.innerHTML += `<option value="${location}">${location}</option>`
    })

}

function generateTypesDDLOptions(){

    parkTypesArray.forEach((parkType) => {
        typesDDL.innerHTML += `<option value="${parkType}">${parkType}</option>`
    })

}
