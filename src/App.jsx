// import { useState } from "react";
import "./App.css";

import languages from "./db/languages";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>LearnWeb development</h1>
      <div className="main-container">
        {/* button section */}
        <div className="button-container">
          <button className={"button"}>HTML</button>
          <button className={"button"}>CSS</button>
          <button className={"button"}>JavaScript</button>
          <button className={"button"}>Node.js</button>
          <button className={"button"}>Express</button>
          <button className={"button"}>ReactJS</button>
        </div>

        {/* card section */}
        <div className="card-container">
          <div className="card">
            <h2>HTML</h2>
            <p>
              HTML (HyperText Markup Language) è il linguaggio standard per
              creare pagine e applicazioni web. Struttura il contenuto web e
              fornisce elementi di base come titoli, paragrafi e immagini.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
