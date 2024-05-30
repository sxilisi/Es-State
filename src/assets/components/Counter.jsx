import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter() {
  const [counter, useCounter] = useState(0);

  function hadleCounterIncrement() {
    useCounter((c) => c + 1);
  }

  function hadleCounterDecrement() {
    useCounter((c) => c - 1);
  }

  function hadleCounterReset() {
    useCounter(0);
  }

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={hadleCounterIncrement}>increment</button>
      <button onClick={hadleCounterReset}>reset</button>
      <button onClick={hadleCounterDecrement}>decrement</button>
    </div>
  );
}
