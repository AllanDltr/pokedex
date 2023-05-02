import { useEffect, useState } from "react"
import axios from "axios"
import { APIrequests, APIrequests2 } from "../../features/axios"
// import { pokemonDatas } from "../../datas/pokemons"
import { useNavigate } from "react-router-dom"
import "./Thumbnails.css"
import type { PokemonData } from "../../datas/functions"
import { pokemonData } from "../../datas/functions"
import { Loader } from "../Loader/Loader"

export const Thumbnails = () => {
  // const [pokemonsDatas, setPokemonsDatas] = useState<PokemonType[]>([])
  const [pokemonDetailsDatas, setPokemonDetailsDatas] = useState<PokemonData[]>(
    []
  )
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate()
  // setLoading(true)
  // useEffect(() => {
  //   axios
  //     .get(APIrequests.fetchKantoPokemonList)
  //     .then((response) => {
  //       const data = response.data.results
  //       setPokemonsDatas(data)
  //     })
  //     .catch((error) => console.log(error))
  // }, [])

  // console.log(pokemonData)
  // const A = {name: "Jean", age: 25}
  // const B = {city:"Paris", country: "France"}
  // const C = {...A, ...B}
  // console.log(C)
  useEffect(() => {
    axios
      .get(APIrequests2.fetchKantoPokemonDetails)
      .then((response) => {
        const dataDetails = response.data
        // console.log(dataDetails)
        setPokemonDetailsDatas(dataDetails)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  const pokemonsArray = Object.values(pokemonDetailsDatas)

  console.log(pokemonsArray[2])
  return (
    <div className="grid grid-cols-2 gap-10">
      {loading ? <Loader /> : null}
      {pokemonsArray.map((pokemon: PokemonData) => (
        <div
          className="card bg-base-100 shadow-xl image-full thumbnailSize"
          key={pokemon.name}
        >
          <figure>
            <img
              src={`/img/${pokemon.url.split("/")[6]}.png`}
              alt={pokemon.name}
            />
          </figure>
          <div className="card-body bodySize">
            <h2 className="card-title">{pokemon.name}</h2>
            <p
              className="types"
              style={{ backgroundColor: `var(--${pokemonData.types[0]})` }}
            >
              {" "}
              {pokemonData.types[0]}{" "}
            </p>
            <p
              className="types"
              style={{ backgroundColor: `var(--${pokemonData.types[1]})` }}
            >
              {" "}
              {pokemonData.types[1]}{" "}
            </p>
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
