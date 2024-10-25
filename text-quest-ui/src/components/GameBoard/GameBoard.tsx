import styles from "./GameBoard.module.css";
import GameControls from "../GameControls/GameControls";
import GameImage from "../GameImage/GameImage";
import GameText from "../GameText/GameText";

const sampleText = [
  "The ancient tower loomed before Lyra, its crystalline walls refracting the dying sunlight into a thousand prismatic shards across the snow-laden courtyard. Her breath frosted in the air as she traced the intricate runes carved into the doorframe, their faint blue glow pulsing in time with her heartbeat. Something about this place knew her, recognized her, though she had never set foot here before.",
  "The silence was absolute, broken only by the soft crunch of her boots on fresh snow and the whisper of her cloak against stone. As she pressed her palm against the tower's surface, a sudden warmth spread through her fingers, up her arm, and settled like honey in her chest. The crystal beneath her hand shifted from clear to deep azure, spreading outward in ripples like a stone dropped in still water.",
  "A low hum began to build from somewhere deep within the structure, and Lyra felt her magical senses tingle with recognition. This was no ordinary enchantment – this was something far older, far more primitive than the carefully constructed spells she'd studied at the Academy. This was the kind of magic that existed before humans had learned to harness it, wild and hungry and alive. And now, after centuries of slumber, it was awakening.",
];

interface GameBoardProps {}

const GameBoard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.visualContainer}>
        <GameText text={sampleText} />
        <GameImage />
      </div>
      <GameControls />
    </div>
  );
};

export default GameBoard;
