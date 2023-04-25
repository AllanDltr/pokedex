import { pokemonDatas, bulbasaurDatas } from "../../datas/pokemons"
import { useNavigate } from "react-router-dom"
import "./Thumbnails.css"

{
  /* 
This code displays a list of pokemon.
It uses the map function to iterate over an array of pokemon and display them
using a card component. 
The card component takes a pokemon object as a prop.
*/
}
type Pokemon = {
  name?: string
}

export const Thumbnails = () => {
  const navigate = useNavigate()
  const pokemons = pokemonDatas
  const [types1, types2] = [bulbasaurDatas[0].types[0].type.name, bulbasaurDatas[0].types[1].type.name]
  const [sprites] = [bulbasaurDatas[0].sprites.front_default]

  return (
    <div className="grid grid-cols-2 gap-10">
      {pokemons.map((pokemon: Pokemon) => (
        <div
          className="card w-80 bg-base-100 shadow-xl image-full my-5"
          key={pokemon.name}
        >
          <figure>
            <img src={sprites} alt={pokemon.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{pokemon.name}</h2>
            <p className="types"> {types1} </p>
            <p className="types"> {types2} </p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => navigate(`/pokedex/${pokemon.name}`)}
              >
                Check it
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
