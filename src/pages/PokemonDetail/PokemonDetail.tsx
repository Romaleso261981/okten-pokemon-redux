import { useParams } from "react-router-dom";
import { useEffect } from "react";

import s from "./PokemonDetail.module.css";

import BackButton from "../../conponents/BackButton/BackButton";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchPokemonByName } from "../../redux/pokemons/pokemonsSlice";
import { PokemonSprites } from "./UI/PokemonSprites";

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const pokemon = useAppSelector((state) => state.pokemons.pokemon);

  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      if (id) {
        dispatch(fetchPokemonByName(id));
      }
    } catch (error) {
      console.error("Error fetching Pokemon detail:", error);
    }
  }, [dispatch, id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BackButton />
      <div className={s.pokemonDetailWrapper}>
        <h2 className={s.pokemonDetailTitle}>{pokemon.name}</h2>
        <img
          className={s.pokemonDetailImage}
          src={pokemon.sprites.front_default ?? ""}
          alt={pokemon.name}
        />
        <PokemonSprites url={pokemon.forms[0].url} />
      </div>
    </>
  );
};

export default PokemonDetail;
