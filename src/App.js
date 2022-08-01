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
  const toSelect = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <select className="selectMode" onChange={toSelect}>
        <option defaultValue="Pick">Pick mode</option>
        {listModes.map((item) => (
          <option key={item.name} value={item.field}>
            {item.name}
          </option>
        ))}
      </select>
      <button className="buttonStart">START</button>
    </div>
  );
};

export default App;
