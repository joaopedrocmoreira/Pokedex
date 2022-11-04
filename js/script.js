const pokemonnumero = document.querySelector('.pokemon_numero');
const pokemonnome = document.querySelector('.pokemon_nome');
const pokemonimagem = document.querySelector('.pokemon_imagem');
const botaoantes = document.querySelector('.btn-ante');
const botaoprox = document.querySelector('.btn-prox');


const form = document.querySelector('.form');
const input = document.querySelector('.input_pesquisa');

let pesquisapokemon = 1;

const buscapokemon = async (pokemon)=>{
    const respostaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

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
    pesquisapokemon = dados.id;
    }else {
        pokemonimagem.style.display = 'none';
        pokemonnome.innerHTML = 'Nao encontrado :c';
        pokemonnumero.innerHTML = '';
    }
 
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    renderpokemon(input.value.toLowerCase());
})

botaoantes.addEventListener('click', ()=>{
 
    if(pesquisapokemon > 1){
    pesquisapokemon -=1;
    renderpokemon(pesquisapokemon);
    }
});

botaoprox.addEventListener('click', ()=>{
    pesquisapokemon +=1;
    renderpokemon(pesquisapokemon);
});
renderpokemon(pesquisapokemon);