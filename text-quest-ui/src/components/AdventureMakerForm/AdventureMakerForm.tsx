import StandardButton from "../StandardButton/StandardButton";
import styles from "./AdventureMakerForm.module.css";
import { Adventure } from "../../types";
import { useState } from "react";

interface AdventureMakerFormProps {
  createAdventure: (adventure: Adventure) => void;
}

const AdventureMakerForm = ({ createAdventure }: AdventureMakerFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createAdventure({ title: title, description: description, scenes: [] });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <form className={styles.form} action="submit" onSubmit={handleSubmit}>
      <div className={styles.sceneName}>
        <label htmlFor="adventureTitle">Adventure Title</label>
        <input
          type="text"
          id="adventureTitle"
          name="adventureTitle"
          placeholder="Enter an adventure name"
          onChange={handleTitleChange}
          value={title}
        />
      </div>
      <div className={styles.sceneName}>
        <label htmlFor="adventureDescription">Adventure Description</label>
        <input
          type="text"
          id="adventureDescription"
          name="adventureDescription"
          placeholder="Enter an adventure description"
          onChange={handleDescriptionChange}
          value={description}
        />
      </div>
      <StandardButton type="submit" btnType="secondary" text="submit" />
    </form>
  );
};

export default AdventureMakerForm;
