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
                    throw Error("No Bueno")
                }
            })
    }

    static donatePlant(id) {
        return fetch(`http://localhost:3000/plants/${id}`, {
            method: "DELETE"
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
    }


}