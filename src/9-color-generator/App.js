import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const startColor = "#f15025";
  const [list, setList] = useState(new Values(startColor).all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container-color">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={`input-color ${error ? "error" : null}`}
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder={startColor}
          />
          <button className="btn-color" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
