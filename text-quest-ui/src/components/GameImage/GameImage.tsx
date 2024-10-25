import styles from "./GameImage.module.css";

const placeholderImage =
  "https://img.freepik.com/premium-photo/vector-illustration-wizard-hat-with-star-his-hand_994418-1600.jpg";

interface GameImageProps {}

const GameImage = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={placeholderImage}
        alt="a placeholder"
      />
    </div>
  );
};

export default GameImage;
