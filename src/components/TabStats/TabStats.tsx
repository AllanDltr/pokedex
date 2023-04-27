import { pokemonData } from "../../datas/functions"

export const TabStats = () => {
  return (
    <>
      <div className="tab-content tabStats">
        <p className="text-xl font-bold m-4"> Base Stats </p>
        <div className="flex justify-center flex-wrap">
          <div className="mb-5 flex items-center">
            <p className="pr-4"> HPs </p>
            <progress
              className="progress progress-primary w-56"
              value={pokemonData.HP}
              max="255"
            ></progress>
            <p className="pl-4"> {pokemonData.HP} </p>
          </div>
          <div className="mb-5 flex items-center">
            <p className="pr-4"> Atk </p>
            <progress
              className="progress progress-primary w-56"
              value={pokemonData.Atk}
              max="255"
            ></progress>
            <p className="pl-4"> {pokemonData.Atk} </p>
          </div>
          <div className="mb-5 flex items-center">
            <p className="pr-4"> Def </p>
            <progress
              className="progress progress-primary w-56"
              value={pokemonData.Def}
              max="255"
            ></progress>
            <p className="pl-4"> {pokemonData.Def} </p>
          </div>
          <div className="mb-5 flex items-center">
            <p className="pr-4"> ASp </p>
            <progress
              className="progress progress-primary w-56"
              value={pokemonData.AtkSp}
              max="255"
            ></progress>
            <p className="pl-4"> {pokemonData.AtkSp} </p>
          </div>
          <div className="mb-5 flex items-center">
            <p className="pr-4"> DSp </p>
            <progress
              className="progress progress-primary w-56"
              value={pokemonData.DefSp}
              max="255"
            ></progress>
            <p className="pl-4"> {pokemonData.DefSp} </p>
          </div>
          <div className="mb-5 flex items-center">
            <p className="pr-4"> Spd </p>
            <progress
              className="progress progress-primary w-56"
              value={pokemonData.Spd}
              max="255"
            ></progress>
            <p className="pl-4"> {pokemonData.Spd} </p>
          </div>
        </div>
      </div>
    </>
  )
}
