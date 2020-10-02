// dom stuff

const plantForm = document.querySelector("#plant-form")
const plantList = document.querySelector("#plant-list")

//  event listener
plantForm.addEventListener("submit", handleFormSubmit)

// event handlers

function handleFormSubmit(event) {
    event.preventDefault()
}

// get form data

const newPlant = {
    name: event.target["name"].value,
    img_url: event.target["img_url"].value,
    caption: event.target["caption"].value,
    reaction: ☀️ 💦 🥀

}

// save plant on sever w/fetch request
// POST /plants
ApiService.addPlant(newPlant)
    .then(actualNewPlant => {
        new Plant(actualNewPlant)
    })
    .catch(error => alert(error))

}

//Render Helpers
function renderOnePlant(plantObj) {
    const plant = new Plant(plantObj)
}

function renderAllPlants(plants) {
    plants.forEach(renderOnePlant)
}

//Initial Render

ApiService.getAllPlants().then(actualPlantData => {
    renderAllPlants(actualPlantData)
})