import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    let [count,setCount] = useState(0);
    let [isClicked, toggleClicked] = useState(false);
    let [counterId, setId] = useState(null);

    useEffect(()=>{
      if(isClicked){
        let id=setTimeout(()=>{
          setCount(count+1)
        },1000);
        setId(id);
      }
      else {
        clearInterval(counterId);
      }
    },[isClicked, count])

    const handleClick=()=>{
      toggleClicked(!isClicked);
    }

    const stopTimer=()=>{
      toggleClicked(false);
      setCount(0);
      clearInterval(counterId);
    }

    return (
      <div className="App">
          <div>
            {count}
          </div>
          {isClicked ? <button onClick={handleClick}>
            pause
          </button> : <button onClick={handleClick}>
            Start
          </button>}
          <button onClick={stopTimer}>
            Stop
          </button>
      </div>
    );
}

export default App;
