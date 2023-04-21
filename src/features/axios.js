import axios from 'axios';
// import { MainClient } from 'pokenode-ts'

// const endpoint = 'https://pokeapi.salestock.net/api/v2';

export const instance= axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 1000,
});

// (async () => {
//     const api = new MainClient();

//     await api.pokemon
//     .getPokemonById(1)
//     .then((data) => console.log(data.name))
//     .catch((err) => console.log(err));
// })();

// export const getPokemonNameById = async (id) => {
//     const api = new MainClient();
  
//     try {
//       const pokemon = await api.pokemon.getPokemonById(id);
//       console.log(pokemon.name)
//       return pokemon.name;
//     } catch (error) {
//       console.log(error);
//       return '';
//     }
//   };


// export async function getPokemonList() {
//   const { pokemonData } = await axios.get(`${endpoint}/pokemon?limit=151/`);
//   return pokemonData;
// }