import { useState } from "react";
import styles from "./AppShell.module.css";
import StandardButton from "../StandardButton/StandardButton";
import Toggle from "../Toggle/Toggle";
import { SunIcon } from "@/icons/sunIcon";
import { MoonIcon } from "@/icons/MoonIcon";

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={styles.container}
      id="main-appshell"
      data-testid="main-appshell"
    >
      {/* HEADER */}
      <header className={styles.header} id="main-header">
        <button
          type="button"
          className={styles.sidebarButton}
          onClick={handleToggleSidebar}
        >
          Open Sidebar
        </button>
        <h1 className={styles.headerText}>Text Quest</h1>
        <StandardButton
          text="Login"
          onClick={() => {}}
          type="button"
          btnType="secondary"
        />
      </header>

      {/* SIDEBAR */}
      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}
        id="main-sidebar"
      >
        <button
          type="button"
          className={styles.sidebarButton}
          onClick={handleToggleSidebar}
        >
          Open Sidebar
        </button>
        <div>content section</div>
        <div className={styles.toggleContainer}>
          <Toggle
            leftIcon={SunIcon}
            rightIcon={MoonIcon}
            on={true}
            onClick={() => {}}
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className={styles.content} id="main-content">
        {children}
      </section>

      {/* FOOTER */}
      <footer className={styles.footer} id="main-footer">
        Created 2024 by Mid Quest Crisis Studios
      </footer>
    </div>
  );
};

export default AppShell;
