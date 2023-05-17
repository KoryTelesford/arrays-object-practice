const firstProbl = () => {
    const arr = [1,2,3];

    let firstVal = arr[0];
    let secondVal = arr[1];
    let thirdVal = arr[2];

    console.log(secondVal);
}

firstProbl();

const secondProb = () => {
    const person = {
        name: 'John',
        age: 30,
        city: 'New York'
      };
    
    let personName = person.name;
    let personCity = person.city;

    console.log(personName, personCity);
}

secondProb();

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022
  };


const thirdProb = () => {
    const keysArray = Object.keys(car);

    console.log(keysArray);
}

thirdProb();

const fourthProb = () => {
    const valuesArray = Object.values(car);

    console.log(valuesArray);
}

fourthProb();

const fifthProb = () => {
    let entriesArray = Object.entries(car);

    console.log(entriesArray);
}

fifthProb();