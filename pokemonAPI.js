
//* DOM variables of the index html page:
const button = document.querySelector("button");
const pokemon = document.querySelector("img");

//* an event listener to send an API request an async function to fetch the DATA:
button.addEventListener("click", async () => {
    const value = await apiRequest();
    console.log(value);
    pokemon.src = value;
});

//* variable to randomize the original 151 pokemon in order to fetch them through an API call:
const randomize = () => {
    return Math.floor(Math.random() * 151 + 1);
};

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

