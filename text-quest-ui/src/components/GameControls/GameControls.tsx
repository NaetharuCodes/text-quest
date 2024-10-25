import StandardButton from "../StandardButton/StandardButton";
import styles from "./GameControls.module.css";

interface GameControlsProps {}

const GameControls = () => {
  return (
    <div className={styles.container}>
      <StandardButton
        type="button"
        btnType="primary"
        text="Option 1"
        onClick={() => {}}
      />
      <StandardButton
        type="button"
        btnType="primary"
        text="Option 1"
        onClick={() => {}}
      />
      <StandardButton
        type="button"
        btnType="primary"
        text="Option 1"
        onClick={() => {}}
      />
      <StandardButton
        type="button"
        btnType="primary"
        text="Option 1"
        onClick={() => {}}
      />
    </div>
  );
};

export default GameControls;
