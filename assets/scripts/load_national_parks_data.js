"use strict"

let locationsArray = []
let nationalParksArray = []
let parkTypesArray = []

window.onload = function () {

    loadJsonData("assets/data/locations.json").then((locations) => {
        locationsArray = locations;

        // immediate data here. outside waits for events
    })

    loadJsonData("assets/data/nationalParks.json").then((nationalParks) => {
        nationalParksArray = nationalParks.parks;
    })

    loadJsonData("assets/data/parkTypes.json").then((parkTypes) => {
        parkTypesArray = parkTypes;
    })

}

let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}