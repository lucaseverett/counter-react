import Counter from "../Counter";
import styles from "./styles.js";

function App() {
  return (
    <div className={styles}>
      <Counter count={0} />
    </div>
  );
}

export default App;
