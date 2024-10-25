import styles from "./GameText.module.css";

interface GameTextProps {
  text: string[];
}

const GameText = ({ text }: GameTextProps) => {
  return (
    <div className={styles.container}>
      {text.map((para) => (
        <p className={styles.text}>{para}</p>
      ))}
    </div>
  );
};

export default GameText;
