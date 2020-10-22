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

    static logOut(id) {
       
        return fetch(`ttp://localhost:3000/users/sessions/${id}`, {
            method: "DELETE"
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
    }
}