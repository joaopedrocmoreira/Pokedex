const pokemonnome = document.querySelector('.pokemon_nome');

const buscapokemon = async (pokemon)=>{
    const respostaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const dados = await respostaAPI.json();
    return dados;

}

const renderpokemon = async (pokemon) => {

    const dados = await buscapokemon(pokemon);

    pokemonnome.innerHTML = dados.name;
    
}
renderpokemon('25')