const fishData = {
    fish: [
        {
            id: 1,
            image: "https://cdn.fishtankadvisor.com/wp-content/uploads/2022/04/sturisoma-panamense.jpeg",
            species: "Royal Farlowella Catfish",
            length: 20,
            nickname: "King Thinboi",
            harvestLocationId: 1,
            dietTypeId: 1
        },
        {
            id: 2,
            image: "https://cdn.fishtankadvisor.com/wp-content/uploads/2022/04/pantodon-buchholzi.jpeg",
            species: "African Butterflyfish",
            length: 13,
            nickname: "Groucho",
            harvestLocationId: 2,
            dietTypeId: 3
        },
        {
            id: 3,
            image: "https://cdn.fishtankadvisor.com/wp-content/uploads/2022/04/chocolate-gourami.jpeg",
            species: "Chocolate Gourami",
            length: 5,
            nickname: "Lil chocolat",
            harvestLocationId: 3,
            dietTypeId: 2
        },
        {
            id: 4,
            image: "https://cdn.fishtankadvisor.com/wp-content/uploads/2022/04/flowerhorn.jpeg",
            species: "Flowerhorn Cichlid",
            length: 14,
            nickname: "Lord Lumphead",
            harvestLocationId: 4,
            dietTypeId: 2
        },
        {
            id: 5,
            image: "https://cdn.fishtankadvisor.com/wp-content/uploads/2022/04/sphaerichthys-vaillanti.jpeg",
            species: "Samurai Gourami",
            length: 5,
            nickname: "Sam",
            harvestLocationId: 5,
            dietTypeId: 2
        },
        {
            id: 6,
            image: "https://cdn.fishtankadvisor.com/wp-content/uploads/2022/04/carnegiella-strigata.jpeg",
            species: "Marbled Hatchet Fish",
            length: 5,
            nickname: "Axe Man",
            harvestLocationId: 6,
            dietTypeId: 3
        },
        {
            id: 7,
            image: "https://cdn.fishtankadvisor.com/wp-content/uploads/2022/04/ropefish.jpeg",
            species: "Ropefish",
            length: 61,
            nickname: "Longboi",
            harvestLocationId: 7,
            dietTypeId: 3
        },
        {
            id: 8,
            image: "https://cdn.fishtankadvisor.com/wp-content/uploads/2022/04/gnathonemus-petersii.jpeg",
            species: "Elephant Nose Fish",
            length: 23,
            nickname: "Noseboi",
            harvestLocationId: 8,
            dietTypeId: 3
        },
        {
            id: 9,
            image: "https://cdn.fishtankadvisor.com/wp-content/uploads/2021/09/black-ghost-knifefish.jpg",
            species: "Black Ghost Knife Fish",
            length: 51,
            nickname: "Trouble",
            harvestLocationId: 9,
            dietTypeId: 3
        },
    ],
    fishFood: [
        {
            id: 1,
            diet: "Herbivore",
            food: "Vegetables"
        },
        {
            id: 2,
            diet: "Omnivore",
            food: "Vegetables/meat"
        },
        {
            id: 3,
            diet: "Carnivore",
            food: "Meat"
        }
    ]
}

const cmToInches = (cm) => {
    const lengthInInches = Math.ceil(cm / 2.54)
    return lengthInInches
}

for (const fishObject of fishData.fish) {
    fishObject.length = cmToInches(fishObject.length)
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fishObject of fishData.fish) {
        if ((fishObject.length % 3) === 0) {
            holyFish.push(fishObject)
        }
    }

    return holyFish.map(holyFish => ({...holyFish}))
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fishObject of fishData.fish) {
        if ((fishObject.length % 5) === 0) {
            soldiers.push(fishObject)
        }
    }

    return soldiers.map(soldiers => ({...soldiers}))
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fishObject of fishData.fish) {
        if ((fishObject.length % 3) !== 0 && (fishObject.length % 5) !== 0) {
            regularFish.push(fishObject)
        }
    }

    return regularFish.map(regularFish => ({...regularFish}))
}

/* export const getFish = () => {
    for (const fishObject of fishData.fish) {
        fishObject.length = cmToInches(fishObject.length)
    }
    return fishData.fish.map(fish => ({...fish}))
} */

export const getFood = () => {
    return fishData.fishFood.map(fishFood => ({...fishFood}))
}