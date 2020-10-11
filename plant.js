class Plant {
    constructor(plantObj) {
    this.plant = plantObj
    this.card = this.createCard()
    // reaction.plants.push(this)
    }

    createCard() {
        const card = document.createElement('li')
        card.className = "card"
        card.dataset.id = this.plant.id
        card.innerHTML = this.renderInnerHTML()
        collection.append(card)
        return card
    }

    handleClick = (event) => {
        if (event.target.dataset.action === "byebye") {
            ApiService.deletePlant(this.plant.id).then(this.card.remove())
        }
    }

    renderInnerHTML() {
                const { img_src, name} = this.plant
                return `
                <div class="img-input"><img src="${img_src}" alt="${name}"></div>
                <div class="name-input">${name}</div>
            //   <div class="caption-input"></div>

            <center>
                    <div class="buttonwrapper">
                        <h1 id="counter">0</h1>
                        <button id="happy-reaction">🌞</button>
                        <button id="thirsty-reaction">💦</button>
                        <button id="sad-btn">🥀</button>
                    
                    </div>

                </center>
               
            
            
            
            `
    }
    
}

