// Import the FishList function from the correct module
import { TipsList } from './tips/TipList.js'
import { FishList } from './fish/FishList.js'
import { LocationList } from './locations/LocationList.js'
import { QuoteList } from './quotes/QuoteList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const tipHTMLElement = document.querySelector("#tipSectionAsideScript")
const fishHTMLElement = document.querySelector("#fishSectionScript")
const quoteHTMLElement = document.querySelector("#quoteSectionScript")
const locationHTMLElement = document.querySelector("#locationSectionScript")

tipHTMLElement.innerHTML = TipsList()
fishHTMLElement.innerHTML = FishList()
quoteHTMLElement.innerHTML = QuoteList()
locationHTMLElement.innerHTML = LocationList()