// @ts-nocheck
import "./App.css";
import React, { useState, useEffect, createContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadModesFetchData } from "./store/get_mode/action_get";
import endpoints from "./constants/Endpoints";
import FormSquares from "./components/FormSquares";
import { context } from "./constants/Context";
import StatisticsSquares from "./components/StatisticsSquares";

export const ApplictationContext = createContext();

const App = () => {
  const [values, setValues] = useState(context);
  const dispatch = useDispatch();
  const listModes = useSelector((state) => state.getModesReducer.modes);
  const positionSquare = useRef([]);
  const size = useRef(0);
  useEffect(() => {
    const data = {
      url: `${endpoints.getModes}`,
    };
    dispatch(loadModesFetchData(data));
  }, []);
  const toSelect = (event) => {
    positionSquare.current = [];
    setValues({ ...values, showSquares: false, showFormSquares: false });
    size.current = event.target.value;
  };
  const toSelectStart = () => {
    setValues({ ...values, sizeSquares: size.current, showFormSquares: true });
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
          <button className="buttonStart" onClick={toSelectStart}>
            START
          </button>
        </div>
        <div className="containerSquares">
          {values.showFormSquares && (
            <FormSquares positionSquare={positionSquare} />
          )}
          <StatisticsSquares positionSquare={positionSquare} />
        </div>
      </div>
    </ApplictationContext.Provider>
  );
};

export default App;
