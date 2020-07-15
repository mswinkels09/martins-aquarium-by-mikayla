import {TipAsHTML} from "./Tip.js"
import {useTip} from "./TipDataProvider.js"

export const TipList = () => {
    const contentElement = document.querySelector(".tipList")
    
    const tips = useTip()

    let tipHTMLRepresentations = ""
    for (const currentTipObj of tips) {
        tipHTMLRepresentations += TipAsHTML(currentTipObj)
    }
    contentElement.innerHTML += `
        <article>
            ${tipHTMLRepresentations}
        </article>`
}