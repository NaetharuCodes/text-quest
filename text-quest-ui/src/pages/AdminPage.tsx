import SceneMakerForm from "@/components/SceneMakerForm/SceneMakerForm";
import TreeView from "@/components/TreeView/TreeView";

const AdminPage = () => {
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
      <SceneMakerForm />
    </div>
  );
};

export default AdminPage;
