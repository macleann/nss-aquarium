import { getLocations } from './LocationsDatabase.js'

export const LocationList = () => {
    const locations = getLocations()

    let locationHTMLString = 
    `<section class="locationSection">
        <section class="locationSectionTitle">
            <h2>Locations</h2>
        </section>
        <div>
            <iframe id="locationMap" src="https://www.google.com/maps/d/u/0/embed?mid=1u9RodWUsGPwAesw-m8mbslOhKGbWUtk&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
        <section class="locationEntries">
            <section class="locationEntriesLeft">`

    for (let i = 0; i < 5; i++) {
        locationHTMLString += 
                `<section class="locationEntry">
                    <section class="locationEntryFlex">
                        <img src="${locations[i].image}" alt="${locations[i].location}">
                        <section class="locationInfoColumn">
                            <p>${locations[i].location}, ${locations[i].country}</p>
                            <p>Date Visited: ${locations[i].date}</p>
                        </section>
                    </section>
                </section>`
    }

    locationHTMLString += 
            `</section>
            <section class="locationEntriesRight">`

    for (let j = 5; j < locations.length; j++) {
        locationHTMLString +=
                `<section class="locationEntry">
                    <section class="locationEntryFlex">
                        <img src="${locations[j].image}" alt="${locations[j].location}">
                        <section class="locationInfoColumn">
                            <p>${locations[j].location}, ${locations[j].country}</p>
                            <p>Date Visited: ${locations[j].date}</p>
                        </section>
                    </section>
                </section>`
    }

    locationHTMLString +=
            `</section>
        </section>`
    
    return locationHTMLString
}