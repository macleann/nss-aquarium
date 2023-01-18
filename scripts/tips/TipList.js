import { CleaningSteps } from "./TipsDatabase.js"
import { PrecautionsList } from "./TipsDatabase.js"

export const TipsList = () => {
    const cleaningStepVar = CleaningSteps()
    const precautionListVar = PrecautionsList()

    let tipHTMLString = `
    <section class="asideSection">
        <aside>
            <h2 class="asideTitle">Fish Tank Care</h2>
            <h4>How to clean your fish tank</h4>`

    for (const cleaningStep of cleaningStepVar) {
        tipHTMLString +=
            `${cleaningStep.stepText}`
    }

    for (const precaution of precautionListVar) {
        tipHTMLString +=
            `${precaution.precautionText}`
    }

    tipHTMLString += `
            <h4>Water Temperature</h4>
            <p>Most tank fish do well at temperatures from 75-80 degrees Fahrenheit (23-27 degrees Celsius), but the needs of specific fish can vary. If your tank is home to just one or two types of fish, it is best to investigate their preferred temperature range and take steps to keep your tank in the middle of that range.</p>
            <h4>Water Salinity</h4>
            <p>For most fish, you want about 0.3% or 3 grams per liter or 12 grams per gallon of aquarium water. For comparison, seawater, for example, has on average 32 to 34 grams of salt per liter (128 to 136 grams per gallons) of water. A LEVEL half-teaspoon of normal aquarium salt weighs 2.5 grams.</p>
        </aside>
    </section>`

    return tipHTMLString
}