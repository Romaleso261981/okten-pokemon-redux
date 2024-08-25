import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const PokemonDetail = lazy(() => import("./pages/PokemonDetail/PokemonDetail"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading......</div>}>
        <MainPage />
      </Suspense>
    )
  },
  {
    path: "/pokemon/:id",
    element: (
      <Suspense fallback={<div>Loading......</div>}>
        <PokemonDetail />
      </Suspense>
    )
  }
]);
