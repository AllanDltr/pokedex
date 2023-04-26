import { Tabs } from "../Tabs/Tabs"
import {TabAbout} from "../TabAbout/TabAbout"
import "./Cards.css"
import {pokemonData} from "../../datas/functions"


export const Cards = () => {
  return (
    <>
      <div className="flex justify-between w-screen">
        <p className="text-4xl font-bold m-4 pokemonName"> {pokemonData.name} </p>
        <p className="text-3xl font-bold m-4"> #{pokemonData.order} </p>
      </div>

      <div className="flex w-screen justify-start">
        <p className="m-4 p-1 border-solid border-black rounded typesPkmn">
          {" "}
          {pokemonData.types}{" "}
        </p>
        <p className="m-4 p-1 border-solid border-black rounded typesPkmn">
          {" "}
          {pokemonData.types}{" "}
        </p>
      </div>

      <div className="avatar flex justify-center avatarPkmn">
        <div className="w-24 rounded-full">
          <img src={pokemonData.sprites} />
        </div>
      </div>

      <Tabs/>

    <TabAbout/>

      <div className="tab-content flex flex-wrap justify-center tabStats">
        <div className="mb-5 flex items-center">
          <p className="pr-4"> HPs </p>
          <progress
            className="progress progress-primary w-56"
            value={pokemonData.HP}
            max="100"
          ></progress>
          <p className="pl-4"> {pokemonData.HP} </p>
        </div>
        <div className="mb-5 flex items-center">
          <p className="pr-4"> Atk </p>
          <progress
            className="progress progress-primary w-56"
            value={pokemonData.Atk}
            max="100"
          ></progress>
          <p className="pl-4"> {pokemonData.Atk} </p>
        </div>
        <div className="mb-5 flex items-center">
          <p className="pr-4"> Def </p>
          <progress
            className="progress progress-primary w-56"
            value={pokemonData.Def}
            max="100"
          ></progress>
          <p className="pl-4"> {pokemonData.Def} </p>
        </div>
        <div className="mb-5 flex items-center">
          <p className="pr-4"> ASp </p>
          <progress
            className="progress progress-primary w-56"
            value={pokemonData.AtkSp}
            max="100"
          ></progress>
          <p className="pl-4"> {pokemonData.AtkSp} </p>
        </div>
        <div className="mb-5 flex items-center">
          <p className="pr-4"> DSp </p>
          <progress
            className="progress progress-primary w-56"
            value={pokemonData.DefSp}
            max="100"
          ></progress>
          <p className="pl-4"> {pokemonData.DefSp} </p>
        </div>
        <div className="mb-5 flex items-center">
          <p className="pr-4"> Spd </p>
          <progress
            className="progress progress-primary w-56"
            value={pokemonData.Spd}
            max="100"
          ></progress>
          <p className="pl-4"> {pokemonData.Spd} </p>
        </div>
      </div>

      <div className="tab-content tabEvolutions">
        <p className="text-xl font-bold m-4"> Evolution List </p>
        <div className="flex justify-center">
          <div className="avatar ">
            <div className="w-24 rounded-full evolutionPkmn">
              <img src={pokemonData.sprites} />
            </div>
          </div>
          <div className="flex items-center px-10 arrowEvo">
            <p> {"->"} </p>
            <p> Lvl 16 </p>
          </div>
          <div className="avatar ">
            <div className="w-24 rounded-full evolutionPkmn">
              <img src={pokemonData.sprites} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
