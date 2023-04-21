// import {getPokemonList} from '../features/axios'
import {instance} from '../features/axios'
import { useEffect, useState } from 'react'
import { getPokemonNameById } from '../features/axios'
import {requests} from '../features/requests'

export const Pokedex = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchedPokemonList)
            console.log(requests.fetchedPokemonList)
            setPokemon(request.data.results);
            return request;
        }
        fetchData();
    }, [requests.fetchedPokemonList]);

    //     requests.fetchedPokemonList()
    //     .then((response:object) => {
    //         console.log(response)
    //     })
    //     .catch((error:string) => {
    //         console.log(error)
    //     })
    // }, [])

// (async () => {
//     const pokemonName = await getPokemonNameById(3)
//     console.log(pokemonName)
// })

// console.log(requests.fetchedPokemonList)


    return (
        <div>
            <h1>Pokedex</h1>
        </div>
    )


}