export default function Button({ text, handleClick }) {
  return (
    <button className='Button' onClick={handleClick}>
      {text}
    </button>
  );
}
