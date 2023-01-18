const harvestLocations = [
    {
        id: 1,
        image: "https://news.co.cr/wp-content/uploads/2017/03/UvitaIsland.jpg",
        location: "Uvita Island",
        country: "Costa, Rica",
        date: "12/16/2016",
        quoteId: 1
    },
    {
        id: 2,
        image: "https://images.theconversation.com/files/407243/original/file-20210618-20-q2yfyr.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
        location: "Lake Chad",
        country: "Cameroon",
        date: "4/13/2018",
        quoteId: 2
    },
    {
        id: 3,
        image: "https://en.unesco.org/sites/default/files/cover_siberut_biosphere_reserve_indonesia_unesco.jpg",
        location: "Siberut Island",
        country: "Indonesia",
        date: "8/2/2017",
        quoteId: 3
    },
    {
        id: 4,
        image: "https://stophavingaboringlife.com/wp-content/uploads/2013/05/swimming_xiloa_lagoon.jpg",
        location: "Xiloa Lagoon",
        country: "Nicaragua",
        date: "12/22/2016",
        quoteId: 4
    },
    {
        id: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Derawan_Island_East_Kalimantan.jpg",
        location: "Derawan Islands",
        country: "Indonesia",
        date: "8/7/2017",
        quoteId: 5
    },
    {
        id: 6,
        image: "https://www.brol.com/wp-content/uploads/2019/07/Serra-do-Arac%C3%A1-State-Park.jpg",
        location: "Barcelos",
        country: "Brazil",
        date: "6/20/2019",
        quoteId: 6
    },
    {
        id: 7,
        image: "https://nigerianinfopedia.com.ng/wp-content/uploads/2019/10/river-niger.jpg",
        location: "Lapar",
        country: "Nigeria",
        date: "5/4/2018",
        quoteId: 7
    },
    {
        id: 8,
        image: "https://thedailysblog.com/wp-content/uploads/2020/05/20-Major-Rivers-In-Nigeria-And-Their-Locations-1.jpeg",
        location: "Shiroro",
        country: "Nigeria",
        date: "5/7/2018",
        quoteId: 7
    },
    {
        id: 9,
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d3/bb/b4/playa-tacuary.jpg?w=700&h=500&s=1",
        location: "Carmen del Paraná",
        country: "Paraguay",
        date: "7/1/2019",
        quoteId: 8
    }   
]

export const getLocations = () => {
    return harvestLocations.map(harvestLocations => ({...harvestLocations}))
}