import { GameClient, Pokedexes } from 'pokenode-ts'; // import the GameClient and the Pokedexes enum

(async () => {
  const api = new GameClient(); // create a GameClient

  await api
    .getPokedexById(Pokedexes.NATIONAL)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
})();