export const FishAsHTML = (fishObj) => {
    return `<section class="fish card">
            <img class="fish__image" src="${fishObj.image}" alt="pufferfish" />
            <div class="fish__name"><strong>${fishObj.name}</strong></div>
            <div class="fish__species">${fishObj.species}</div>
            <div class="fish__length">${fishObj.length}</div>
            <div class="fish__locations">${fishObj.location}</div>
            <div class="fish__diet">${fishObj.diet}</div>
        </section>`
}