import { useState } from "react";
import "./App.css";

import languages from "./db/languages";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(
    "Nessun lunguaggio selezionato"
  );
  const [colorBtn, setColorBtn] = useState("");

  // const buttonArray = document.getElementsByClassName("button");
  // console.log(buttonArray);

  const handleColorBtn = (index) => {
    languages[index - 1].isActive = !languages[index - 1].isActive;
    languages[index - 1].isActive == true
      ? setColorBtn("active")
      : setColorBtn("");
  };

  return (
    <>
      <h1>LearnWeb development</h1>
      <div className="main-container">
        {/* button section */}
        <div className="button-container">
          <button
            data-value={1}
            className={`button  + ${colorBtn}`}
            onClick={() => {
              setTitle(languages[0].title);
              setDescription(languages[0].description);
              handleColorBtn(languages[0].id);

              // console.log(event.classList);
              {
                // console.log(event.target.getAttribute("data-value"));
              }
            }}
          >
            HTML
          </button>
          <button
            data-value={2}
            className={`button  + ${colorBtn}`}
            onClick={() => {
              setTitle(languages[1].title);
              setDescription(languages[1].description);
              handleColorBtn(languages[1].id);
              {
                console.log(event.target.getAttribute("data-value"));
              }
            }}
          >
            CSS
          </button>
          <button
            data-value={3}
            className={`button  + ${colorBtn}`}
            onClick={() => {
              setTitle(languages[2].title);
              setDescription(languages[2].description);
              handleColorBtn(languages[2].id);
              {
                console.log(event.target.getAttribute("data-value"));
              }
            }}
          >
            JavaScript
          </button>
          <button
            data-value={4}
            className={`button  + ${colorBtn}`}
            onClick={() => {
              setTitle(languages[3].title);
              setDescription(languages[3].description);
              handleColorBtn(languages[3].id);
              {
                console.log(event.target.getAttribute("data-value"));
              }
            }}
          >
            Node.js
          </button>
          <button
            data-value={5}
            className={`button  + ${colorBtn}`}
            onClick={() => {
              setTitle(languages[4].title);
              setDescription(languages[4].description);
              handleColorBtn(languages[4].id);
              {
                console.log(event.target.getAttribute("data-value"));
              }
            }}
          >
            Express
          </button>
          <button
            data-value={6}
            className={`button  + ${colorBtn}`}
            onClick={() => {
              setTitle(languages[5].title);
              setDescription(languages[5].description);
              handleColorBtn(languages[5].id);
              {
                console.log(event.target.getAttribute("data-value"));
              }
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
