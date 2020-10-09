class Plant {
    constructor(plantObj) {
    this.plant = plantObj
    this.card = this.createCard()
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
      const { img_src, name, caption} = this.plant
        return `
        <div class="img-input"><img src="${img_src}" alt="${name}"></div>
        <div class="name-input">${name}</div>
      <div class="caption-input">${caption}</div>
      <div class="reactions">  <center>
      
        <ul>
        <li><emojiButton id="happy-btn">☀️ happy</button></li>
        <li><emojiButton id="thirsty-btn">💦 thirsty</button></li>
        <li> <emojiButton id="sad-btn">🥀 sad</button></li>
        </ul> </center> </div>`
    }
    
}

