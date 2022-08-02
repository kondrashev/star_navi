// @ts-nocheck
import React, { useState, useContext } from "react";
import { ApplictationContext } from "../App";

const Cell = (props) => {
  const { row, col, positionSquare } = props;
  const { values, setValues } = useContext(ApplictationContext);
  const [backgroundCell, setBackgroundCell] = useState(false);
  const styles = {
    cell: {
      width: "45px",
      height: "45px",
      border: "0.5px solid #080808",
      cursor: "pointer",
      backgroundColor: backgroundCell ? "#4BA6EE" : "#ffffff",
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
    setValues({
      ...values,
      countSquares: !values.countSquares,
      showSquares: Boolean(positionSquare.current.length),
    });
  };
  return (
    <div style={styles.cell} onMouseOver={() => onChoose(row + 1, col + 1)} />
  );
};

export default Cell;
