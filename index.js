// dom stuff

const plantForm = document.querySelector("#plant-form")
const plantList = document.getElementById("collection")

//  event listener
plantForm.addEventListener("submit", handleFormSubmit)

// event handlers

function handleFormSubmit(e) {
    e.preventDefault()

    // get form data

const newPlant = {
    name: e.target["name"].value,
    img_src: e.target["img_src"].value,
    caption: e.target["caption"].value

}

    // save plant on sever w/fetch request
    // POST /plants
    ApiService.addPlant(newPlant)
        .then(actualNewPlant => {
            new Plant(actualNewPlant)
        })
        .catch(error => alert(error))
    }

    ApiService.fetchPlants().then(actualPlantData => {
        renderAllPlants(actualPlantData)
    })
        //Render Helpers
    function renderOnePlant(plantObj) {
        const plant = new Plant(plantObj)
    }

    function renderAllPlants(plants) {
        plants.forEach(renderOnePlant)
    }
