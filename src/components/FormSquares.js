// @ts-nocheck
import React, { useContext } from "react";
import { ApplictationContext } from "../App";

const FormSquares = () => {
  const { values, setValues } = useContext(ApplictationContext);
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
    cell: {
      width: "30px",
      height: "30px",
      border: "0.5px solid black",
      cursor: "pointer",
      backgroundColor: values.backgroundCell ? "blue" : "#ffffff",
    },
  };
  const onChoose = (row, col) => {
    setValues({ ...values, backgroundCell: !values.backgroundCell });
    console.log(row + 1, col + 1);
  };
  return (
    <div style={styles.row}>
      {squares.map((_, col) => {
        return (
          <div key={col} className="row">
            {squares.map((_, row) => (
              <div
                key={row}
                style={styles.cell}
                onMouseOver={() => onChoose(row, col)}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default FormSquares;
