import styles from "./App.module.css";
import AppShell from "./components/AppShell/AppShell";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
  return (
    <AppShell>
      <GameBoard />
    </AppShell>
  );
}

export default App;
