import {bulbasaurDatas } from "../../datas/pokemons"
import "./Cards.css"

export const Cards = () => {

    const pokemons = bulbasaurDatas
    console.log(pokemons)
    const [name, order, sprites, height, weight] = [pokemons[0].name, pokemons[0].order, pokemons[0].sprites.front_default, pokemons[0].height, pokemons[0].weight]
    const heightCm = (height * 2.54).toFixed(1)
    const weightKg = (weight / 2.205).toFixed(1)
    const [HP, Atk, Def, AtkSp, DefSp, Spd] = [pokemons[0].stats[0].base_stat, pokemons[0].stats[1].base_stat, pokemons[0].stats[2].base_stat, pokemons[0].stats[3].base_stat, pokemons[0].stats[4].base_stat, pokemons[0].stats[5].base_stat]
    const [types1, types2] = [pokemons[0].types[0].type.name, pokemons[0].types[1].type.name]
    return (
        <>
            <div className="flex justify-between w-screen">
                <p className="text-4xl font-bold m-4 pokemonName"> {name} </p>
                <p className="text-3xl font-bold m-4"> #{order} </p>
            </div>

            <div className="flex w-screen justify-start">
                <p className="m-4 p-1 border-solid border-black rounded typesPkmn"> {types1} </p>
                <p className="m-4 p-1 border-solid border-black rounded typesPkmn"> {types2} </p>
            </div>

            <div className="avatar flex justify-center avatarPkmn">
                <div className="w-24 rounded-full">
                    <img src={sprites} />
                </div>
            </div>

            <div className="tabs mb-8">
                <a className="tab tab-bordered w-1/3">About</a> 
                <a className="tab tab-bordered w-1/3">Base Stats</a> 
                <a className="tab tab-bordered w-1/3">Evolutions</a>
            </div>

            <div className="tab-content tabAbout">
                <div className="stats-sm mx-2 rounded-lg statsPkmn">
                    <div className="stat statPkmn">
                        <div className="stat-title">Height</div>
                        <div className="stat-value valuePkmn">{height}" ({heightCm}cm)</div>
                    </div>
                    <div className="stat statPkmn">
                        <div className="stat-title">Weight</div>
                        <div className="stat-value valuePkmn">{weight}Lbs ({weightKg}kg)</div>
                    </div>
                </div>
                <p className="text-xl font-bold m-4"> Breeding </p>
                <div>
                    <p className="text-m m-4"> Gender </p>
                    <p className="text-m m-4"> Egg Groups </p>
                    <p className="text-m m-4"> Egg Cycle </p>
                </div>
            </div>

            <div className="tab-content  tabStats flex flex-wrap justify-center">
                <div  className="mb-5 flex items-center">
                        <p className="pr-4"> HPs </p>
                        <progress className="progress progress-primary w-56" value={HP} max="100"></progress>
                        <p className="pl-4"> {HP} </p>
                </div>
                <div  className="mb-5 flex items-center">
                        <p className="pr-4"> Atk </p>
                        <progress className="progress progress-primary w-56" value={Atk} max="100"></progress>
                        <p className="pl-4"> {Atk} </p>
                </div>
                <div  className="mb-5 flex items-center">
                        <p className="pr-4"> Def </p>
                        <progress className="progress progress-primary w-56" value={Def} max="100"></progress>
                        <p className="pl-4"> {Def} </p>
                </div>
                <div  className="mb-5 flex items-center">
                        <p className="pr-4"> ASp </p>
                        <progress className="progress progress-primary w-56" value={AtkSp} max="100"></progress>
                        <p className="pl-4"> {AtkSp} </p>
                </div>
                <div  className="mb-5 flex items-center">
                        <p className="pr-4"> DSp </p>
                        <progress className="progress progress-primary w-56" value={DefSp} max="100"></progress>
                        <p className="pl-4"> {DefSp} </p>
                </div>
                <div  className="mb-5 flex items-center">
                        <p className="pr-4"> Spd </p>
                        <progress className="progress progress-primary w-56" value={Spd} max="100"></progress>
                        <p className="pl-4"> {Spd} </p>
                </div>
            </div>

            <div className="tab-content tabEvolutions">
                <p className="text-xl font-bold m-4"> Evolution List </p>
                <div className="flex justify-center">
                    <div className="avatar ">
                        <div className="w-24 rounded-full evolutionPkmn">
                            <img src={sprites} />
                        </div>
                    </div>
                    <div className="flex items-center px-10 arrowEvo">
                         <p> -> </p>
                         <p> Lvl 16 </p>
                         </div>
                    <div className="avatar ">
                        <div className="w-24 rounded-full evolutionPkmn">
                            <img src={sprites} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}