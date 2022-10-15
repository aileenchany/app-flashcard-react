function Card({ text, language, handleFlashcardClick }) {
  return (
    <div
      className='Card'
      onClick={handleFlashcardClick}
      style={language === 'French' ? { color: 'red' } : { color: `#fff` }}
    >
      <p id='card-text'>{text}</p>
    </div>
  );
}

export default Card;
