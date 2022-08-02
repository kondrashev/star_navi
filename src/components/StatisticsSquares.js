// @ts-nocheck
import React from "react";

const StatisticsSquares = (props) => {
  const { positionSquare } = props;
  return (
    <div className="containerStatistics">
      <h1>Hover squares</h1>
      <ul className="listSquares">
        {positionSquare.current.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default StatisticsSquares;
