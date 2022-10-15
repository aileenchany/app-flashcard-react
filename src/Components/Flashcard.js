import React, { useState, useEffect } from 'react';
import Button from './Button.js';
import Card from './Card.js';
import { data } from '../data.js';

/*
App.jsx
  |_Flashcard.jsx
      |_Button.jsx ('prev')
      |_Card.jsx ('Hello' text is displayed)
      |_Button.jsx ('next')
*/

export default function Flashcard() {
  const [cardIndex, setCardIndex] = useState(0);
  const [flashcardData, setFlashcardData] = useState([]);
  const [currFlashcard, setCurrFlashcard] = useState(flashcardData[cardIndex]);
  const [cardText, setCardText] = useState('Hello World');

  useEffect(() => {
    setFlashcardData(data.data);
    setCurrFlashcard(data.data[cardIndex]);
    setCardText(currFlashcard.English);
    console.log(cardText);
    const sample = flashcardData[cardIndex];
    console.log(sample['English']);
    //setCardText(flashcardData[position].English);
  }, [flashcardData]);

  function handlePrevClick() {
    const lastCardIndex = flashcardData.length - 1;
    if (cardIndex === 0) {
      setCardIndex((curr) => curr === lastCardIndex);
    } else {
      setCardIndex((curr) => curr - 1);
    }
  }

  function handleNextClick() {
    const lastCardIndex = flashcardData.length - 1;
    if (cardIndex === lastCardIndex) {
      setCardIndex((curr) => curr === 0);
    } else {
      setCardIndex((curr) => curr + 1);
    }
  }

  return (
    <div className='Flashcard'>
      <Button text='prev' onClick={handlePrevClick} />
      <Card text={cardText} />
      <Button text='next' onClick={handleNextClick} />
    </div>
  );
}
