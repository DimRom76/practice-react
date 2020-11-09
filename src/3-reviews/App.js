import React from "react";
import Review from "./Review";

import "./App.css";

function App() {
  return (
    <main className="main-review">
      <section className="container-review">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline-review"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
