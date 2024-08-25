import { configureStore } from "@reduxjs/toolkit";
import pokemons from "./pokemons/pokemonsSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    pokemons
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: <T>(selector: (state: RootState) => T) => T =
  useSelector;
