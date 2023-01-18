// Import the function that returns a copy of the fish array
import { mostHolyFish } from './FishDatabase.js'
import { soldierFish } from './FishDatabase.js'
import { nonHolyFish } from './FishDatabase.js'
import { getFood } from './FishDatabase.js'
import { getLocations } from '../locations/LocationsDatabase.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const firstFishes = mostHolyFish()
    const secondFishes = soldierFish()
    const thirdFishes = nonHolyFish()
    const fishFood = getFood()
    const locations = getLocations()

    const allFishesInOrder = []
    for (const fish of firstFishes) {
        allFishesInOrder.push(fish)
    }
    for (const fish of secondFishes) {
        allFishesInOrder.push(fish)
    }
    for (const fish of thirdFishes) {
        allFishesInOrder.push(fish)
    }

    // Start building a string filled with HTML syntax
    let fishHTMLString = 
    `<section class="fishSection">
        <h2>Fish</h2>`

    // Create HTML representations of each fish here
    for (const fish of allFishesInOrder) {

        for (const food of fishFood) {
            if (fish.dietTypeId === food.id) {
                fish.food = food.food
            }
        }

        for (const location of locations) {
            if (fish.harvestLocationId === location.id) {
                fish.harvestLocation = location.location
                fish.harvestCountry = location.country
            }
        }


        // Why is there a backtick used for this string?
        fishHTMLString += 
        `<section class="fishEntry">
            <div class="fishEntryDiv">
                <img src="${fish.image}" alt="Martin's ${fish.species}">
                <div class="fishInfoDiv">
                    <section>
                        <p>Species: ${fish.species}</p>
                        <p>Length: ${fish.length} inches</p>
                        <p>Name: ${fish.nickname}</p>
                        <p>Harvest Location: ${fish.harvestLocation}, ${fish.harvestCountry}</p>
                        <p>Diet: ${fish.food}</p>
                    </section>
                </div>
            </div>
        </section>`
    }
    
    fishHTMLString += 
    `</section>`

    return fishHTMLString
}