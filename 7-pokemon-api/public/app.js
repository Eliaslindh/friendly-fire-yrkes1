fetchPokemon()
async function fetchPokemon() {
  const res = await fetch('/api/pokemon');
  let pokemon = await res.json();
  displayPokemon(pokemon);
}

document.querySelector('#sort-by-name').addEventListener('click', () => {
  const sortNameInput = document.querySelector('#name');
  const sortName = sortNameInput.value.toLowerCase();

  const sortedPokemon = pokemon.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  displayPokemon(sortedPokemon);
});



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


