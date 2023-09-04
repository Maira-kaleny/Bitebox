import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const [activeKey, setActiveKey] = useState('')
  useEffect(() => {
  document.addEventListener('keydown', (event) => {
    playSound(event.key.toUpperCase());  
  });
  }, []);

  const drumPads = [
    {
      keyCode: 81,
      text: 'Q',
      src: "https://s3.amazonaws.com/freecodecamp..."
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp..."
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp..."
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp..."
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp..."
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp..."
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp..."
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp..."
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp..."
    }
 ];
 
 function playSound(selector){
  const audio = document.getElementById(selector);
   console.log(audio);
   audio.play();
   setActiveKey(selector)
 }
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{activeKey}</div>
        <div className='drum-Pads'>
          {drumPads.map((drumPad) => (
           <div 
           key={drumPad.src}
           onClick={() => {
            playSound(drumPad.text)
           }} 
           className="drum-pad"
           id={drumPad.src}
           >
            {drumPad.text}
            <audio 
            className="clip"
            id={drumPad.text}
            src={drumPad.src}
            ></audio>
          </div>
          ))}
        </div>
       </div>
      </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'))
export default App;
