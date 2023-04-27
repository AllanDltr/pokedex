import { pokemonData } from "../../datas/functions"
import "./TabEvolutions.css"
export const TabEvolutions = () => {
  return (
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
  )
}
