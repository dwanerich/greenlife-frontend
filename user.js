// class User {
//     constructor(userObj) {
//         this.user = userObj
//         this.card = this.createCard()
//         // console.log(plantObj)
//     }

//     createUser() {
//         const card = document.createElement('li')
//         card.className = "card"
//         card.dataset.id = this.plant.id
//         card.innerHTML = this.renderInnerHTML()
//         collection.append(card)
//         card.addEventListener('click', this.handleClick)
//         // console.log(card)
//         return card
//     }

//     handleClick = (event) => {
//         // console.log(event.target)
//         let count = 0

//         let happyCounter = document.getElementById("happy-counter")

//         if (event.target.dataset.action === "happy") {

//             const a = happyCounter.closest("#happy-counter")
//             count++;
//             a.innerHTML = "happy score: " + count++;

//         }

//         // console.log(event.target.id)
//         if (event.target.dataset.action === "sad") {
//             ApiService.deletePlant(this.plant.id).then(this.card.remove())

//         }

//     }

//     // renderInnerHTML() {
//     //     const { img_src, name, happyReaction, sadReaction } = this.plant
//     //     return `
//     //         <div class="img-input"><img src="${img_src}" alt="${name}"></div>
//     //         <div class="name-input">${name}</div>
//     //     <center>
//     //         <div class="buttonWrapper" id="buttonWrapper">
//     //             <div id="happy-counter" data-action="counter">0 Activity</div>
//     //             <button id="happy-reaction" data-action="happy">🌞</button>
//     //             <div id="sad-counter" data-action="sad-counter">0 Activity</div>
//     //             <button id="sad-card" data-action="sad">🥀</button>
//     //         </div>
//     //     </center>
//     //     `
//     // }
// }

