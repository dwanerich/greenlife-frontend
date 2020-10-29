class ApiService {

    static fetchPlants() {
        return fetch("http://localhost:3000/plants")
            .then(response => response.json())
    }

    static addPlant(newPlant) {
        return fetch("http://localhost:3000/plants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlant)
        })
            .then(response => {
            
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error("Yikes!")
                }
            })
    }

    static deletePlant(id) {
        return fetch(`http://localhost:3000/plants/${id}`, {
            method: "DELETE"
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
    }

    static incrementHappy(plantId) {
        return fetch(`http://localhost:3000/plants/${plantId}`, {
            method: "PUT"
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
    }

    static signUp(newUser) {
        console.log("new-user", newUser)
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(response => {
                console.log("response", response)
                if (response.ok) {
                    console.log(response.message)
                    
                    return response.json()
                } else {
                    throw Error("ERROR on Sign Up")
                }
            })
    }

    // static logOut {
       
        // if (signOutButton) {
        //     signOutButton.addEventListener('click', () => {
        //         console.log("sign out button clicked")


        //         const userId = fetch("http://localhost:3000/users/sign-out", { method: "DELETE" })
        //             .then((response) => {
        //                 signOutButton.style["display"] = "none";
        //                 document.getElementById("welcome-text").style["display"] = "none";
        //                 document.getElementById("session-notifications").innerHTML = ("<p>You've successfully signed out</p>")

        //                 console.log("on page load response", response)
        //             }).catch((error) => alert(error))
        //     })
        // }
    // }
}