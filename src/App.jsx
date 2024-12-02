import { useState } from "react";
import "./App.css";

import languages from "./db/languages";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(
    "Nessun lunguaggio selezionato"
  );
  const [colorBtn, setColorBtn] = useState("");

  const handleColorBtn = (index) => {
    languages[index - 1].isActive = !languages[index - 1].isActive;
    languages[index - 1].isActive == true
      ? setColorBtn("active")
      : setColorBtn("");
    // console.log(languages[index - 1].isActive);
  };

  return (
    <>
      <h1>LearnWeb development</h1>
      <div className="main-container">
        {/* button section */}
        <div className="button-container">
          <button
            className={`button  + ${colorBtn}`}
            onClick={() => {
              setTitle(languages[0].title);
              setDescription(languages[0].description);
              handleColorBtn(languages[0].id);
            }}
          >
            HTML
          </button>
          <button
            className={`button  + ${colorBtn}`}
            onClick={() => {
              setTitle(languages[1].title);
              setDescription(languages[1].description);
              handleColorBtn(languages[1].id);
            }}
          >
            CSS
          </button>
          <button
            className={`button  + ${colorBtn}`}
            onClick={() => {
              setTitle(languages[2].title);
              setDescription(languages[2].description);
              handleColorBtn(languages[2].id);
            }}
          >
            JavaScript
          </button>
          <button
            className={`button  + ${colorBtn}`}
            onClick={() => {
              setTitle(languages[3].title);
              setDescription(languages[3].description);
              handleColorBtn(languages[3].id);
            }}
          >
            Node.js
          </button>
          <button
            className={`button  + ${colorBtn}`}
            onClick={() => {
              setTitle(languages[4].title);
              setDescription(languages[4].description);
              handleColorBtn(languages[4].id);
            }}
          >
            Express
          </button>
          <button
            className={`button  + ${colorBtn}`}
            onClick={() => {
              setTitle(languages[5].title);
              setDescription(languages[5].description);
              handleColorBtn(languages[5].id);
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
