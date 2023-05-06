import axios from "axios"
import { useEffect, useState } from "react"
import "./TabAbout.css"
export const TabAbout = () => {
  const [pokemonDescriptionAboutDatas, setPokemonDescriptionAboutDatas] =useState<PkmnDescriptionDatas>({ description: "" })
  const [pokemonDetailsAboutDatas, setPokemonDetailsAboutDatas] =
    useState<PkmnAboutDatas>({ height: 0, weight: 0 })
  const pathURL = window.location.pathname
  const idURL = pathURL.substring(pathURL.lastIndexOf("/") + 1)
  type PkmnAboutDatas = {
    height: number
    weight: number
  }
  type PkmnDescriptionDatas = {
    description: string
  }

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${idURL}`)
      .then((response) => {
        const pokemonDetailsAbout: PkmnAboutDatas = {
          height: response.data.height,
          weight: response.data.weight,
        }
        setPokemonDetailsAboutDatas(pokemonDetailsAbout)
      })
      .catch((error) => console.log(error))
  }, [])


  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${idURL}`)
      .then((response) => {
        const pokemonDescriptionAbout: PkmnDescriptionDatas = {
          description: response.data.flavor_text_entries[0].flavor_text,
        }
        setPokemonDescriptionAboutDatas(pokemonDescriptionAbout)
      })
      .catch((error) => console.log(error))
  }, [])

  const heightCm = (pokemonDetailsAboutDatas.height * 2.54).toFixed(1)
  const weightKg = (pokemonDetailsAboutDatas.weight / 2.205).toFixed(1)
  return (
    <div className="tab-content tabAbout">
      <p className="text-xl font-bold m-4"> Description </p>

      <p className="m-4 text-m"> {pokemonDescriptionAboutDatas.description}</p>
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
