// dom stuff

const plantForm = document.getElementById("form")
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

function handleFormSubmit(event) {
    event.preventDefault()

    // get form data

const newPlant = {
    name: event.target["name"].value,
    img_src: event.target["img_src"].value,
    caption: event.target["caption"].value
}

// plantForm.reset()
console.log(newPlant)

// function handleReaction(e) {
//     e.preventDefault()

// }

    // save plant on sever w/fetch request
    // POST /plants
    ApiService.addPlant(newPlant).then(actualNewPlant => {
        console.log("actual: ", actualNewPlant)
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
