import styles from "./app.module.css";
import Button from "./components/Sudoku/Button/Button";
import Sudoku from "./components/Sudoku/Sudoku";

function App() {
  return (
    <div className={styles.App}>
      <Sudoku />
      <Button />
    </div>
  );
}

export default App;
