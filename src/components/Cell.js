// @ts-nocheck
import React, { useState } from "react";

const Cell = (props) => {
  const { row, col, positionSquare } = props;
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
  const onChoose = (row, col) => {
    setBackgroundCell(!backgroundCell);
    if (!backgroundCell) {
      positionSquare.current.push(`${row}-${col}`);
    } else {
      positionSquare.current = positionSquare.current.filter(
        (item) => item !== `${row}-${col}`
      );
    }
  };
  return (
    <div style={styles.cell} onMouseOver={() => onChoose(row + 1, col + 1)} />
  );
};

export default Cell;
