import { pokemonData } from "../../datas/functions"
import { TabAbout } from "../TabAbout/TabAbout"
import { TabStats } from "../TabStats/TabStats"
import { TabEvolutions } from "../TabEvolutions/TabEvolutions"
import "./Cards.css"
import { useState } from "react"

export const Cards = () => {
  const [currentTab, setCurrentTab] = useState<
    "about" | "stats" | "evolutions"
  >("about")

  return (
    <>
      <div className="flex justify-between w-screen">
        <p className="text-4xl font-bold m-4 pokemonName">
          {" "}
          {pokemonData.name}{" "}
        </p>
        <p className="text-3xl font-bold m-4"> #{pokemonData.order} </p>
      </div>

      <div className="flex w-screen justify-start">
        {pokemonData.types.map((type) => (
          <p className="m-4 p-1 border-solid border-white rounded-xl typesPkmn" style={{backgroundColor: `var(--${type})` }}   key={type}>
            {type}
          </p>
        ))}
      </div>

      <div className="avatar flex justify-center avatarPkmn">
        <div>
          <img src={`../../public/img/${pokemonData.order}.png`} />
        </div>
      </div>

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
