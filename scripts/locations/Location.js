export const LocationAsHTML = (locationObj) => {
    return `<section class="location">
            <img class="location__image" src="${locationObj.image}" />
            <div class="locationInfo">
                <div class="location__name"><strong>${locationObj.name}</strong></div>
                <div class="location__description">${locationObj.description}</div>
            </div>
        </section>`

} 