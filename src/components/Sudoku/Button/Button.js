import React from "react";
import styles from "./button.module.css";

const Button = ({ newGameFlag }) => {
  return (
    <button
      className={styles.button}
      onClick={() => {
        newGameFlag = true;
      }}
    >
      NEW GAME
    </button>
  );
};

export default Button;
