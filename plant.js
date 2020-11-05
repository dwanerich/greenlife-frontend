class Plant {
    constructor(plantObj) {
    this.plant = plantObj
    this.count = 0
    this.card = this.createCard()
    console.log(this.card)

    // console.log(plantObj)
    }

    createCard() {
        const card = document.createElement('li')
        card.className = "card"
        card.dataset.id = this.plant.id
        card.innerHTML = this.renderInnerHTML()
        collection.append(card)

        card.addEventListener('click', this.handleClick)
          return card
    }


    handleClick = (event) => {
        
        if (event.target.dataset.action === "happy") {
            this.count++
            this.card.innerHTML = this.renderInnerHTML()
        }
        
        // console.log(event.target.id)
        if (event.target.dataset.action === "sad") {
            ApiService.deletePlant(this.plant.id).then(this.card.remove())
        }
    }

    renderInnerHTML() {
        const { img_src, name, user} = this.plant
        console.log(this.count)
        return `
            <div class="img-input"><img src="${img_src}" alt="${name}"></div>
            <div class="name-input">${user.name}'s ${name}</div>
        <center>
            <div class="buttonWrapper" id="buttonWrapper">
                <div id="happy-counter" data-action="counter">${this.count} Likes</div>
        
                <button id="happy-reaction" data-action="happy">🌞</button>
                <div id="sad-counter" data-action="sad-counter"></div>
                <button id="sad-card" data-action="sad">🥀</button>
                <div> <p> ${user.name}'s  </p> </div>
            </div>
        </center>
        `
    }
}

