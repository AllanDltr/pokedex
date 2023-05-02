import {
  bulbasaurDatas,
  bulbasaurSpeciesDatas,
  bulbasaurEvoDatas,
  ivysaurDatas,
  venusaurDatas,
  pokemonDatas,
} from "../datas/pokemons"
// type PokemonType = {
//   name: string
//   order?: number
//   url: string
// }

// const pokemon: PokemonType = {
//   name: bulbasaurDatas[0].name,
//   order: bulbasaurDatas[0].order,
//   url: pokemonDatas[0].url,
// }
interface PokemonData {
  name?: string
  url: string
  order?: number
  types: string[]
  sprites?: string
  spritesShiny?: string
  description?: string
  height: number
  weight: number
  HP: number
  Atk: number
  Def: number
  AtkSp: number
  DefSp: number
  Spd: number
  evolution: number[]
  evolution2: number[]
  evolutionSprites: string
  evolution2Sprites: string
}

const pokemonData: PokemonData = {
  name: bulbasaurDatas[0].name,
  url: bulbasaurDatas[0].species.url,
  order: bulbasaurDatas[0].order,
  types: [
    bulbasaurDatas[0].types[0]?.type.name,
    bulbasaurDatas[0].types[1]?.type.name,
  ],
  sprites: bulbasaurDatas[0].sprites.front_default,
  spritesShiny: bulbasaurDatas[0].sprites.front_shiny,
  description: bulbasaurSpeciesDatas[0].flavor_text_entries[0].flavor_text,
  height: bulbasaurDatas[0].height,
  weight: bulbasaurDatas[0].weight,
  HP: bulbasaurDatas[0].stats[0].base_stat,
  Atk: bulbasaurDatas[0].stats[1].base_stat,
  Def: bulbasaurDatas[0].stats[2].base_stat,
  AtkSp: bulbasaurDatas[0].stats[3].base_stat,
  DefSp: bulbasaurDatas[0].stats[4].base_stat,
  Spd: bulbasaurDatas[0].stats[5].base_stat,
  evolution: [
    bulbasaurEvoDatas[0].chain.evolves_to[0].evolution_details[0].min_level,
],
  evolution2: [
  bulbasaurEvoDatas[0].chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level,
  ],
  evolutionSprites: ivysaurDatas[0].sprites.front_default,
  evolution2Sprites: venusaurDatas[0].sprites.front_default,
  // venusaurDatas[0].sprites.front_default,
}
export { pokemonData, }
export type { PokemonData }
