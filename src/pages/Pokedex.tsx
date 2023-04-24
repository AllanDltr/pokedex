import {pokemonDatas, bulbasaurDatas} from '../datas/pokemons'
import {useNavigate} from 'react-router-dom'
import './Pokedex.css'

export const Pokedex = () => {
    const navigate = useNavigate()
    const pokemons = pokemonDatas
    const bulbasaur = bulbasaurDatas[0].sprites.front_default
    const types = bulbasaurDatas[0].types
    type Pokemon = {
        name?:string;
        sprites?:string;
    }

    return (
        <>
{/* 
This code displays a list of pokemon.
It uses the map function to iterate over an array of pokemon and display them
using a card component. 
The card component takes a pokemon object as a prop.
*/}
        {pokemons.map(((pokemon:Pokemon) =>
            <div className="card w-80 bg-base-100 shadow-xl image-full my-5">
                <figure><img src={bulbasaur} alt={pokemon.name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{pokemon.name}</h2>
                    {types.map((type: string) => <p className="types"> {type.type.name} </p>)}
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary"
                            onClick={() => navigate(`/${pokemon.name}`)}>Check it</button> */}
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}