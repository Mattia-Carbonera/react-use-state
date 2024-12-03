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

  const [isActiveBtn, setIsActiveBtn] = useState(true);

  const handlerClass = () => {
    setIsActiveBtn(!isActiveBtn);
  };

  const handleColorBtn = (index) => {
    isActiveBtn == true ? setColorBtn("active") : setColorBtn("");
  };

  let active1 = title == "HTML" ? "active" : "";
  let active2 = title == "CSS" ? "active" : "";
  let active3 = title == "JavaScript" ? "active" : "";
  let active4 = title == "Node.js" ? "active" : "";
  let active5 = title == "Express" ? "active" : "";
  let active6 = title == "ReactJS" ? "active" : "";

  return (
    <>
      <h1>LearnWeb development</h1>
      <div className="main-container">
        {/* button section */}
        <div className="button-container">
          <button
            data={1}
            isactive={isActiveBtn}
            className={"button " + active1}
            onClick={() => {
              setTitle(languages[0].title);
              setDescription(languages[0].description);
              handleColorBtn(languages[0].id);

              handlerClass();

              // event.target.className.add(" d-none");
              console.log(event.target);
            }}
          >
            HTML
          </button>
          <button
            data-value={2}
            className={"button " + active2}
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
            className={"button " + active3}
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
            className={"button " + active4}
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
            className={"button " + active5}
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
            className={"button " + active6}
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
