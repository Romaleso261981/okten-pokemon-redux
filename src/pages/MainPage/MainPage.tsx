import { useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchPokemons } from "../../redux/pokemons/pokemonsSlice";
import { PokemonsList } from "../../conponents/PokemonsList/PokemonsList";
import Pagination from "../../conponents/Pagination/Pagination";

const MainPage = () => {
  const dispatch = useAppDispatch();

  const {
    loading,
    response: { count, next, previous }
  } = useAppSelector((state: RootState) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons("https://pokeapi.co/api/v2/pokemon"));
  }, [dispatch]);

  const onPageChange = (url: string) => {
    dispatch(fetchPokemons(url));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <PokemonsList />
      <Pagination
        currentPage={10}
        next={next}
        previous={previous}
        onPageChange={onPageChange}
        totalPages={count}
      />
    </div>
  );
};

export default MainPage;
