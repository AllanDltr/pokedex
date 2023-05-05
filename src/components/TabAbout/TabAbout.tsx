import axios from "axios"
import { useEffect, useState } from "react"
import { pokemonData } from "../../datas/functions"
import "./TabAbout.css"
export const TabAbout = () => {
  const [pokemonDetailsAboutDatas, setPokemonDetailsAboutDatas] = useState<PkmnAboutDatas>(
    {height: 0, weight: 0}
  )

 type PkmnAboutDatas = {
  height: number
  weight: number
 }

  useEffect(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/1`)
        .then((response) => {
          const pokemonDetailsAbout:PkmnAboutDatas = {
            height: response.data.height,
            weight: response.data.weight,
          }
          setPokemonDetailsAboutDatas(pokemonDetailsAbout)
        })
        .catch((error) => console.log(error))
  },[])

  const heightCm = (pokemonData.height * 2.54).toFixed(1)
  const weightKg = (pokemonData.weight / 2.205).toFixed(1)
  return (
    <div className="tab-content tabAbout">
      <p className="text-xl font-bold m-4"> Description </p>

      <p className="m-4 text-m"> {pokemonData.description}</p>
      <div className="stats-sm mx-2 rounded-lg statsPkmn">
        <div className="stat statPkmn">
          <div className="stat-title">Height</div>
          <div className="stat-value valuePkmn">
            {pokemonDetailsAboutDatas.height}" ({heightCm}cm)
          </div>
        </div>
        <div className="stat statPkmn">
          <div className="stat-title">Weight</div>
          <div className="stat-value valuePkmn">
            {pokemonDetailsAboutDatas.weight}Lbs ({weightKg}kg)
          </div>
        </div>
      </div>
      {/* <div className="text-m m-4">
      <p className="text-xl font-bold"> Shiny </p>
      <div className="avatarPkmn avatar flex justify-center mt-8" >
        <img src={pokemonData.spritesShiny} />
        </div>
        </div> */}
    </div>
  )
}
