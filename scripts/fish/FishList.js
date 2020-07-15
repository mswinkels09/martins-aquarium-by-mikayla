import {useFish} from "./FishDataProvider.js"
import {FishAsHTML} from "./Fish.js"

export const FishList = () => {
    const contentElement = document.querySelector(".fishes")

    const fishes = useFish()

    let fishHTMLRepresentations = ""
    for (const currentFishObj of fishes) {
        fishHTMLRepresentations += FishAsHTML(currentFishObj)
    }

    contentElement.innerHTML += 
    `<article class="fishes">
        ${fishHTMLRepresentations}
    </article>`

}

