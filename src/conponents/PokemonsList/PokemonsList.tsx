import { RootState, useAppSelector } from "../../redux/store";

export const PokemonsList = () => {
  const {
    response: { results: pokemons }
  } = useAppSelector((state: RootState) => state.pokemons);

  const pokemonDetail = (name: string) => {
    window.location.href = `/pokemon/${name}`;
  };

  return (
    <>
      <h1 className="mainTitle">Pokemons</h1>
      <ul className="pokemonsList">
        {pokemons?.map((pokemon) => (
          <li
            className="pokemonItem"
            onClick={() => pokemonDetail(pokemon.name)}
            key={pokemon.name}
          >
            <img
              className="pokemonImage"
              src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
              alt={pokemon.name}
            />
            <span className="pokemonName">{pokemon.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
