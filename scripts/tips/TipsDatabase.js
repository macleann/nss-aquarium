const tips = {
    tankCleaningSteps: [
        {
            stepId: 1,
            stepText: `<p><b>Before you begin.</b> It's best to keep your fish in the fish tank when you clean. Removing them causes unnecessary stress for your fish, and you run the risk of accidentally hurting them. It is possible to keep your fish in the tank while you clean because you don't need to remove all the water to clean the tank properly.</p>
            <p>Completely replacing the water in the fish tank is a bad idea because it will remove beneficial bacteria that live in the tank and reset the nitrogen cycle, which could kill your fish. If you regularly clean your tank, doing a partial water change is the best option.</p>
            <p>Also, when you prepare to clean your fish tank, it's ok to leave plants and decorations in place. These only need to be cleaned when they begin to look dirty.</p>`
        },
        {
            stepId: 2,
            stepText: `<p><b>Start with the sides.</b> To begin cleaning your fish tank, start by unplugging the heater and filter. You can then scrape algae off the sides of the tank. If the sides of your tank are made with acrylic instead of glass, it's recommended to use a plastic (rather than metal) scraper.</p>`
        },
        {
            stepId: 3,
            stepText: `<p><b>Clean the gravel.</b> After you finish cleaning the sides, you can start with the gravel. You can use a siphon to vacuum dirt and other gunk off of the gravel. You can also use the siphon to remove a portion of the tank's dirty water. Remember to keep at least 50% of the water in the tank at all times in order to avoid removing all of the beneficial bacteria from the tank.</p>`
        },
        {
            stepId: 4,
            stepText: `<p><b>Finish the cleaning.</b> After you've finished cleaning your tank, you can refill the tank with new water. Make sure the new water you put in the tank has already had the chlorine removed using a conditioning treatment. This is the only time you should add water to the fish tank.</p>`
        },
        {
            stepId: 5,
            stepText: `<p><b>Clean plants, rocks, and decorations.</b> Occasionally, when plants, rocks, or decorations become visibly dirty, you will want to clean them. Remove these items from the tank and scrub them under running water or leave them to soak in water overnight. After they are clean you may carefully replace them in the fish tank.</p>
            <p>You <i>never</i> want to use any kind of soap when you clean your fish tank. It can kill your fish.</p>`
        }
    ],
    precautionList: [
        {
            precautionId: 1,
            precautionText: `<p>How often you will need to clean your fish tank depends on your aquarium's size, the number of fish, the types of fish, and the filtration system you have.</p>`
        },
        {
            precautionId: 2,
            precautionText: `<p>There is no need to clean your fish tank every day, unless you see the fish behaving strangely (gasping for air or acting sluggish). If you see your fish not acting right, consider doing a partial water change.</p>`
        },
        {
            precautionId: 3,
            precautionText: `<p>If you have an average-sized fish tank or large fish tank, weekly partial water changes can be very helpful in maintaining the cleanliness of the tank and the health of your fish. To do this, follow the steps above.</p>`
        },
        {
            precautionId: 4,
            precautionText: `<p>It's also important to keep an eye on the pH, nitrate, and ammonia levels in your fish tank. It can be helpful to keep notes of each of these levels so you can track them and make sure they stay consistent over time. A level that is too high or too low for what is normal may indicate a problem and lead to health issues for your fish or cloudy water in your tank.</p>`
        },
        {
            precautionId: 5,
            precautionText: `<p>Here are some general rules to help you determine how often to clean your fish tank:</p>
            <ul>
                <li>Watch your fish to make sure they're behaving normally and aren't gasping for air. If they are, it could be a sign that you need to do a partial water change.</li>
                <li>Fish depend on you for their survival and happiness. Spend time watching them and getting to know their routine. </li>
                <li>If the water in your fish tank appears cloudy, it is an indicator of water problems and should be addressed with a partial water change right away.</li>
                <li>Watch for water evaporation.</li>
                <li>It's helpful to examine all of the equipment in your fish tank twice a year to ensure the filters, pumps, and lights are in good condition.</li>
            </ul>`
        },
        
    ]
}

export const CleaningSteps = () => {
    return tips.tankCleaningSteps.map(tankCleaningSteps => ({...tankCleaningSteps}))
}

export const PrecautionsList = () => {
    return tips.precautionList.map(precautionList => ({...precautionList}))
}