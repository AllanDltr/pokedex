import axios from "axios"
import { useEffect, useState } from "react"
import { pokemonData } from "../../datas/functions"
import "./TabEvolutions.css"
export const TabEvolutions = () => {
  const [pokemonEvolutionDatas, setPokemonEvolutionDatas] = useState<PkmnEvolutionDatas>({
    evolutionLvl: 0,
    // evolution2: 0,
  })
  const pathURL = window.location.pathname
  const idURL = pathURL.substring(pathURL.lastIndexOf("/") + 1)

  type PkmnEvolutionDatas = {
    evolutionLvl: number
    // evolution2: number
  }

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/evolution-chain/${idURL}`)
      .then((response) => {
        console.log(response.data)
        const pokemonEvolution: PkmnEvolutionDatas = {
          evolutionLvl: response.data.chain.evolves_to[0].evolution_details[0].min_level
          // evolution2: response.data.species.evolution_chain.url,
        }
        setPokemonEvolutionDatas(pokemonEvolution)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="tab-content tabEvolutions">
      <p className="text-xl font-bold m-4"> Evolution List </p>
      {/* 1ère évo */}
      <div className="flex justify-center m-7">
        <div className="avatar ">
          <div className="w-24 rounded-full evolutionPkmn">
            <img src={"/img/1.png"} />
          </div>
        </div>
        <div className="flex items-center px-10 arrowEvo">
          <div> {"->"} </div>
          <div> Lvl {pokemonEvolutionDatas.evolutionLvl} </div>
        </div>
        <div className="avatar ">
          <div className="w-24 rounded-full evolutionPkmn">
            <img src={"/img/2.png"} />
          </div>
        </div>
      </div>
      {/* Fin 1ère évo */}
      {/* 2ème évo */}
      <div className="flex justify-center m-7">
        <div className="avatar ">
          <div className="w-24 rounded-full evolutionPkmn">
            <img src={"/img/2.png"} />
          </div>
        </div>
        <div className="flex items-center px-10 arrowEvo">
          <div> {"->"} </div>
          <div> Lvl {pokemonData.evolution2} </div>
        </div>
        <div className="avatar ">
          <div className="w-24 rounded-full evolutionPkmn">
            <img src={"img/3.png"} />
          </div>
        </div>
      </div>
    </div>
  )
}
