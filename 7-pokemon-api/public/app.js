fetchPokemon()

document.querySelector('#search').addEventListener('click', () => {
  fetchPokemon()
})

async function fetchPokemon() {
  let input = document.querySelector('#name').value
  const res = await fetch(`/api/pokemon?name=${input}`);
  let data = await res.json();

  document.querySelector('#experience').addEventListener('click', () => {
    let minWeight = document.querySelector('#min-weight').value
    let maxWeight = document.querySelector('#max-weight').value
    console.log(minWeight);
    console.log(maxWeight);
    let data2 = data.filter(
      pokemon => pokemon.weight >= minWeight && pokemon.weight <= maxWeight
    )
    displayPokemon(data2)
  });

  displayPokemon(data)
  function displayPokemon(pokemons) {
    document.querySelector('#pokemon').innerHTML = `
          ${pokemons.map(pokemon => `
          <div class="wrapper"
          <div class="div">
          <h1>${pokemon.name}</h1>
           <img class="pokemon" src="https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg">
          </div>`).join('')}
          </div>`;
  }
}






