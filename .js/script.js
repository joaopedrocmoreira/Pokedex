const pokemonnumero = document.querySelector('.pokemon_numero');
const pokemonnome = document.querySelector('.pokemon_nome');
const pokemonimagem = document.querySelector('.pokemon_imagem');

const form = document.querySelector('.form');
const input = document.querySelector('.input_pesquisa');


const buscapokemon = async (pokemon)=>{
    const respostaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    if(respostaAPI.status == 200){
    const dados = await respostaAPI.json();
    return dados;
    }
}

const renderpokemon = async (pokemon) => {

    pokemonnome.innerHTML = 'buscando...';
    pokemonnumero.innerHTML = '';

    const dados = await buscapokemon(pokemon);

    if(dados){
    pokemonnome.innerHTML = dados.name;
    pokemonnumero.innerHTML = dados.id;
    pokemonimagem.src = dados['sprites']['versions']
    ['generation-v']['black-white']['animated']['front_default'];  
    input.value = '';
    }else {
        pokemonnome.innerHTML = 'Nao encontrado :c'
    }
 
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    renderpokemon(input.value);
})

renderpokemon('1');