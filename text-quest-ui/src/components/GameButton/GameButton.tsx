import styles from "./GameButton.module.css";

interface GameButtonProps {
  icon: React.ReactSVGElement;
  text?: string;
  onClick: () => void;
}

const GameButton = ({ icon, text, onClick }: GameButtonProps) => {
  return (
    <button type="button" title="game-button" onClick={onClick}>
      {icon}
      {text && <div>{text}</div>}
    </button>
  );
};

export default GameButton;
