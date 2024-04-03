import { createContext } from "react";
import UtilsStore from "./storeFragments/utilsStore";
import MoviesStore from "./storeFragments/moviesStore";
import UpsertModalStore from "./storeFragments/upsertModalStore";
import DeleteModalStore from "./storeFragments/deleteModalStore";

const AppContext = createContext({
  utilsStore: new UtilsStore(),
  moviesStore: new MoviesStore(),
  upsertModalStore: new UpsertModalStore(),
  deleteModalStore: new DeleteModalStore(),
});

export default AppContext;
