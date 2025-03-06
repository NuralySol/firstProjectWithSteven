//! Pokemon API call, and async function

// store the pokemons in the arrays:
const pokemon_team_state = [];
// an array to store the openents:
const oponent_team_state = [];

//* DOM variables of the index html page:
const button = document.querySelector("button");
const pokemon = document.querySelector("img");
const rock = document.querySelector("#stone"); // id -> #stone
const catchBtn = document.querySelector("#catch");
const team = document.querySelector(".team-container");
const oponent = document.querySelector(".oponent-container");

//* variable to randomize the original 151 pokemon in order to fetch them through an API call:
const randomize = () => {
    return Math.floor(Math.random() * 151 + 1);
};

//* an event listener to send an API request an async function to fetch the DATA:
button.addEventListener("click", async () => {
    const value = await apiRequest();
    console.log(value);
    pokemon.src = value;
});

//* an event listener for callback function 
rock.addEventListener("click", async () => {
    //* an alert to make sure the state of the opponents is full once it reaches 6 pokemon's in the array:
    if (oponent_team_state.length >= 6) {
        alert("Your opponent's team is full!");
        return;
    }

    const img = document.createElement('img');
    const value = await apiRequest();
    img.src = pokemon.src;
    console.log(val);
    
    oponent.append(img);
    oponent_team_state.push(pokemon.src);
    pokemon.src = value;
    
});

//* an event listener to store the pokemon
catchBtn.addEventListener("click", async () => {
    const value = await apiRequest();
    pokemon_team_state.push(pokemon.src);
     // boolean to check if team is full using the length property and alert method message:
    if (pokemon_team_state.length >= 7) {
        alert("Your team is full! You can only have 6 Pokémon.");
        return;
    }

    addPokemonDom();
    console.log(pokemon_team_state);
    pokemon.src = value;
    });

//* async function to send the request to get the random pokemon, uses a ternary operator for string value with the randomize function:
async function apiRequest() {
    try {
        const endpoint = `https://pokeapi.co/api/v2/pokemon/${randomize()}`;
        const request = await fetch(endpoint);
        const data = await request.json();
        return data.sprites.front_shiny;
    } catch (error) {
        console.error(error);
    }
}

//* push the pokemon to the DOM: Max pokemon count for the array to hold will be 6:
function addPokemonDom() {
    // clear the DOM so that it does not populate dom with the previous pokemon:
    team.innerHTML = "";
    // loop over the array and create a copy of it:
    pokemon_team_state.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        team.append(img);
    })
}

