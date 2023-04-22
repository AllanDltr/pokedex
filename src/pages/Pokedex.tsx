import {pokemonDatas, bulbasaurDatas} from '../datas/pokemons'

export const Pokedex = () => {
    const pokemons = pokemonDatas
    const bulbasaur = bulbasaurDatas[0].sprites.front_default

    return (
        <>
        {pokemons.map((pokemon =>
            <div className="card w-80 bg-base-100 shadow-xl image-full my-5">
                <figure><img src={bulbasaur} alt={pokemon.name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{pokemon.name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Check it</button>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}