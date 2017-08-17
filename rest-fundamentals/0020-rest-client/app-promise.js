const pokemonList = document.getElementById('pokemons');

(function() {
fetch('http://pokeapi.co/api/v2/pokemon/').then(response => {
  response.json().then(pokelist => {
    let html = '';
    for (const pokemon of pokelist.results) {
      html += `<li>${pokemon.name}</li>`
    }

    pokemonList.innerHTML = html;
  });
});
})();