const locationQuotes = [
    {
        id: 1,
        quote: `Check out "Parrilla de Uvita"! I really enjoyed the fried plantains`
    },
    {
        id: 2,
        quote: `They said Lake Chad is extremely shallow, but I was surprised!`
    },
    {
        id: 3,
        quote: `The local coffee in Siberut is so fresh and delicious!`
    },
    {
        id: 4,
        quote: `Watch out for the geothermal vents in Xiloa Lagoon`
    },
    {
        id: 5,
        quote: `At Derawan Resort, you can choose the water villa and directly swim in front of your room`
    },
    {
        id: 6,
        quote: `Barcelos is a pleasant town tucked away in the Amazon Rainforest`
    },
    {
        id: 7,
        quote: `Lapar and Shiroro were the most difficult to reach locales I've ever visited, but the people were so, so friendly!`
    },
    {
        id: 8,
        quote: `Calm, warm water and nice vistas. Enjoy Carmen del Paraná before it gets more commercial`
    },
    
]

export const getQuotes = () => {
    return locationQuotes.map(locationQuotes => ({...locationQuotes}))
}