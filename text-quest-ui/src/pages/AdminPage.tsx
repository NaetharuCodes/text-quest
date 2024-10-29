import SceneMakerForm from "@/components/SceneMakerForm/SceneMakerForm";
import TreeView from "@/components/TreeView/TreeView";
import { Adventure } from "../types";
import { useState } from "react";
import StandardButton from "@/components/StandardButton/StandardButton";
import AdventureMakerForm from "@/components/AdventureMakerForm/AdventureMakerForm";

const AdminPage = () => {
  const [adventure, setAdventure] = useState<Adventure | null>(null);

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
            setAdventure={(e: Adventure) => setAdventure(e)}
          />
        )}
      </div>
    </div>
  );
};

export default AdminPage;
