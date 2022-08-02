// @ts-nocheck
import React, { useContext } from "react";
import { ApplictationContext } from "../App";

const StatisticsSquares = (props) => {
  const { positionSquare } = props;
  const { values } = useContext(ApplictationContext);
  return (
    <div className="containerStatistics">
      {values.showSquares && <h1>Hover squares</h1>}
      <ul className="listSquares">
        {positionSquare.current.map((item) => {
          return (
            <li key={item}>{`row ${item.split("-")[0]} col ${
              item.split("-")[1]
            }`}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default StatisticsSquares;
