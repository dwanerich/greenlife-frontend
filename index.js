// dom stuff

const plantForm = document.querySelector("#plant-form")
const plantList = document.getElementById("collection")
const happyBtn = document.getElementById('happy-btn')
const thirstyBtn = document.getElementById('thirsty-btn')
const sadBtn = document.getElementById('sad-btn')

//  event listener
plantForm.addEventListener("submit", handleFormSubmit)

happyBtn.addEventListener('click', () => {
    console.log('you clicked happy')
})

thirstyBtn.addEventListener('click', () => {
    console.log('you clicked thirsty')
})

sadBtn.addEventListener('click', () => {
    console.log('you clicked sad')
})

// event handlers

function handleFormSubmit(e) {
    e.preventDefault()
    // form.reset to be enabled !!!!!!

    // get form data

const newPlant = {
    name: e.target["name"].value,
    img_src: e.target["img_src"].value,
    caption: e.target["caption"].value

}

function handleReaction(e) {
    e.preventDefault()

}

    // save plant on sever w/fetch request
    // POST /plants
    ApiService.addPlant(newPlant)
        .then(actualNewPlant => {
        new Plant(actualNewPlant)
        })
        .catch(error => alert(error))
    }

    ApiService.fetchPlants()
    .then(actualPlantData => {
    renderAllPlants(actualPlantData)
    })
        //Render Helpers
    function renderOnePlant(plantObj) {
        const plant = new Plant(plantObj)
    }

    function renderAllPlants(plants) {
        plants.forEach(renderOnePlant)
    }
