import styles from "./sudokuSquare.module.css";

const SudokuSquare = ({ symbol, coordinates, onClick }) => {
  return (
    <div
      data-coordinates={`${coordinates[0]}_${coordinates[1]}`}
      className={styles.sudokuSquare}
      onClick={() => {
        onClick(coordinates);
      }}
    >
      {symbol}
    </div>
  );
};

export default SudokuSquare;
