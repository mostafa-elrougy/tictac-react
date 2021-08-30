import React from "react";
import Square from "../square/Square";
//import '../index.css';
import { useState } from "react";

const style = {
  border: "4px solid red",
  borderRadius: "15px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};
function Board({squares , onClick}) {
//   let squares = props.squares;
//   let onClick = props.onClick;
  return (
    <div className="board" style={style}>
      {squares.map((square, i) => (
        <Square testId={`squares-${i}`} key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Board;
