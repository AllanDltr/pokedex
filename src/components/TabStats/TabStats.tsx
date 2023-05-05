import axios from "axios"
import { useEffect, useState } from "react"
import "./TabStats.css"

export const TabStats = () => {
  const [pokemonDetailsStatsDatas, setPokemonDetailsStatsDatas] = useState<PkmnStatsDatas[]>(
    []
  )

 type PkmnStatsDatas = {
  HP: number
  Atk: number
  Def: number
  AtkSp: number
  DefSp: number
  Spd: number
 }

  useEffect(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/1`)
        .then((response) => {
          const pokemonStatsAbout:PkmnStatsDatas = {
            HP: response.data.stats[0].base_stat,
            Atk: response.data.stats[1].base_stat,
            Def: response.data.stats[2].base_stat,
            AtkSp: response.data.stats[3].base_stat,
            DefSp: response.data.stats[4].base_stat,
            Spd: response.data.stats[5].base_stat,
          }
          setPokemonDetailsStatsDatas([pokemonStatsAbout])
        })
        .catch((error) => console.log(error))
  },[])


  return (
    <>
      <div className="tab-content tabStats">
        <p className="text-xl font-bold m-4"> Base Stats </p>
        <div className="flex justify-center flex-wrap">
          <div className="mb-5 flex items-center">
            <p className="pr-4"> HPs </p>
            <progress
              className="progress progress-primary w-56"
              value={pokemonDetailsStatsDatas[0]?.HP ?? 0}
              max="255"
            ></progress>
            <p className="pl-4"> {pokemonDetailsStatsDatas[0]?.HP ?? 0} </p>
          </div>
          <div className="mb-5 flex items-center">
            <p className="pr-4"> Atk </p>
            <progress
              className="progress progress-primary w-56"
              value={pokemonDetailsStatsDatas[0]?.Atk ?? 0}
              max="255"
            ></progress>
            <p className="pl-4"> {pokemonDetailsStatsDatas[0]?.Atk ?? 0} </p>
          </div>
          <div className="mb-5 flex items-center">
            <p className="pr-4"> Def </p>
            <progress
              className="progress progress-primary w-56"
              value={pokemonDetailsStatsDatas[0]?.Def ?? 0}
              max="255"
            ></progress>
            <p className="pl-4"> {pokemonDetailsStatsDatas[0]?.Def ?? 0} </p>
          </div>
          <div className="mb-5 flex items-center">
            <p className="pr-4"> ASp </p>
            <progress
              className="progress progress-primary w-56"
              value={pokemonDetailsStatsDatas[0]?.AtkSp ?? 0}
              max="255"
            ></progress>
            <p className="pl-4"> {pokemonDetailsStatsDatas[0]?.AtkSp ?? 0} </p>
          </div>
          <div className="mb-5 flex items-center">
            <p className="pr-4"> DSp </p>
            <progress
              className="progress progress-primary w-56"
              value={pokemonDetailsStatsDatas[0]?.DefSp ?? 0}
              max="255"
            ></progress>
            <p className="pl-4"> {pokemonDetailsStatsDatas[0]?.DefSp ?? 0} </p>
          </div>
          <div className="mb-5 flex items-center">
            <p className="pr-4"> Spd </p>
            <progress
              className="progress progress-primary w-56"
              value={pokemonDetailsStatsDatas[0]?.Spd ?? 0}
              max="255"
            ></progress>
            <p className="pl-4"> {pokemonDetailsStatsDatas[0]?.Spd ?? 0} </p>
          </div>
        </div>
      </div>
    </>
  )
}
