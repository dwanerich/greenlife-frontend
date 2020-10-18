class Plant {
    constructor(plantObj) {
    this.plant = plantObj
    this.card = this.createCard()
    // console.log(this.plant)
    }

    createCard() {
        const card = document.createElement('li')
        card.className = "card"
        card.dataset.id = this.plant.id
        card.innerHTML = this.renderInnerHTML()
        collection.append(card)
        card.addEventListener('click', this.handleClick)
        // console.log(card)
        return card
    }

    handleClick = (event) => {
        let count = 0
        let counterTwo = document.getElementById("counter-two")
        
        console.log(event.target.id)
        if (event.target.dataset.action === "sad") {
            ApiService.deletePlant(this.plant.id).then(this.card.remove())
            
        }

        if (event.target.dataset.action === "happy") {
                count++;
                counterTwo.innerHTML = count++ + " moment of joy";
            }
            

        if (event.target.dataset.action === "thirsty") {
            swal("Are you sure you want to do this?", {
                buttons: ["Scale Back!", "More Water!"],
            });   
        }
        
    }

    renderInnerHTML() {
        const { img_src, name} = this.plant
        return `
            <div class="img-input"><img src="${img_src}" alt="${name}"></div>
            <div class="name-input">${name}</div>
        <center>
            <div class="buttonWrapper" id="buttonWrapper">
                <h2 class="counter-two" id="counter-two" data-action="counter">0 Activity</h2>
                <button id="happy-card" data-action="happy">🌞</button>
                <button id="thirsty-card" data-action="thirsty">💦</button>                    
                <button id="sad-card" data-action="sad">🥀</button>
            </div>
        </center>
        `
    }
}

