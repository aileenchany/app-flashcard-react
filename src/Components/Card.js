import React from 'react';

function Card({ text = '' }) {
  return (
    <div className='Card'>
      <p id='card-text'>{text}</p>
    </div>
  );
}

export default Card;
