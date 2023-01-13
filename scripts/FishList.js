// Import the function that returns a copy of the fish array
import { getFish } from './database.js'
import { getFood } from './database.js'
import { getLocations } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()
    const fishFood = getFood()
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = 
    `<section class="fishSection">
        <h2>Fish</h2>`

    // Create HTML representations of each fish here
    for (const fish of fishes) {

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
        htmlString += 
        `<section class="fishEntry">
            <div class="fishEntryDiv">
                <img src="${fish.image}" alt="Martin's ${fish.species}">
                <div class="fishInfoDiv">
                    <section>
                        <p>Species: ${fish.species}</p>
                        <p>Length: ${fish.length}</p>
                        <p>Name: ${fish.nickname}</p>
                        <p>Harvest Location: ${fish.harvestLocation}, ${fish.harvestCountry}</p>
                        <p>Diet: ${fish.food}</p>
                    </section>
                </div>
            </div>
        </section>`
    }
    htmlString += 
    `</section>`

    return htmlString
}