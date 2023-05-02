import axios from 'axios';

export const instance= axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 1000,
});

export const APIrequests = {
    fetchKantoPokemonList: `https://pokeapi.co/api/v2/pokemon?limit=151`,
}

export const APIrequests2 = {
    fetchKantoPokemonDetails: `https://pokeapi.co/api/v2/pokemon/1`,
}