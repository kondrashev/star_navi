// @ts-nocheck
import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadModesFetchData } from "./store/get_mode/action_get";
import endpoints from "./constants/Endpoints";
import FormSquares from "./components/FormSquares";
import { context } from "./constants/Context";

export const ApplictationContext = createContext();

const App = () => {
  const [values, setValues] = useState(context);
  const dispatch = useDispatch();
  const listModes = useSelector((state) => state.getModesReducer.modes);
  useEffect(() => {
    const data = {
      url: `${endpoints.getModes}`,
    };
    dispatch(loadModesFetchData(data));
  }, []);
  const toSelect = (event) => {
    setValues({ ...values, sizeSquares: event.target.value });
  };
  return (
    <ApplictationContext.Provider
      value={{
        values,
        setValues,
      }}
    >
      <div className="App">
        <div className="containerSelect">
          <select className="selectMode" onChange={toSelect}>
            <option defaultValue="Pick" value={0}>
              Pick mode
            </option>
            {listModes.map((item) => (
              <option key={item.name} value={item.field}>
                {item.name}
              </option>
            ))}
          </select>
          <button className="buttonStart">START</button>
        </div>
        <div className="containerSquares">
          <FormSquares />
        </div>
      </div>
    </ApplictationContext.Provider>
  );
};

export default App;
