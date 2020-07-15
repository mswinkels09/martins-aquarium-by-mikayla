export const LocationHTMLRepresentation = (locationObj) => {
    return
    <section class="location">
        <img class="location__image" src="${locationObj.image}" />
        <div class="locationInfo">
            <div class="location__name">${locationObj.name}</div>
            <div class="location__description">${locationObj.description}</div>
        </div>
    </section>

} 