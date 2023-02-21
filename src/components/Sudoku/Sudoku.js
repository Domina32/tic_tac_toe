import SudokuSquare from "./SudokuSquare/SudokuSquare";
import Button from "./Button/Button";
import styles from "./sudoku.module.css";

const squares = Array(3).fill(Array(3).fill(null));

const restartGame = () => {};

const Sudoku = () => {
  return (
    <>
      <div className={styles.sudokuBoard}>
        {squares.map((sublist) => (
          <div className={styles.sudokuRow}>
            {sublist.map((square) => (
              <SudokuSquare />
            ))}
          </div>
        ))}
      </div>
      <Button></Button>
    </>
  );
};

export default Sudoku;
