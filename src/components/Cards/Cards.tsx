import axios from "axios"
import { useEffect, useState } from "react"
import { TabAbout } from "../TabAbout/TabAbout"
import { TabEvolutions } from "../TabEvolutions/TabEvolutions"
import { TabStats } from "../TabStats/TabStats"
import "./Cards.css"

export const Cards = () => {
  const [pokemonCardsDatas, setpokemonCardsDatas] = useState<
    PokemonCardsDatas[]
  >([])
  const pathURL = window.location.pathname
  const idURL = pathURL.substring(pathURL.lastIndexOf("/") + 1)
  const [currentTab, setCurrentTab] = useState<
    "about" | "stats" | "evolutions"
  >("about")

  type PokemonCardsDatas = {
    name: string
    id: number
    type: string[]
  }

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${idURL}`)
      .then((response) => {
        const types = response.data.types.map(
          (type: { type: { name: string } }) => type.type.name
        )
        const pokemonCardsMain = {
          name: response.data.name,
          id: response.data.id,
          type: types,
        }
        setpokemonCardsDatas([pokemonCardsMain])
      })
      .catch((error) => console.log(error))
  })

  return (
    <>
      {pokemonCardsDatas[0] && (
        <div className="flex justify-between w-screen">
          <p className="text-4xl font-bold m-4 pokemonName">
            {" "}
            {pokemonCardsDatas[0].name}{" "}
          </p>
          <p className="text-3xl font-bold m-4"> #{pokemonCardsDatas[0].id} </p>
        </div>
      )}

      {pokemonCardsDatas[0] && (
        <div className="flex w-screen justify-start">
          {pokemonCardsDatas[0].type.map((type: string) => (
            <p
              className="m-4 border-solid border-white rounded-xl typesPkmn p-2 text-white"
              style={{ backgroundColor: `var(--${type})` }}
              key={type}
            >
              {type}
            </p>
          ))}
        </div>
      )}

      {pokemonCardsDatas[0] && (
        <div className="avatar flex justify-center avatarPkmn">
          <div>
            <img src={`/img/${pokemonCardsDatas[0].id}.png`} />
          </div>
        </div>
      )}

      <div className="tabs mb-8">
        <a
          className="tab tab-bordered w-1/3"
          onClick={() => setCurrentTab("about")}
        >
          About
        </a>
        <a
          className="tab tab-bordered w-1/3"
          onClick={() => setCurrentTab("stats")}
        >
          Base Stats
        </a>
        <a
          className="tab tab-bordered w-1/3"
          onClick={() => setCurrentTab("evolutions")}
        >
          Evolutions
        </a>
      </div>
      {currentTab === "about" && <TabAbout />}
      {currentTab === "stats" && <TabStats />}
      {currentTab === "evolutions" && <TabEvolutions />}
    </>
  )
}
