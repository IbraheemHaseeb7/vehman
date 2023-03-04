import { useReducer } from "react";
import SideBar from "../components/SideBar/SideBar";
import "../styles/globals.css";
import { reducer } from "../components/State/MainReducer";
import { MainContext } from "../components/Contexts/Main";

export default function MyApp({ Component, PageProps }) {
  const [state, dispatch] = useReducer(reducer, { vehicles: [] });

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      <SideBar />
      <Component {...PageProps} />
    </MainContext.Provider>
  );
}
