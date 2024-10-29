import StandardButton from "../StandardButton/StandardButton";
import styles from "./AdventureMakerForm.module.css";
import { Adventure } from "../../types";

interface AdventureMakerFormProps {
  setAdventure: (adventure: Adventure) => void;
}

const AdventureMakerForm = ({ setAdventure }: AdventureMakerFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAdventure({ name: "new adventure", scenes: [] });
  };

  return (
    <form className={styles.form} action="submit" onSubmit={handleSubmit}>
      <div className={styles.sceneName}>
        <label htmlFor="sceneName">Adventure Name</label>
        <input
          type="text"
          id="sceneName"
          name="sceneName"
          placeholder="Enter a scene name"
        />
      </div>
      <StandardButton type="submit" btnType="secondary" text="submit" />
    </form>
  );
};

export default AdventureMakerForm;
