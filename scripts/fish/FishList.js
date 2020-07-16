import {mostHolyFish, soldierFish, nonHolyFish} from "./FishDataProvider.js"
import {FishAsHTML} from "./Fish.js"

const contentElement = document.querySelector(".fishes")

const addFishToDOM = (theArrayOFish) => {
    let fishHTMLRepresentations = ""

    for(const addFishToDOM of theArrayOFish) {
        fishHTMLRepresentations += FishAsHTML(addFishToDOM)
    }

    contentElement.innerHTML += 
    `<article class="fishes">
        ${fishHTMLRepresentations}
    </article>`
}

export const FishList = () => {

    const holyFish = mostHolyFish()
    addFishToDOM(holyFish)

    const soldiers = soldierFish()
    addFishToDOM(soldiers)
    
    const duds = nonHolyFish()
    addFishToDOM(duds)


}
