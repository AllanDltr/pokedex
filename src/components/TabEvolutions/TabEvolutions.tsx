import { pokemonData } from "../../datas/functions"
import { bulbasaurDatas } from "../../datas/pokemons"
import "./TabEvolutions.css"
export const TabEvolutions = () => {
  return (
    <div className="tab-content tabEvolutions">
      <p className="text-xl font-bold m-4"> Evolution List </p>
      {/* 1ère évo */}
      <div className="flex justify-center m-7">
        <div className="avatar ">
          <div className="w-24 rounded-full evolutionPkmn">
            <img src={"../../public/img/1.png"} />
          </div>
        </div>
        <div className="flex items-center px-10 arrowEvo">
          <div> {"->"} </div>
          <div> Lvl {pokemonData.evolution} </div>
        </div>
        <div className="avatar ">
          <div className="w-24 rounded-full evolutionPkmn">
            <img src={"../../public/img/2.png"} />
          </div>
        </div>
      </div>
      {/* Fin 1ère évo */}
      {/* 2ème évo */}
      <div className="flex justify-center m-7">
        <div className="avatar ">
          <div className="w-24 rounded-full evolutionPkmn">
            <img src={"../../public/img/2.png"} />
          </div>
        </div>
        <div className="flex items-center px-10 arrowEvo">
          <div> {"->"} </div>
          <div> Lvl {pokemonData.evolution2} </div>
        </div>
        <div className="avatar ">
          <div className="w-24 rounded-full evolutionPkmn">
            <img src={"../../public/img/3.png"} />
          </div>
        </div>
      </div>

    </div>
  )
}
