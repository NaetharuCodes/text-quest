import styles from "./GameInput.module.css";

interface GameInputProps {}

const GameInput = () => {
  return (
    <input className={styles.input} type="text" placeholder="your text here" />
  );
};

export default GameInput;
