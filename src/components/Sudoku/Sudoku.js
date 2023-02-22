import SudokuSquare from "./SudokuSquare/SudokuSquare";
import Button from "./Button/Button";
import styles from "./sudoku.module.css";
import React from "react";

const Sudoku = () => {
  const [squares, setSquares] = React.useState(Array(3).fill(Array(3).fill(null)));
  const [globalSquareText, setGlobalSquareText] = React.useState("O");

  const handleClick = ()=>{
    setGlobalSquareText("");
  }

  return (
    <>
      <div className={styles.sudokuBoard}>
        {squares.map((sublist) => (
          <div className={styles.sudokuRow}>
            {sublist.map((square) => (
              <SudokuSquare symbol={globalSquareText}/>
            ))}
          </div>
        ))}
      </div>
      <Button onClick={handleClick}>New Game</Button>
    </>
  );
};

export default Sudoku;
