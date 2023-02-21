import styles from "./sudokuSquare.module.css";

const SudokuSquare = ({ symbol }) => {
  return <div className={styles.sudokuSquare}>{symbol}</div>;
};

export default SudokuSquare;
