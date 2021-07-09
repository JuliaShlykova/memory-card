import { useEffect, useState } from "react";
import CardsBoard from "./CardsBoard";


function Main() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [usedCards, setUsedCards] = useState([]);

  function reset() {
    setScore(0);
    setUsedCards([]);
  }

  function clickCard(card) {
    if (usedCards.indexOf(card)===-1) {
      setUsedCards((prevUsedCards) => [...prevUsedCards, card]);
      setScore(prevScore => ++prevScore);
    } else {
      if (highScore < score) {
        setHighScore(score);
      };
      reset();
    }
  }

  useEffect(() => {
    console.log('used cards: ', usedCards);
    if (score === 12) {
      alert('Wow, you have very good memory!');
      setHighScore(12);
      reset();
    }
  }, [score, usedCards]);

  return (
    <main>
      <div id="score">
        <p>Best score: {highScore}</p>
        <p>Score: {score}</p>
      </div>
      <CardsBoard score={score} clickCard={clickCard}/>
    </main>
  )
}

export default Main;