import React from 'react';

export default function Button({ text, handleButtonClick }) {
  return (
    <button className='Button' onClick={handleButtonClick}>
      {text}
    </button>
  );
}
