import { SunIcon } from "@/icons/SunIcon";
import GameButton from "../GameButton/GameButton";
import styles from "./GameControls.module.css";
import { MoonIcon } from "@/icons/MoonIcon";
import SparkIcon from "@/icons/SparkIcon";
import RuneIcon from "@/icons/RuneIcon";
import GameInput from "../GameInput/GameInput";

interface GameControlsProps {}

const GameControls = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <GameInput />
      </div>
      <div className={styles.buttonContainer}>
        <GameButton icon={SunIcon} onClick={() => {}} text="Option 1" />
        <GameButton icon={MoonIcon} onClick={() => {}} text="Option 2" />
        <GameButton icon={SparkIcon} onClick={() => {}} text="Option 3" />
        <GameButton icon={RuneIcon} onClick={() => {}} text="Option 4" />
      </div>
    </div>
  );
};

export default GameControls;
