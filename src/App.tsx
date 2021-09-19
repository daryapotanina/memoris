import React from "react";
import "./App.css";

function App() {
  let cards = [...Array(30).keys()].concat([...Array(30).keys()]);
  return (
    <div className="App">
      <header className="Memosis"></header>
      <div className="gameWrapper">
        <div className="game">
          {cards.map((item, i) => {
            return (
              <div key={`card_${i}`} className="card">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
