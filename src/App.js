// @ts-nocheck
import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadModesFetchData } from "./store/get_mode/action_get";
import endpoints from "./constants/Endpoints";

const App = () => {
  const dispatch = useDispatch();
  const listModes = useSelector((state) => state.getModesReducer.modes);
  useEffect(() => {
    const data = {
      url: `${endpoints.getModes}`,
    };
    dispatch(loadModesFetchData(data));
  }, []);
  console.log(listModes);
  return <div className="App">Star Navi!!!</div>;
};

export default App;
