import { bulbasaurDatas, bulbasaurSpeciesDatas } from "../datas/pokemons"
interface PokemonData {
  name?: string
  order?: number
  types: string[]
  sprites?: string
  description?: string
  height: number
  weight: number
  HP: number
  Atk: number
  Def: number
  AtkSp: number
  DefSp: number
  Spd: number
}

type Pokemon = {
  name?: string
}

const pokemon: Pokemon = {
  name: bulbasaurDatas[0].name,
}

const pokemonData: PokemonData = {
  name: bulbasaurDatas[0].name,
  order: bulbasaurDatas[0].order,
  types: [
    bulbasaurDatas[0].types[0]?.type.name,
    bulbasaurDatas[0].types[1]?.type.name,
  ],
  sprites: bulbasaurDatas[0].sprites.front_default,
  description: bulbasaurSpeciesDatas[0].flavor_text_entries[0].flavor_text,
  height: bulbasaurDatas[0].height,
  weight: bulbasaurDatas[0].weight,
  HP: bulbasaurDatas[0].stats[0].base_stat,
  Atk: bulbasaurDatas[0].stats[1].base_stat,
  Def: bulbasaurDatas[0].stats[2].base_stat,
  AtkSp: bulbasaurDatas[0].stats[3].base_stat,
  DefSp: bulbasaurDatas[0].stats[4].base_stat,
  Spd: bulbasaurDatas[0].stats[5].base_stat,
}
export { pokemonData, pokemon }
export type { Pokemon }
