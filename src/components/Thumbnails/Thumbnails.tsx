import { pokemonDatas } from "../../datas/pokemons"
import { useNavigate } from "react-router-dom"
import "./Thumbnails.css"
import type { Pokemon } from "../../datas/functions"
import { pokemonData } from "../../datas/functions"

export const Thumbnails = () => {
  const navigate = useNavigate()
  const pokemons = pokemonDatas

  return (
    <div className="grid grid-cols-2 gap-10">
      {pokemons.map((pokemon: Pokemon) => (
        <div
          className="card w-80 bg-base-100 shadow-xl image-full my-5"
          key={pokemon.name}
        >
          <figure>
            <img src={pokemonData.sprites} alt={pokemon.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{pokemon.name}</h2>
            <p className="types"> {pokemonData.types[0]} </p>
            <p className="types"> {pokemonData.types[1]} </p>
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
