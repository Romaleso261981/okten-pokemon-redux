import { FC, useEffect } from "react";

import s from "./PokemonDetail.module.css";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { pokemonForms } from "../../../redux/pokemons/pokemonsSlice";

type PokemonSpritesProps = {
  url: string;
};

export const PokemonSprites: FC<PokemonSpritesProps> = ({ url }) => {
  const dispatch = useAppDispatch();

  const sprites = useAppSelector((state) => state.pokemons.sprites);

  useEffect(() => {
    try {
      if (url) {
        dispatch(pokemonForms(url));
      }
    } catch (error) {
      console.error("Error fetching Pokemon detail:", error);
    }
  }, [dispatch, url]);

  if (!sprites) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.pokemonSpritesWrapper}>
      <h2 className={s.pokemonSpritesTitle}>Pokemon Sprites</h2>
      <ul className={s.pokemonSpritesList}>
        {Object.entries(sprites).map(([key, url]) =>
          url ? (
            <li className={s.pokemonSpritesItem} key={key}>
              <img
                className={s.pokemonSpritesImage}
                src={url}
                alt={"Pokemon sprite"}
                style={{ width: "100px", height: "100px" }}
              />
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};
