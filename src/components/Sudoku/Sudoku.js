import SudokuSquare from "./SudokuSquare/SudokuSquare";
import Button from "./Button/Button";
import styles from "./sudoku.module.css";
import { useEffect, useState } from "react";

const pleaseTranspose = (_, columnIndex, allRows) =>
  allRows.map((_, rowIndex) => allRows[rowIndex][columnIndex]);

const pickMainDiagonal = (row, columnIndex) => row[columnIndex];

const pickOtherDiagonal = (row, columnIndex, allRows) =>
  row[allRows.length - columnIndex - 1];

const checkVictoryInRow = (row) => {
  return row.every(
    (square, index, entireRow) =>
      square && (index === 0 || (index > 0 && square === entireRow[index - 1]))
  );
};

const Sudoku = () => {
  const [isX, setIsX] = useState(true);
  const [isVictory, setIsVictory] = useState(false);
  const [squares, setSquares] = useState(Array(3).fill(Array(3).fill("")));

  useEffect(() => {
    if (
      [
        squares,
        squares.map(pleaseTranspose),
        [squares.map(pickMainDiagonal), squares.map(pickOtherDiagonal)],
      ].some((board) => board.some(checkVictoryInRow))
    ) {
      setIsVictory(true);
    }
  }, [squares]);

  const handleClick = (coordinates) => {
    if (squares[coordinates[0]][coordinates[1]] || isVictory) {
      return;
    }

    setSquares((prevState) => {
      const newState = prevState.map((row, index) => {
        return index === coordinates[0]
          ? row.map((square, index) => {
              const newSymbol = isX ? "X" : "O";
              return index === coordinates[1] ? newSymbol : square;
            })
          : row;
      });

      return newState;
    });

    setIsX((prevIsX) => {
      return !prevIsX;
    });
  };

  return (
    <>
      <div className={styles.sudokuBoard}>
        {squares.map((sublist, idSublist) => (
          <div className={styles.sudokuRow} key={idSublist.toString()}>
            {sublist.map((square, idSquare) => (
              <SudokuSquare
                symbol={square}
                key={idSquare.toString()}
                coordinates={[idSublist, idSquare]}
                onClick={handleClick}
              />
            ))}
          </div>
        ))}
      </div>
      <Button
        onClick={() => {
          setSquares(Array(3).fill(Array(3).fill("")));
          setIsVictory(false);
        }}
      >
        New Game
      </Button>
      Is victory: {isVictory.toString()}
    </>
  );
};

export default Sudoku;
