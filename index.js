// dom stuff

const plantForm = document.getElementById("form")
const buttonWrapper = document.getElementById('buttonWrapper')
const plantList = document.getElementById("collection")
const happyBtn = document.getElementById('happy-head')
const thirstyBtn = document.getElementById('thirsty-head')
const sadBtn = document.getElementById('sad-head')


const happyReaction = document.getElementById('happy-reaction')
const thirstyReaction = document.getElementById('thirsty-reaction')
const sadReaction = document.getElementById('sad-reaction')

const happyReactionTwo = document.getElementById('happy-card')
const thirstyReactionTwo = document.getElementById('thirsty-card')
const sadReactionTwo = document.getElementById('sad-card')

const signUpButton = document.getElementById("sign-up-button")


const counter = document.getElementById('counter')
const counterTwo = document.getElementById('counter-two')
let count = 0;

//  event listener
plantForm.addEventListener("submit", handleFormSubmit)

thirstyBtn.addEventListener('click', () => {
    console.log('you clicked thirsty')
})

document.addEventListener("DOMContentLoaded", () => {
    const userId = fetch("http://localhost:3000/users/current-user-id")
        .then((response) =>  {
            console.log("on page load response", response)
        }).catch((error) => alert(error))

    // console.log(userId)
})

signUpButton.addEventListener("click", (event) => {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value


    const newUser = {
        name: name,
        email: email,
        password: password
    }

       ApiService.signUp(newUser).then(actualNewUser => {
           document.getElementById("sign-up-form").innerHTML = ("<p>Welcome, " + actualNewUser.name + "</p>")
           console.log(actualNewUser.id)
        })
        .catch(error => alert(error))


    })


// event handlers

function handleFormSubmit(event) {
    event.preventDefault()

    // get form data 

const newPlant = {
    name: event.target["name"].value,
    img_src: event.target["img_src"].value,
}


// plantForm.reset()
console.log(newPlant)


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

        moodHandler()
    }

    function moodHandler() {

        // plantList.addEventListener("click", (e) => {

        //     console.log(e.target)
              
        //     })
        }

        happyReaction.addEventListener('click', () => {
            count++;
            counter.innerHTML = "happy direction " + count;
        })

        sadReaction.addEventListener('click', () => {
            count--;
            counter.innerHTML = "sad direction " + count;
        })

        thirstyReaction.addEventListener('click', () => {
            // console.log('you clicked thirsty')
            swal("Are you sure you want to do this?", {
                buttons: ["Scale Back!", "More Water!"],
            });
    })


