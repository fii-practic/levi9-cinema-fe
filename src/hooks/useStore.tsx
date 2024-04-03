import { useContext } from "react";
import AppContext from "../stores/storesContext";


const useStore = () => {
  const store = useContext(AppContext);

  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }

  return store;
};

export default useStore;