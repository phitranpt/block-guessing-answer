import "./styles.css";
import Blocks from "./Blocks";
import { useState } from "react";

export default function App() {
  const [randomColor, setRandomColor] = useState("");
  const [result, setResult] = useState("");

  const startGame = () => {
    const array = ["red", "green", "blue"];
    const random = array[Math.floor(Math.random() * array.length)];
    setRandomColor(random);
  }

  const clickHandler = (taco) => {
    if (taco === randomColor) {
      setResult("You Won!")
    } else {
      setResult("Try again")
    }
  }

  return (
    <>
      <div>Color Guessing Game</div>
      <div>Computer chose: {randomColor}</div>
      <div>Guess the color!</div>
      <div>{result}</div>
      <div className="color-group">
        <Blocks className={"red-block"} clickHandler={clickHandler} color={"red"} />
        <Blocks className={"green-block"} clickHandler={clickHandler} color={"green"} />
        <Blocks className={"blue-block"} clickHandler={clickHandler} color={"blue"} />
      </div>
      <button onClick={startGame}>Start Game</button>
    </>
  );
}
