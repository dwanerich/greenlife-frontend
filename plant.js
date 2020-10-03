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
        const { img_src, name, caption} = this.plant
        return `
      <div class="img-input">
        <img src="${img_src}" alt="${name}">
      </div>
        <div class="name-input">${name}</div>
        <div class="description-input">${caption}</div>
      </button>
    `
    }
  }