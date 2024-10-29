import SceneMakerForm from "@/components/SceneMakerForm/SceneMakerForm";
import TreeView from "@/components/TreeView/TreeView";
import { Adventure } from "../types";
import { useState } from "react";
import StandardButton from "@/components/StandardButton/StandardButton";
import AdventureMakerForm from "@/components/AdventureMakerForm/AdventureMakerForm";

const AdminPage = () => {
  const [adventure, setAdventure] = useState<Adventure | null>(null);

  // Create a new adventure in the db, and then pull that data down and set it here.
  const handleCreateAdventure = async (e: Adventure) => {
    try {
      const response = await fetch("http://localhost:3000/api/adventures", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Add this line
        },
        body: JSON.stringify({
          title: e.title,
          description: e.description,
          scenes: [],
        }),
      });

      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
      }

      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.error("Unable to create new adventure: ", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        padding: 32,
      }}
    >
      <TreeView
        parents={["first scene"]}
        node={"current scene"}
        pointOfInterest={["cool thing", "person to talk with"]}
        children={["next scene", "side scene"]}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
          width: 800,
        }}
      >
        <StandardButton
          btnType="alert"
          type="button"
          text="clear scene"
          onClick={() => setAdventure(null)}
        />
        {adventure ? (
          <SceneMakerForm />
        ) : (
          <AdventureMakerForm
            createAdventure={(e: Adventure) => handleCreateAdventure(e)}
          />
        )}
      </div>
    </div>
  );
};

export default AdminPage;
