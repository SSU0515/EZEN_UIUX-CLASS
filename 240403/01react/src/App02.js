import "./App.css";
import Controller from "./components/Controller.js";
import Viewer01 from "./components/Viewer01.js";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handleSetCount = (num) => {
    setCount(count + num);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer01 count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
};

export default App;
