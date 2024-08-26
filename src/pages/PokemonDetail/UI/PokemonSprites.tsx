import { FC } from "react";

import s from "./PokemonDetail.module.css";

export type SpriteKeys =
  | "back_default"
  | "back_female"
  | "back_shiny"
  | "back_shiny_female"
  | "front_default"
  | "front_female"
  | "front_shiny"
  | "front_shiny_female";

type PokemonSpritesProps = {
  sprites: Record<SpriteKeys, string | null>;
};

export const PokemonSprites: FC<PokemonSpritesProps> = ({ sprites }) => {
  const spriteLabels: Record<SpriteKeys, string> = {
    back_default: "Back Default",
    back_female: "Back Female",
    back_shiny: "Back Shiny",
    back_shiny_female: "Back Shiny Female",
    front_default: "Front Default",
    front_female: "Front Female",
    front_shiny: "Front Shiny",
    front_shiny_female: "Front Shiny Female"
  };

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
                alt={spriteLabels[key as SpriteKeys]}
                style={{ width: "100px", height: "100px" }}
              />
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};
