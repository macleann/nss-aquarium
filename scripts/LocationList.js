import { getLocations } from './database.js'

export const LocationList = () => {
    const locations = getLocations()

    let htmlString = 
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
        htmlString += 
                `<section class="locationEntry">
                    <section class="locationEntryFlex">
                        <img src="${locations[i].image}" alt="${locations[i].location}">
                        <section class="locationInfoColumn">
                            <p>${locations[i].location}</p>
                            <p>${locations[i].country}</p>
                            <p>${locations[i].date}</p>
                        </section>
                    </section>
                </section>`
    }

    htmlString += 
            `</section>
            <section class="locationEntriesRight">`

    for (let i = 5; i < locations.length; i++) {
        htmlString +=
                `<section class="locationEntry">
                    <section class="locationEntryFlex">
                        <img src="${locations[i].image}" alt="${locations[i].location}">
                        <section class="locationInfoColumn">
                            <p>${locations[i].location}</p>
                            <p>${locations[i].country}</p>
                            <p>${locations[i].date}</p>
                        </section>
                    </section>
                </section>`
    }

    htmlString +=
            `</section>
        </section>`
    
    return htmlString
}