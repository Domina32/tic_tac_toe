import SudokuSquare from "./SudokuSquare/SudokuSquare";
import Button from "./Button/Button";
import styles from "./sudoku.module.css";
import React from "react";

const Sudoku = () => {
  const [squares, setSquares] = React.useState(Array(3).fill(Array(3).fill("O")));

  const handleClick = ()=>{
    setSquares(Array(3).fill(Array(3).fill("")));
  }

  return (
    <>
      <div className={styles.sudokuBoard}>
        {squares.map((sublist) => (
          <div className={styles.sudokuRow}>
            {sublist.map((square) => (
              <SudokuSquare symbol={square}/>
            ))}
          </div>
        ))}
      </div>
      <Button onClick={handleClick}>New Game</Button>
    </>
  );
};

export default Sudoku;
