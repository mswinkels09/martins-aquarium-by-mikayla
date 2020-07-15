import {useLocation} from "./LocationDataProvider.js"
import {LocationAsHTML} from "./Location.js"


export const LocationList = () => {
    const contentElement = document.querySelector(".content--left")
   
    const locations = useLocation()
   
    let locationHTMLRepresentations = ""
    for (const currentLocationObj of locations) {
        locationHTMLRepresentations += LocationAsHTML(currentLocationObj)
    }

    contentElement.innerHTML +=
        `<article class="locations">
            ${locationHTMLRepresentations}
        </article>`
}