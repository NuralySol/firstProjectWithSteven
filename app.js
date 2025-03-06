//! Async programming: exercise in async programming!

//* first function to run:
console.log("Hello World 1");

// queuing the callback for 1000 miliseconds:
//* third function tor run:
setTimeout(function () {
    console.log("Hello World 2");
}, 1000); // give it the time out of 1000 milliseconds and if you give 0 it will still execute similarly:

//* second function to run:
console.log("Hello World 3");

//! global object 
const animalsJSON = `[
    { "eng": "rat", "chi": "shu", "pin": "la&#780;oshu&#780;", "year": 2020 },
    { "eng": "cow", "chi": "niu", "pin": "niu&#769;", "year": 2021 },
    { "eng": "tiger", "chi": "hu", "pin": "la&#780;ohu&#780;", "year": 2022 },
    { "eng": "rabbit", "chi": "tu", "pin": "tu&#768;zi", "year": 2023 },
    { "eng": "dragon", "chi": "long", "pin": "lo&#769;ng", "year": 2024 },
    { "eng": "snake", "chi": "she", "pin": "she&#769;", "year": 2025 },
    { "eng": "horse", "chi": "ma", "pin": "ma&#780;", "year": 2026 },
    { "eng": "goat", "chi": "yang", "pin": "ya&#769;ng", "year": 2027 },
    { "eng": "monkey", "chi": "hou", "pin": "ho&#769;uzi", "year": 2028 },
    { "eng": "chicken", "chi": "ji", "pin": "ji&#772;", "year": 2029 },
    { "eng": "dog", "chi": "gou", "pin": "gou&#780;", "year": 2030 },
    { "eng": "pig", "chi": "zhu", "pin": "zhu&#772;", "year": 2031 }
    ]`;

console.log(animalsJSON);

let animals = JSON.parse(animalsJSON);
console.log("parsing the data string to regular: ", animals);

console.log(animals[2]);
let newAnimal = JSON.stringify(animals);
console.log("Stringified from an array of object: ", newAnimal);

const animalsJSONObj = `{
    "rat": { "chi": "shu", "pin": "la&#780;oshu&#780;", "year": 2020 },
    "cow": {"chi": "niu", "pin": "niu&#769;", "year": 2021 },
    "tiger": {"chi": "hu", "pin": "la&#780;ohu&#780;", "year": 2022 },
    "rabbit": {"chi": "tu", "pin": "tu&#768;zi", "year": 2023 },
    "dragon": {"chi": "long", "pin": "lo&#769;ng", "year": 2024 },
    "snake": {"chi": "she", "pin": "she&#769;", "year": 2025 },
    "horse": {"chi": "ma", "pin": "ma&#780;", "year": 2026 },
    "goat": {"chi": "yang", "pin": "ya&#769;ng", "year": 2027 },
    "monkey": {"chi": "hou", "pin": "ho&#769;uzi", "year": 2028 },
    "chicken": {"chi": "ji", "pin": "ji&#772;", "year": 2029 },
    "dog": {"chi": "gou", "pin": "gou&#780;", "year": 2030 },
    "pig": {"chi": "zhu", "pin": "zhu&#772;", "year": 2031 }
    }`;

console.log(animalsJSONObj);
const animalsData = JSON.parse(animalsJSONObj);
console.log("Animals data parsed: ", animalsData);

const chickenData = animalsData.chicken // get the key of the chichen:
console.log("Chicken Data: ", chickenData);
console.log("which is the year of the chichen: ", chickenData.year);

const getAnimals = (animalsData) => {
    // store an empty array to hold the values:
    const result = [];

    for (let animal in animalsData) {
        console.log(animal);
        result.push(animalsData[animal]);
    }
    return result;
}

const animalsThatExist = getAnimals(animalsData);
console.log(animalsThatExist);
console.log(typeof animalsData);
console.log(Object.keys(animalsData)); // .keys(Obj) this method gets the keys of the objects:



//! async function to fetch data over the data:
const pokemonEndpoint = "https://pokeapi.co/api/v2/pokemon/pikachu"

async function fetchData() {
    try {
        // provide the variable for endpoint of the pokemon and in this case it is pikachu:
        const response = await fetch(pokemonEndpoint);
        const data = await response.json();
        //* get the data of the Pokemon API call fetch:
        console.log("Pokémon Data:", data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
// call the function and get the data in Fetch:
fetchData()
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Caught error:', error));

