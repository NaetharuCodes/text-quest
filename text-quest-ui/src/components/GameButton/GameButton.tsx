import styles from "./GameButton.module.css";

interface GameButtonProps {
  icon: React.ReactElement<SVGAElement>;
  text?: string;
  onClick: () => void;
}

const GameButton = ({ icon, text, onClick }: GameButtonProps) => {
  return (
    <button
      className={styles.button}
      type="button"
      title="game-button"
      onClick={onClick}
    >
      <div className={styles.iconContainer}>{icon}</div>
      {text && <div className={styles.text}>{text}</div>}
    </button>
  );
};

export default GameButton;
