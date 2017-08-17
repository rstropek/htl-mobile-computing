(async function() {
    const pokelist = await $.get('http://pokeapi.co/api/v2/pokemon/');

    let html = '';
    for(const pokemon of pokelist.results) {
        html += `<li>${pokemon.name}</li>`
    }

    $('#pokemons')[0].innerHTML = html;
})();