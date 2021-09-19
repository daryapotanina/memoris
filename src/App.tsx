import React, { useState } from "react";
import "./App.css";

function shuffle(array: any[]): any[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

let cards = shuffle([...Array(30).keys()].concat([...Array(30).keys()]));

function App() {
  const [opened, setOpened] = useState<number[]>([]);

  function handleCardClick(item: number, i: number) {
    setOpened([i]);
  }

  return (
    <div className="App">
      <header className="Memosis">
        <pre>opened: {JSON.stringify(opened)}</pre>
      </header>
      <div className="gameWrapper">
        <div className="game">
          {cards.map((item, i) => {
            let isOpen = opened.includes(i);
            return (
              <div
                onClick={() => handleCardClick(item, i)}
                key={`card_${i}`}
                className="card"
              >
                <img
                  className={"card_img"}
                  style={{ opacity: isOpen ? 1 : 0 }}
                  src="/pics/mone_kuvshinki.jpg"
                  alt=""
                />
                <div className="debug_index">{item}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
