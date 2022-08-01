// @ts-nocheck
import React, { useContext } from "react";
import { ApplictationContext } from "../App";
import Cell from "./Cell";

const FormSquares = () => {
  const { values } = useContext(ApplictationContext);
  const squares = new Array(Number(values.sizeSquares)).fill("");
  const styles = {
    row: {
      width: "auto%",
      height: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: squares.length ? "0.5px solid black" : "none",
    },
  };
  return (
    <div style={styles.row}>
      {squares.map((_, col) => {
        return (
          <div key={col} className="row">
            {squares.map((_, row) => (
              <Cell key={row} row={row} col={col} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default FormSquares;
