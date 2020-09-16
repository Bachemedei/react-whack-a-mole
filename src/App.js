import React, { useState } from "react";
import Mole from "./Components/Moles/Moles";

function App() {
  // Variables
  const [moles, setMoles] = useState([
    {
      text: "Mole 1",
      isVisible: false,
    },
    {
      text: "Mole 2",
      isVisible: false,
    },
    {
      text: "Mole 3",
      isVisible: false,
    },
    {
      text: "Mole 4",
      isVisible: false,
    },
  ]);

  // Methods
  const moleAppear = () => {
    // Triggers a random mole to appear
    const newMoles = [...moles]
    var randomIndex = Math.round(Math.random() * 3)
    newMoles[randomIndex].isVisible = !newMoles[randomIndex].isVisible
    setMoles(newMoles);    
  }

  const moleDisappear = () => {
    // Finds the visible mole and makes it disappear
    for (let i=0; i < 4; i++) {
      if (moles[i].isVisible === true) {
        const newMoles = [...moles]
        newMoles[i].isVisible = !newMoles[i].isVisible
        setMoles(newMoles)
      }
    }
  }

  const gameLoop = () => {
    // Generates random times for the mole to appear, and then disappear
    var i = 0
    while (i < 5) {
      let time = Math.round(Math.random() * 2000) + 500;
      setTimeout(() => {
        moleAppear()
        let time2 = Math.round(Math.random() * 700) + 400;
        setTimeout(moleDisappear, time2)
      }, time)
      i++
    }
  }

  return (
    <div className="app">
      <div className="mole-row">
        {moles.map((mole, index) => (
          <Mole 
          mole={mole} 
          key={index} 
          index={index}
          moleAppear={moleAppear} />
        ))}
      </div>
      <button onClick={() => gameLoop()}>Start</button>
    </div>
  );
}

export default App;
