const fishCollection = [
    {
        name: "Flounder",
        species: "Royal Angelfish",
        length: 1,
        location: "Coral Reef",
        diet: "Sponges and Turnicates",
        image: "https://qph.fs.quoracdn.net/main-qimg-1443196e4d8a4e17176d6b97eedc4f37"
    },
    {
        name: "Cleo",
        species: "Goldfish",
        length: 16,
        location: "Lake Tahoe",
        diet: "algae",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Katri.jpg"
    },
    {
        name: "Mrs. Puff",
        species: "Pufferfish",
        length: 5,
        location: "Pacific Ocean",
        diet: "algae and invertebrates",
        image: "https://media.wsimag.com/attachments/716f6066bcc6b29e1054ca0264022c56d729607c/store/fill/1090/613/e6101c269024548aa40ddcac9b3fa54eee13cb721e7c8f8bcdf890436959/A-puffer-fish.jpg"
    },
    {
        name: "Flounder",
        species: "Royal Angelfish",
        length: 1,
        location: "Coral Reef",
        diet: "Sponges and Turnicates",
        image: "https://qph.fs.quoracdn.net/main-qimg-1443196e4d8a4e17176d6b97eedc4f37"
    },
    {
        name: "Cleo",
        species: "Goldfish",
        length: 15,
        location: "Lake Tahoe",
        diet: "algae",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Katri.jpg"
    },
    {
        name: "Mrs. Puff",
        species: "Pufferfish",
        length: 3,
        location: "Pacific Ocean",
        diet: "algae and invertebrates",
        image: "https://media.wsimag.com/attachments/716f6066bcc6b29e1054ca0264022c56d729607c/store/fill/1090/613/e6101c269024548aa40ddcac9b3fa54eee13cb721e7c8f8bcdf890436959/A-puffer-fish.jpg"
    },
    {
        name: "Flounder",
        species: "Royal Angelfish",
        length: 1,
        location: "Coral Reef",
        diet: "Sponges and Turnicates",
        image: "https://qph.fs.quoracdn.net/main-qimg-1443196e4d8a4e17176d6b97eedc4f37"
    },
    {
        name: "Cleo",
        species: "Goldfish",
        length: 16,
        location: "Lake Tahoe",
        diet: "algae",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Katri.jpg"
    },
    {
        name: "Mrs. Puff",
        species: "Pufferfish",
        length: 5,
        location: "Pacific Ocean",
        diet: "algae and invertebrates",
        image: "https://media.wsimag.com/attachments/716f6066bcc6b29e1054ca0264022c56d729607c/store/fill/1090/613/e6101c269024548aa40ddcac9b3fa54eee13cb721e7c8f8bcdf890436959/A-puffer-fish.jpg"
    }
]

export const useFish = () => { 
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    const holyFish = []

    for (const theFish of fishCollection) {
        if (theFish.length % 3 === 0) {
            holyFish.push(theFish)
        }
    }
    return holyFish
}
export const soldierFish = () => {
    const soldiers = []

    for (const theFish of fishCollection) {
        if (theFish.length % 5 === 0 && theFish.length % 3 !== 0) {
            soldiers.push(theFish)
        }
    }
    return soldiers
}
export const nonHolyFish = () => {
    const regFish = []

    for (const theFish of fishCollection) {
        if (theFish.length % 3 !== 0 && theFish.length % 5 !== 0) {
            regFish.push(theFish)
        }
    }
    return regFish
}
