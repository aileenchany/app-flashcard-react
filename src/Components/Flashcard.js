import React, { useEffect, useState } from 'react';
import Button from './Button.js';
import Card from './Card.js';
import { data } from '../data.js';

export default function Flashcard() {
  const flashcardData = data.data;
  const [cardIndex, setCardIndex] = useState(0);
  const [language, setLanguage] = useState('English');
  const [cardText, setCardText] = useState('');

  useEffect(() => {
    setCardText(flashcardData[cardIndex][language]); //
  }, [language, flashcardData, cardIndex]);

  function handleFlashcardClick() {
    setLanguage((currState) =>
      currState === 'English' ? setLanguage('French') : setLanguage('English')
    );
  }

  function handlePrevClick() {
    const lastCardIndex = flashcardData.length - 1;
    if (cardIndex === 0) {
      setCardIndex(lastCardIndex);
    } else {
      setCardIndex((curr) => curr - 1);
    }
    setLanguage('English'); //reset language to English
  }

  function handleNextClick() {
    const lastCardIndex = flashcardData.length - 1;
    if (cardIndex === lastCardIndex) {
      setCardIndex(0);
    } else {
      setCardIndex((curr) => curr + 1);
    }
    setLanguage('English');
  }

  return (
    <div className='Flashcard'>
      <Button text='<' handleClick={handlePrevClick} />
      <Card
        text={cardText}
        language={language}
        handleFlashcardClick={handleFlashcardClick}
      />
      <Button text='>' handleClick={handleNextClick} />
    </div>
  );
}
