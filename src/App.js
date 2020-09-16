import React, { useState, useEffect } from "react";
import Mole from "./Components/Moles/Moles";
import Hole from "./Components/Hole/Hole";
import "./App.css";
import Score from "./Components/Score/Score";

function App() {
  // Variables
  const [mole, setMole] = useState({
    hole: 1,
    isVisible: false,
  });

  const [playing, setPlaying] = useState(false);

  const [counter, setCounter] = useState(0);

  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (playing === false) return;
    if (mole.isVisible === true) {
      const time = Math.round(Math.random() * 700) + 400;
      setTimeout(() => {
        setMole({ ...mole, isVisible: false });
      }, time);
    } else {
      const time = Math.round(Math.random() * 2000) + 500;
      console.log("App -> time", time);
      setTimeout(() => {
        let number = Math.round(Math.random() * 3) + 1;
        setMole({ isVisible: true, hole: number });
      }, time);
    }
  }, [mole, playing]);

  useEffect(() => {
    if (counter === 50) {
      setPlaying(false);
    }
  }, [counter]);

  useEffect(() => {
    if (mole.isVisible === true) {
      setCounter((current) => {
        return current + 1;
      });
    }
  }, [mole.isVisible]);

  // Methods
  const gameLoop = () => {
    setScore(0)
    let number = Math.round(Math.random() * 3) + 1;
    setMole({ isVisible: true, hole: number });
    setPlaying(true);
  };

  const handleClick = (event, moleNumber) => {
    event.preventDefault();
    setScore(score + 1)
    if (score >= highScore) {
      setHighScore(highScore + 1)
    }
  };

  return (
    <div className="app">
      <div className="mole-row">
        <Hole>
          {mole.hole === 1 && mole.isVisible === true ? (
            <Mole onClick={(e) => handleClick(e, 1)}></Mole>
          ) : null}
        </Hole>
        <Hole>
          {mole.hole === 2 && mole.isVisible === true ? (
            <Mole onClick={(e) => handleClick(e, 2)}></Mole>
          ) : null}
        </Hole>
        <Hole>
          {mole.hole === 3 && mole.isVisible === true ? (
            <Mole onClick={(e) => handleClick(e, 3)}></Mole>
          ) : null}
        </Hole>
        <Hole>
          {mole.hole === 4 && mole.isVisible === true ? (
            <Mole onClick={(e) => handleClick(e, 4)}></Mole>
          ) : null}
        </Hole>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={() => gameLoop()}>Start</button>
      </div>
      <Score score={score} highScore={highScore}/>
    </div>
  );
}

export default App;
