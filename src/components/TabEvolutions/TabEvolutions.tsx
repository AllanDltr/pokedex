import axios from "axios"
import { useEffect, useState } from "react"
import "./TabEvolutions.css"
export const TabEvolutions = () => {
  const [pokemonEvolutionDatas, setPokemonEvolutionDatas] = useState<
  PkmnEvolutionDatas[]>([])
  const pathURL = window.location.pathname
  const idURL = pathURL.substring(pathURL.lastIndexOf("/") + 1)
  const idURL2 = parseInt(idURL) + 1

  type PkmnEvolutionDatas = {
    evolutionLvl1: number
    evolutionLvl2: number
  }

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/evolution-chain/${idURL}`)
      .then((response) => {
        const pokemonEvolution: PkmnEvolutionDatas = {
          evolutionLvl1: response.data.chain.evolves_to[0].evolution_details[0].min_level,
          evolutionLvl2: response.data.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level,
        }
        setPokemonEvolutionDatas([pokemonEvolution])
        // console.log(pokemonEvolutionDatas.map((pokemonEvo: PkmnEvolutionDatas) => pokemonEvo.evolutionLvl2))
        // console.log(pokemonEvolutionDatas)
      })
      .catch((error) => console.log(error))
  },[] )

  return (
    <div className="tab-content tabEvolutions">
      <p className="text-xl font-bold m-4"> Evolution List </p>
      {pokemonEvolutionDatas.map((pokemonEvo: PkmnEvolutionDatas, index:number) => (
        <div className="flex justify-center m-7" key={index}>
        <div className="avatar">
          <div className="w-24 rounded-full evolutionPkmn">
            <img src={`/img/${idURL}.png`} />
          </div>
        </div>
        <div className="flex items-center px-10 arrowEvo">
          <div> {"->"} </div>
          <div> Lvl {pokemonEvo.evolutionLvl1} </div>
        </div>
        <div className="avatar ">
          <div className="w-24 rounded-full evolutionPkmn">
            <img src={`/img/${idURL2}.png`} />
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}
