import styles from "./app.module.css";
import Sudoku from "./components/Sudoku/Sudoku";

function App() {
  return (
    <div className={styles.App}>
      <Sudoku />
    </div>
  );
}

export default App;
