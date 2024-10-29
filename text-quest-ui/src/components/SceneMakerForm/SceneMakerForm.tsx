import { useState } from "react";
import styles from "./SceneMakerForm.module.css";

interface PointOfInterest {
  name: string;
  description: string;
}

const SceneMakerForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit");
  };

  const [poi, setPoi] = useState<PointOfInterest[] | null>(null);

  return (
    <form className={styles.form} action="submit" onSubmit={handleSubmit}>
      <div className={styles.sceneName}>
        <label htmlFor="sceneName">Scene Name</label>
        <input
          type="text"
          id="sceneName"
          name="sceneName"
          placeholder="Enter a scene name"
        />
      </div>

      <div className={styles.sceneText}>
        <label htmlFor="sceneText">Scene Text</label>
        <textarea
          id="sceneText"
          name="sceneText"
          placeholder="Enter your scene text"
        />
      </div>

      <div>
        <button className={styles.button}>Add Point of Interest</button>
      </div>

      <div>{poi && poi.map((point) => <div>{point.name}</div>)}</div>
    </form>
  );
};

export default SceneMakerForm;
