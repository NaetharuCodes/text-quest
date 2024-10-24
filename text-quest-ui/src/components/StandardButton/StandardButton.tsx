import styles from "./StandardButton.module.css";

interface StandardButtonProps {
  text: string;
  onClick: () => void;
  type: "button" | "reset" | "submit";
  btnType: "primary" | "secondary" | "alert" | "warning";
}

const StandardButton = ({
  text,
  onClick,
  type,
  btnType,
}: StandardButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${
        btnType === "primary"
          ? styles.primary
          : btnType === "secondary"
          ? styles.secondary
          : btnType === "alert"
          ? styles.alert
          : styles.warning
      }`}
    >
      {text}
    </button>
  );
};

export default StandardButton;
