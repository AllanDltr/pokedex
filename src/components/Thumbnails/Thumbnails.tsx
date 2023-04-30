import { pokemonDatas } from "../../datas/pokemons"
import { useNavigate } from "react-router-dom"
import "./Thumbnails.css"
import type { Pokemon } from "../../datas/functions"
import { pokemonData } from "../../datas/functions"

export const Thumbnails = () => {
  const navigate = useNavigate()
  const pokemons = pokemonDatas
  const id=pokemonDatas[0].url.split('/')[6]
  console.log(id)

  return (
    <div className="grid grid-cols-2 gap-10">
      {pokemons.map((pokemon: Pokemon) => (
        <div
          className="card bg-base-100 shadow-xl image-full thumbnailSize"
          key={pokemon.name}
        >
          <figure>
            <img src={`/img/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
          </figure>
          <div className="card-body bodySize">
            <h2 className="card-title">{pokemon.name}</h2>
            <p className="types" style={{backgroundColor: `var(--${pokemonData.types[0]})` }}> {pokemonData.types[0]} </p>
            <p className="types" style={{backgroundColor: `var(--${pokemonData.types[1]})` }}> {pokemonData.types[1]} </p>
            <div className="card-actions justify-center">
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => navigate(`/${pokemon.name}`)}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
