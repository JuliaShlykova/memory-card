import Card from './Card';
import bibi from './assets/Bibi.png';
import nanny from './assets/Nanny.png';
import mousy from './assets/Mousy.png';
import olga from './assets/Olga.png';
import dokko from './assets/Dokko.png';
import pinky from './assets/Pinky.png';
import jumpy from './assets/Jumpy.png';
import carlin from './assets/Carlin.png';
import chiko from './assets/Chiko.png';
import fluff from './assets/Fluff.png';
import berry from './assets/Berry.png';
import pin from './assets/Pin.png';
import { useEffect, useLayoutEffect, useState } from 'react';

function CardsBoard(props) {
  const pictures = [
    {
      src: berry,
      title: 'Berry',
      backgroundColor: '#FDE2D3',
      backgroundColorForDiv: '#F37022'
    },
    {
      src: bibi,
      title: 'Bibi',
      backgroundColor: '#EFF9FA',
      backgroundColorForDiv: '#B1E2E7'
    },
    {
      src: carlin,
      title: 'Carlin',
      backgroundColor: '#CCE5F4',
      backgroundColorForDiv: '#027EC6'
    },
    {
      src: chiko,
      title: 'Chiko',
      backgroundColor: '#F6DEE5',
      backgroundColorForDiv: '#D3597E'
    },
    {
      src: dokko,
      title: 'Dokko',
      backgroundColor: '#FCEFCC',
      backgroundColorForDiv: '#F1AD00'
    },
    {
      src: fluff,
      title: 'Fluff',
      backgroundColor: '#FBF6FA',
      backgroundColorForDiv: '#ECD0E6'
    },
    {
      src: jumpy,
      title: 'Jumpy',
      backgroundColor: '#E3F5F9',
      backgroundColorForDiv: '#73CEE1'
    },
    {
      src: mousy,
      title: 'Mousy',
      backgroundColor: '#FFF2CD',
      backgroundColorForDiv: '#FFBD04'
    },
    {
      src: nanny,
      title: 'Nanny',
      backgroundColor: '#E9DEDA',
      backgroundColorForDiv: '#935846'
    },
    {
      src: olga,
      title: 'Olga',
      backgroundColor: '#E1D9E8',
      backgroundColorForDiv: '#6B428D'
    },
    {
      src: pin,
      title: 'Pin',
      backgroundColor: '#D3D2D3',
      backgroundColorForDiv: '#222021'
    },
    {
      src: pinky,
      title: 'Pinky',
      backgroundColor: '#FFF6F7',
      backgroundColorForDiv: '#FED4D8'
    }
  ];

  const [cards, setCards] = useState(pictures);

  const {score, clickCard} = props;

  function shuffle(cards) {
    const newCards = [...cards];
    let i = newCards.length;
    while(i !== 0) {
      let randomIndex = Math.floor(Math.random()*i);
      i--;
      [newCards[i], newCards[randomIndex]] = [newCards[randomIndex], newCards[i]];
    }
    return newCards;
  };
  
  useEffect(() => {
    let newCards = shuffle(cards);
    setCards(newCards);
  }, [score]);

  return (
    <div id="cards-board">
      {cards.map((card)=> (
        <Card card={card} key={card.title} clickCard={clickCard}/>
      ))}
    </div>
  )
}

export default CardsBoard;