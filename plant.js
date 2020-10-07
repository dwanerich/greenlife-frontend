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

    handleClick = (e) => {
        if (e.target.dataset.action === "byebye") {
            ApiService.donatePlant(this.plant.id).then(this.card.remove())
        }
    }

    renderInnerHTML() {
        const { name, img_src, caption} = this.plant
        return `
      <div class="img-input">
        <div class="name-input">${name}</div>
        <img src="${img_src}" alt="${name}">
      </div>
      <div class="description-input"><br> <br>${caption}</div>

    `
    }
  }