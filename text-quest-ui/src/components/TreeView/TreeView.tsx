import styles from "./TreeView.module.css";

interface TreeViewProps {
  parents: string[];
  node: string;
  pointOfInterest: string[];
  children: string[];
}

const TreeView = ({
  parents,
  node,
  pointOfInterest,
  children,
}: TreeViewProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.parents}>
        {parents.map((parentName) => (
          <button className={styles.clearFont} key={parentName}>
            {parentName}
          </button>
        ))}
      </div>
      <button className={`${styles.clearFont} ${styles.node}`}>{node}</button>
      <div className={styles.poi}>
        {pointOfInterest.map((pointOfInterestName) => (
          <button className={styles.clearFont} key={pointOfInterestName}>
            {pointOfInterestName}
          </button>
        ))}
      </div>
      <div className={styles.children}>
        {children.map((childName) => (
          <button className={styles.clearFont} key={childName}>
            {childName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TreeView;
