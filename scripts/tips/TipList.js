import {TipAsHTML} from "./Tip.js"
import {useTip} from "./TipDataProvider.js"

export const TipList = () => {
    const contentElement = document.querySelector(".content--right")
    
    const tips = useTip()

    let tipHTMLRepresentations = ""
    for (const currentTipObj of tips) {
        tipHTMLRepresentations += TipAsHTML(currentTipObj)
    }
    contentElement.innerHTML += `
        <article class="tipList">
            ${tipHTMLRepresentations}
        </article>`
}