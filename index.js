// dom stuff

const plantForm = document.getElementById("form")
const plantList = document.getElementById("collection")
const happyBtn = document.getElementById('happy-head')
const thirstyBtn = document.getElementById('thirsty-head')
const sadBtn = document.getElementById('sad-head')



const happyClick = document.getElementById('happy-reaction')
const thirstyClick = document.getElementById('thirsty-reaction')
const sadClick = document.getElementById('sad-reaction')


const counter = document.getElementById('counter')
let count = 0;

//  event listener
plantForm.addEventListener("submit", handleFormSubmit)

happyClick.addEventListener('click', () => {
    count ++;
    counter.innerHTML =" happy score " + count;
})

thirstyBtn.addEventListener('click', () => {
    console.log('you clicked thirsty')
})

thirstyClick.addEventListener('click', () => {
    // console.log('you clicked thirsty')
    swal("Are you sure you want to do this?", {
        buttons: ["Scale Back!", "More Water!"],
    });
})


sadClick.addEventListener('click', () => {
    count--;
    counter.innerHTML = "sad score " + count;
})

// event handlers

function handleFormSubmit(event) {
    event.preventDefault()

    // get form data

const newPlant = {
    name: event.target["name"].value,
    img_src: event.target["img_src"].value,
    // caption: event.target["caption"].value
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



    // REACTION BUTTON LOGIC SECTION //

    // LOGIC FOR HAPPY
    // WHEN HAPPY IS CLICKED, INCREMENT COUNTER +1 && DECREMENT SAD COUNTER BY 1

    // LOGIC FOR THIRSTY
    // WHEN THIRSTY IS CLICKED, INCREMENT COUNTER +1
    // IF THIRSTY COUNTER AMOUNT IS = 2 FIRE OFF ALERT
    // IF THIRSTY COUNTER >= 3, INCREMENT SAD COUNT +1

    // LOGIC FOR SAD
    // WHEN SAD IS CLICKED, INCREMENT COUNTER +1
    // IF SAD COUNTER AMOUNT IS >= 3, FIRE OFF API ADAPTER DELETE FUNCTION TO THAT CARD

