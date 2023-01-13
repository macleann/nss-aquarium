/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

/* 
Fish properties:
    id:
    image:
    species:
    length:
    nickname:
    harvest location:
    diet type id:
Fish Food properties:
    id:
    diet:
    food:
Location properties:
    id:
    image: 
    harvest location:
    country:
    date harvested:
*/

const database = {
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
            harvestLocationId: "Carmen del Paraná, Paraguay",
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
    ],
    harvestLocations: [
        {
            id: 1,
            image: "https://news.co.cr/wp-content/uploads/2017/03/UvitaIsland.jpg",
            location: "Uvita Island",
            country: "Costa, Rica",
            date: "12/16/2016"
        },
        {
            id: 2,
            image: "https://images.theconversation.com/files/407243/original/file-20210618-20-q2yfyr.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
            location: "Lake Chad",
            country: "Cameroon",
            date: "4/13/2018"
        },
        {
            id: 3,
            image: "https://en.unesco.org/sites/default/files/cover_siberut_biosphere_reserve_indonesia_unesco.jpg",
            location: "Siberut Island",
            country: "Indonesia",
            date: "8/2/2017"
        },
        {
            id: 4,
            image: "https://stophavingaboringlife.com/wp-content/uploads/2013/05/swimming_xiloa_lagoon.jpg",
            location: "Xiloa Lagoon",
            country: "Nicaragua",
            date: "12/22/2016"
        },
        {
            id: 5,
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Derawan_Island_East_Kalimantan.jpg",
            location: "Derawan Islands",
            country: "Indonesia",
            date: "8/7/2017"
        },
        {
            id: 6,
            image: "https://www.brol.com/wp-content/uploads/2019/07/Serra-do-Arac%C3%A1-State-Park.jpg",
            location: "Barcelos",
            country: "Brazil",
            date: "6/20/2019"
        },
        {
            id: 7,
            image: "https://nigerianinfopedia.com.ng/wp-content/uploads/2019/10/river-niger.jpg",
            location: "Lapar",
            country: "Nigeria",
            date: "5/4/2018"
        },
        {
            id: 8,
            image: "https://thedailysblog.com/wp-content/uploads/2020/05/20-Major-Rivers-In-Nigeria-And-Their-Locations-1.jpeg",
            location: "Shiroro",
            country: "Nigeria",
            date: "5/7/2018"
        },
        {
            id: 9,
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d3/bb/b4/playa-tacuary.jpg?w=700&h=500&s=1",
            location: "Carmen del Paraná",
            country: "Paraguay",
            date: "7/1/2019"
        }   
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}