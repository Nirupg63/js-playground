import {useState} from 'react';
import './App.css';

function App() {
  const [randomWord, setRandomWord] = useState('');

  const getRandomWord = async () => {
    console.log("Getting Random Word from server")
    const response = await fetch('http://localhost:9000/word');
    console.log("Response ", response)
    const body = await response.json();
    console.log("Body: ", body)
    setRandomWord(body.word)
  }

  return (
    <div className="App">
      <button onClick={getRandomWord}>Click to generate a word that takes 3 seconds</button>
      <h2>{randomWord}</h2>
    </div>
  );
}

export default App;
