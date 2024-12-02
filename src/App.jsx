import { useState } from "react";
import "./App.css";

import languages from "./db/languages";

function App() {
  const [title, setTitle] = useState(languages[0].title);
  const [description, setDescription] = useState(languages[0].description);

  return (
    <>
      <h1>LearnWeb development</h1>
      <div className="main-container">
        {/* button section */}
        <div className="button-container">
          <button
            className={"button"}
            isDisplayed={true}
            onClick={() => {
              setTitle(languages[0].title);
              setDescription(languages[0].description);
            }}
          >
            HTML
          </button>
          <button
            className={"button"}
            isDisplayed={false}
            onClick={() => {
              setTitle(languages[1].title);
              setDescription(languages[1].description);
            }}
          >
            CSS
          </button>
          <button
            className={"button"}
            isDisplayed={false}
            onClick={() => {
              setTitle(languages[2].title);
              setDescription(languages[2].description);
            }}
          >
            JavaScript
          </button>
          <button
            className={"button"}
            isDisplayed={false}
            onClick={() => {
              setTitle(languages[3].title);
              setDescription(languages[3].description);
            }}
          >
            Node.js
          </button>
          <button
            className={"button"}
            isDisplayed={false}
            onClick={() => {
              setTitle(languages[4].title);
              setDescription(languages[4].description);
            }}
          >
            Express
          </button>
          <button
            className={"button"}
            isDisplayed={false}
            onClick={() => {
              setTitle(languages[5].title);
              setDescription(languages[5].description);
            }}
          >
            ReactJS
          </button>
        </div>

        {/* card section */}
        <div className="card-container">
          <div className={"card"}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
