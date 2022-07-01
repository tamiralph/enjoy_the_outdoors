// getting the dropdown list into the JS file for us to work with
let resultCards = document.querySelector("#resultCards");




resultCards.addEventListener("change", function (event) {

       let selectMountain = mountainsArray.filter(mountain) => {
        return mountain.name === event.target.value

       }     
    
       generateMountainInCard(selectMountain[0])
       resultCards.classList.remove("d-none")
    
       console.log(resultCards)
} )
    

function generateSearchMtnCard(mountain) {
    searchMtnCard.innerHTML = ""
    let card = ""
    card += `<div class="card" style="width: 20rem;>`   
    card += `<img src="assets/images/mountains/$(mountain.img)"class=card-img-top" alt="..."`
    card += `<div class="card body">`
    card += `<h5 class="card-title">${mountain.name}</h5>`
    card += `<p class="card-text">${mountain.desc}</p>`

    searchMtnCard.innerHTML += card


}

