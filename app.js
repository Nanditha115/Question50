import './App.css';
import {useState} from 'react';
const App = () => {

  const [num, setNum] = useState(0);
  function randomNumberRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberRange(10, 5000));
  };

  return (
    <div>
      <h2>Wohoo! The random number you have generated is: {num}</h2>
      <button onClick={handleClick}>Generate random number</button>
    </div>
  );
};
export default App;
