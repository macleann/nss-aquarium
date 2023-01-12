let animalArray = [
    { name: "Elephant", dietTypeID: 2 },
    { name: "Bear", dietTypeID: 1 },
    { name: "Tiger", dietTypeID: 1 }
  ];
  
  let foodArray = [
    {
      id: 1,
      dietType: "Carnivore",
      food: "Chicken"
    },
    {
      id: 2,
      dietType: "Herbivore",
      food: "Lettuce"
    }
  ]
  
  const animalSorting = (animalObject, number) => {
    //for (let animal of animalArray) {
    animalObject.holdingArea = number
    return animalObject
    //}
  }
  
  const weighAnimal = (animalObject, number) => {
    //for (let animalObjects of animalArray) {
    if (animalObject.holdingArea != null) {
      animalObject.weight = number
    }
    //}
    return animalObject
  }
  
  const feedAnimal = (animalObject) => {
    if (animalObject.weight != null) {
      animalObject.fed = true;
      if ((animalObject.dietTypeID = foodArray.id)) {
        animalObject.food = foodArray.food;
      }
    }
  }
  
  for (let animal of animalArray) {
    animalSorting(animal, Math.floor(Math.random() * 6))
    weighAnimal(animal, Math.floor(Math.random() * 200))
    feedAnimal(animal);
    console.log(animal);
  }