import {pokemonData} from "../../datas/functions"

export const TabAbout = () => {
    const heightCm = (pokemonData.height * 2.54).toFixed(1)
    const weightKg = (pokemonData.weight / 2.205).toFixed(1)
    return (
        <div className="tab-content tabAbout">
        <p className="m-4 text-m"> {pokemonData.description}</p>
        <div className="stats-sm mx-2 rounded-lg statsPkmn">
          <div className="stat statPkmn">
            <div className="stat-title">Height</div>
            <div className="stat-value valuePkmn">
              {pokemonData.height}" ({heightCm}cm)
            </div>
          </div>
          <div className="stat statPkmn">
            <div className="stat-title">Weight</div>
            <div className="stat-value valuePkmn">
              {pokemonData.weight}Lbs ({weightKg}kg)
            </div>
          </div>
        </div>
      </div>
    )
}