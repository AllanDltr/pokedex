import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Thumbnails.css"

type mapPkmnType = {
  name: string
  slot: number
  id: number
  types: string[]
  type: {
    name: string
    url: string
  }
}

export const Thumbnails = () => {
  const [pokemonDetailsDatas, setPokemonDetailsDatas] = useState<mapPkmnType[]>(
    []
  )
  const navigate = useNavigate()
  let counter = 1
  const sortedData = pokemonDetailsDatas.sort((a, b) => a.id - b.id)

  useEffect(() => {
    for (counter; counter <= 10; counter++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${counter}`)
        .then((response) => {
          const types = response.data.types.map(
            (type: mapPkmnType) => type.type.name
          )
          const pokemonDetails = {
            ...response.data.species,
            id: response.data.id,
            types: types,
          }
          setPokemonDetailsDatas((pokemonDetailsDatas) => [
            ...pokemonDetailsDatas,
            pokemonDetails,
          ])
        })
        .catch((error) => console.log(error))
    }
  }, [counter])

  return (
    <div className="grid grid-cols-2 gap-10">
      {sortedData.map((pokemon:mapPkmnType ) => (
        <div
          className="card bg-base-100 shadow-xl image-full thumbnailSize"
          key={pokemon.name}
          onClick={() => navigate(`/${pokemon.id}`)}
        >
          <figure>
            <img className="mb-2" src={`/img/${pokemon.id}.png`} alt={pokemon.name} />
          </figure>
          <div className="card-body bodySize">
            <h2 className="card-title">{pokemon.name}</h2>
            {pokemon.types.map((type:string) => (
              <p
                className="types"
                key={type}
                style={{ backgroundColor: `var(--${type})` }}
              >
                {type}
              </p>
            ))}
            <div className="card-actions justify-center">
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
