import { h, render } from "preact";
import { useState } from "preact/hooks";

const el = document.querySelector("#root") as HTMLElement;
el.removeChild(el.firstChild as HTMLElement); // remove loading placeholder

function App() {
  const [count, setCount] = useState(0);
  return (
    // @ts-ignore
    <button onclick={_ev => setCount(c => c + 1)}>{count.toString()}</button>
  );
}

render(<App />, el);
