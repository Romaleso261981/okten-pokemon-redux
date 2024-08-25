import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type PokemonsRespons = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};

export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonsState = {
  response: PokemonsRespons;
  loading: boolean;
};

const initialState: PokemonsState = {
  response: { results: [], count: 0, next: "", previous: "" },
  loading: false
};

export const fetchPokemons = createAsyncThunk<PokemonsRespons, string>(
  "pokemons/fetchPokemons",
  async (url) => {
    const response = await axios.get<PokemonsRespons>(url);
    console.log("response.data", response.data);
    return response.data;
  }
);

export const pokemons = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, { payload }) => {
        state.response = payload;
        state.loading = false;
      })
      .addCase(fetchPokemons.rejected, (state) => {
        state.loading = false;
      });
  }
});

export default pokemons.reducer;
