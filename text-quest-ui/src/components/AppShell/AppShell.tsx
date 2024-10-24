import { useState } from "react";
import styles from "./AppShell.module.css";

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header} id="main-header">
        <button className={styles.button} onClick={handleToggleSidebar}>
          Toggle
        </button>
      </header>
      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}
        id="main-sidebar"
      ></div>
      <section className={styles.content} id="main-content">
        {children}
      </section>
      <footer className={styles.footer} id="main-footer"></footer>
    </div>
  );
};

export default AppShell;
