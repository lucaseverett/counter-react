import { useState } from "react";
import styles from "./styles.js";

function Counter(props) {
  const [count, setCount] = useState(props.count);

  const inc = () => setCount(count + 1);

  const dec = () => {
    if (count !== 0) setCount(count - 1);
  };

  return (
    <div className={styles}>
      <button onClick={dec} className="dec">
        -
      </button>
      <span className="count">{count}</span>
      <button onClick={inc} className="inc">
        +
      </button>
    </div>
  );
}

export default Counter;
