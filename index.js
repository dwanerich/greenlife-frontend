// dom stuff


document.addEventListener("DOMContentLoaded", () => {
    const userId = fetch("http://localhost:3000/users/current-user-id")
        .then((response) => {
            console.log("on page load response", response)
        }).catch((error) => alert(error))

    // console.log(userId)
})

const plantForm = document.getElementById("form")
const buttonWrapper = document.getElementById('buttonWrapper')
const plantList = document.getElementById("collection")
const happyBtn = document.getElementById('happy-head')
const sadBtn = document.getElementById('sad-head')
const signOutButton = document.getElementById("sign-out-button")


const happyReaction = document.getElementById('happy-reaction')
const sadReaction = document.getElementById('sad-reaction')

// const happyCounter = document.getElementById('happy-card')
// const sadCounter = document.getElementById('sad-card')

const happyCounter = document.getElementById('happy-counter')

const signUpButton = document.getElementById("sign-up-button")

const counter = document.getElementById('counter')
let count = 0;

//  event listener
plantForm.addEventListener("submit", handleFormSubmit)


happyBtn.addEventListener('click', () => {
    console.log('you clicked happy')
    swal("Sunshine Makes Me Happy");

})


sadBtn.addEventListener('click', () => {
    console.log('you clicked thirsty')
    swal("Death comes 💀 in 3's");
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
    // form.reset();

    ApiService.signUp(newUser).then(actualNewUser => {
        document.getElementById("sign-up-form").innerHTML = ("<div id='session-notifications'><p id='welcome-text'>Welcome, " + actualNewUser.name + "</p></div> <br> <p id='sign-out-button'>Sign Out</p>")

        const signOutButton = document.getElementById("sign-out-button")

        if (signOutButton) {
            signOutButton.addEventListener('click', () => {
                console.log("sign out button clicked")


                const userId = fetch("http://localhost:3000/users/sign-out", { method: "DELETE" })
                    .then((response) => {
                        signOutButton.style["display"] = "none";
                        document.getElementById("welcome-text").style["display"] = "none";
                        document.getElementById("session-notifications").innerHTML = ("<p>You've successfully signed out</p>")

                        console.log("on page load response", response)
                    }).catch((error) => alert(error))
            })
        }
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
}

happyReaction.addEventListener('click', () => {
    count++;
    counter.innerHTML = "happy score: " + count;
})

sadReaction.addEventListener('click', () => {
    count--;
    counter.innerHTML = "sad score: " + count;
})