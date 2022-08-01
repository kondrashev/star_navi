// @ts-nocheck
import React, { useState } from "react";

const Cell = (props) => {
  const [backgroundCell, setBackgroundCell] = useState(false);
  const styles = {
    cell: {
      width: "30px",
      height: "30px",
      border: "0.5px solid black",
      cursor: "pointer",
      backgroundColor: backgroundCell ? "blue" : "#ffffff",
    },
  };
  const { row, col } = props;
  const onChoose = (row, col) => {
    setBackgroundCell(!backgroundCell);
    console.log(row + 1, col + 1);
  };
  return <div style={styles.cell} onMouseOver={() => onChoose(row, col)} />;
};

export default Cell;
